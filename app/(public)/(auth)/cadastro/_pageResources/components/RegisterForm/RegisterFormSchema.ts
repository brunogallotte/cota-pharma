import z from "zod";

export const RegisterFormSchema = z.object({
    userType: z.enum(["pharmacy", "supplier"], {
        message: "Tipo de conta é obrigatório",
    }),
    name: z.string().min(1, "Nome Completo é obrigatório"),
    cnpj: z.string().min(1, "CNPJ é obrigatório"),
    phone: z.string().min(1, "Digite o seu whatsapp"),
    email: z.email("E-mail é obrigatório").min(1, "E-mail é obrigatório"),
    password: z.string("Senha é obrigatória").min(1, "Senha é obrigatória"),
    confirmPassword: z.string("Confirmar Senha é obrigatório").min(1, "Confirmar Senha é obrigatório"),
})