import z from "zod";
import { RecoveryPasswordFormSchema } from "./RecoveryPasswordSchema";
import { prisma } from "@/prisma/prisma";
import { randomUUID } from "node:crypto";

export const recoveryPasswordAction = async (data: z.infer<typeof RecoveryPasswordFormSchema>) => {
    const { email } = RecoveryPasswordFormSchema.parse(data)

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) return { status: "error", client: { toast: { title: "Erro", description: "Usuário não encontrado" } } }

    await prisma.user.update({ where: { id: user.id }, data: { userInfo: { update: { where: { user_id: user.id }, data: { password_recovery_token: randomUUID() } } } } })

    return { status: "success" }
}