import z from "zod";

export const RecoveryPasswordFormSchema = z.object({
    email: z.email("E-mail é obrigatório").min(1, "E-mail é obrigatório")
})