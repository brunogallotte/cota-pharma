"use server"

import z from "zod"
import { RegisterFormSchema } from "./RegisterFormSchema"
import { prisma } from "@/prisma/prisma"

export const registerUserAction = async (data: z.infer<typeof RegisterFormSchema>) => {
    const parsedData = RegisterFormSchema.parse(data)

    const hasUserWithSameEmail = await prisma.users.findUnique({
        where: {
            email: parsedData.email
        }
    })

    // Aqui você pode continuar com a lógica de criação do usuário
    // const newUser = await prisma.users.create({...})
}