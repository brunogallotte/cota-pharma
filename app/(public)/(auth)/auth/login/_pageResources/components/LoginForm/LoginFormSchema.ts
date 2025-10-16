import z from "zod";

export const LoginFormSchema = z.object({
  // userType: z.enum(["pharmacy", "supplier"], {
  //   message: "Tipo de conta é obrigatório",
  // }),
  // name: z.string().min(1, "Nome Completo é obrigatório"),
  // cnpj: z.string()
  //   .min(1, "CNPJ é obrigatório")
  //   .length(18, "CNPJ deve ter 14 dígitos"),
  // phone: z.string()
  //   .min(1, "Digite o seu whatsapp")
  //   .length(19, "Telefone deve ter 11 dígitos"),
  email: z.email("E-mail é obrigatório").min(1, "E-mail é obrigatório"),
  password: z.string("Senha é obrigatória").min(8, "A senha deve ter no mínimo 8 caracteres"),
});