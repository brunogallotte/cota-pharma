import z from "zod";

export const RegisterFormSchema = z.object({
    userType: z.enum(["pharmacy", "supplier"], {
        message: "Tipo de conta é obrigatório",
    }),
    name: z.string().min(1, "Nome Completo é obrigatório"),
    cnpj: z.string()
        .min(1, "CNPJ é obrigatório")
        .length(18, "CNPJ deve ter 14 dígitos"),
    phone: z.string()
        .min(1, "Digite o seu whatsapp")
        .length(15, "Telefone deve ter 11 dígitos"),
    email: z.email("E-mail é obrigatório").min(1, "E-mail é obrigatório"),
    password: z.string("Senha é obrigatória").min(1, "Senha é obrigatória"),
    confirmPassword: z.string("Confirmar Senha é obrigatório").min(1, "Confirmar Senha é obrigatório"),
})