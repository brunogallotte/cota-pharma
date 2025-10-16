import z from "zod";

export const RedefinePasswordSchema = z.object({
    password: z.string("Senha é obrigatória").min(8, "A senha deve ter no mínimo 8 caracteres"),
    confirmPassword: z.string("Confirmar Senha é obrigatório").min(8, "A senha deve ter no mínimo 8 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
});