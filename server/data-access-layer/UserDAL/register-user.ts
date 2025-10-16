"use server"

import z from "zod"
import { RegisterFormSchema } from "@/app/(public)/(auth)/auth/register/_pageResources/components/RegisterForm/RegisterFormSchema"
import { prisma } from "@/prisma/prisma"
import bcrypt from "bcryptjs"
import { randomUUID } from "node:crypto"
import { EmailDAL } from "../EmailDAL"
import getHostViaHeaders from "@/utils/getHostViaHeaders"

export const registerUserAction = async (data: z.infer<typeof RegisterFormSchema>): Promise<TActionReturn> => {
    const { email, name, cnpj, phone, password, userType } = RegisterFormSchema.parse(data)

    const hasUserWithSameEmail = await prisma.user.findUnique({ where: { email } })

    if (hasUserWithSameEmail) return { status: "error", client: { toast: { title: "Erro", description: "Email já cadastrado" } } }

    const hasUserWithSameCnpj = await prisma.user.findUnique({ where: { cnpj } })

    if (hasUserWithSameCnpj) return { status: "error", client: { toast: { title: "Erro", description: "CNPJ já cadastrado" } } }

    const passwordHashed = await bcrypt.hash(password, 6)
    const verificationEmailToken = randomUUID()

    const user =await prisma.user.create({
        data: {
            email,
            name,
            cnpj,
            phone,
            password: passwordHashed,
            type: userType,
            created_at: new Date(),
            userInfo: {
                create: {
                    verification_email_token: verificationEmailToken
                }
            }
        }
    })

    const host = await getHostViaHeaders();

    await EmailDAL.resendConnection.emails.send({
        from: "Bruno Gallotte <onboarding@resend.dev>",
        to: "cotapharma@gmail.com",
        subject: "Confirme seu email",
        react: EmailDAL.reactEmails.ConfirmEmail({
            name: "Bruno Gallotte",
            emailVerificationToken: verificationEmailToken,
            host
        })
    });

    return { status: "success" }
}

type TActionReturn = { status: "success" | "error", data?: any, client?: { redirectUrl?: string, toast?: { title: string, description: string } } }