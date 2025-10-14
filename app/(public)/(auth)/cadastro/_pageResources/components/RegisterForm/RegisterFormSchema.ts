import z from "zod";

export const RegisterFormSchema = z.object({
    userType: z.enum(["pharmacy", "supplier"]),
    name: z.string(),
    cnpj: z.string(),
    phone: z.string(),
    email: z.email(),
    password: z.string(),
    confirmPassword: z.string(),
})