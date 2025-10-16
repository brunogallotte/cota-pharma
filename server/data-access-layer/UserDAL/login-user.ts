"use server"

import z from "zod"
import { LoginFormSchema } from "@/app/(public)/(auth)/auth/login/_pageResources/components/LoginForm/LoginFormSchema"
import { signIn } from "@/auth"

export const loginUserAction = async (data: z.infer<typeof LoginFormSchema>): Promise<TActionReturn> => {
  const { email, password } = LoginFormSchema.parse(data)

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
  } catch (error) {
    console.log(error)
    return { status: "error", client: { toast: { title: 'Erro ao fazer login', description: 'Credenciais inválidas' } } }
  }

  return { status: "success" }
}

type TActionReturn = { status: "success" | "error", data?: any, client?: { redirectUrl?: string, toast?: { title: string, description: string } } }