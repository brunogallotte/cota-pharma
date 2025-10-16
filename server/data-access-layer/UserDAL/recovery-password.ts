"use server"

import z from "zod"
import { prisma } from "@/prisma/prisma"
import bcrypt from "bcryptjs"
import { RecoveryPasswordSchema } from "@/app/(public)/(auth)/auth/recovery/_pageResources/components/RecoveryPasswordForm/RecoveryPasswordSchema"
import { auth } from "@/auth"
import getQueriesViaHeaders from "@/utils/getQueriesViaHeaders"

export const recoveryPasswordAction = async (data: z.infer<typeof RecoveryPasswordSchema>): Promise<TActionReturn> => {
    const { password } = RecoveryPasswordSchema.parse(data)

    const session = await auth()
    const queries = await getQueriesViaHeaders()

    const user = await prisma.user.findUnique({ where: { id: session?.user?.id }, select: { id: true, userInfo: { select: { password_recovery_token: true, id: true } } } })

    if (!user || queries.token !== user.userInfo[0].password_recovery_token) return { status: "error", client: { toast: { title: "Erro", description: "Token de recuperação de senha inválido" } } }

    if (queries.token === user.userInfo[0].password_recovery_token)  {
        await prisma.user.update({ where: { id: user.id }, data: { password: await bcrypt.hash(password, 6), userInfo: { update: { where: { id: user.userInfo[0].id }, data: { password_recovery_token: null } } } } })
    }

    return { status: "success" }
}

type TActionReturn = { status: "success" | "error", data?: any, client?: { redirectUrl?: string, toast?: { title: string, description: string } } }