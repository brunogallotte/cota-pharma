"use server"

import z from "zod";
import { prisma } from "@/prisma/prisma";
import { randomUUID } from "node:crypto";
import { RecoveryPasswordFormSchema } from "@/app/(public)/(auth)/auth/recovery/_pageResources/components/RecoveryPasswordForm/RecoveryPasswordSchema";
import { EmailDAL } from "../EmailDAL";
import getHostViaHeaders from "@/utils/getHostViaHeaders";

export const recoveryPasswordAction = async (data: z.infer<typeof RecoveryPasswordFormSchema>) => {
    const { email } = RecoveryPasswordFormSchema.parse(data)

    const user = await prisma.user.findUnique({ where: { email }, select: { id: true, userInfo: { select: { id: true } } } })

    if (!user) return { status: "error", client: { toast: { title: "Erro", description: "Usuário não encontrado" } } }

    const passwordRecoveryToken = randomUUID()

    await prisma.user.update({ where: { id: user.id }, data: { userInfo: { update: { where: { id: user.userInfo[0].id }, data: { password_recovery_token: passwordRecoveryToken } } } } })

    await EmailDAL.resendConnection.emails.send({
        from: "Bruno Gallotte <onboarding@resend.dev>",
        to: "cotapharma@gmail.com",
        subject: "Recuperação de senha",
        react: EmailDAL.reactEmails.RecoveryPasswordEmail({
            name: "Bruno Gallotte",
            emailVerificationToken: passwordRecoveryToken,
            host: await getHostViaHeaders()
        })
    });

    return { status: "success" }
}