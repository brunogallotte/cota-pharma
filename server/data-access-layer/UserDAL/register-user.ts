"use server"

import z from "zod"
import { RegisterFormSchema } from "@/app/(public)/(auth)/register/_pageResources/components/RegisterForm/RegisterFormSchema"
import { prisma } from "@/prisma/prisma"
import bcrypt from "bcryptjs"

export const registerUserAction = async (data: z.infer<typeof RegisterFormSchema>): Promise<TActionReturn> => {
    const { email, name, cnpj, phone, password, userType } = RegisterFormSchema.parse(data)

    const hasUserWithSameEmail = await prisma.user.findUnique({ where: { email } })

    if (hasUserWithSameEmail) return { status: "error", client: { toast: { title: "Erro", description: "Email já cadastrado" } } }

    const hasUserWithSameCnpj = await prisma.user.findUnique({ where: { cnpj } })

    if (hasUserWithSameCnpj) return { status: "error", client: { toast: { title: "Erro", description: "CNPJ já cadastrado" } } }

    const passwordHashed = await bcrypt.hash(password, 6)

    await prisma.user.create({
        data: {
            email,
            name,
            cnpj,
            phone,
            password: passwordHashed,
            type: userType,
            created_at: new Date()
        }
    })

    return { status: "success" }
}

type TActionReturn = { status: "success" | "error", data?: any, client?: { redirectUrl?: string, toast?: { title: string, description: string } } }