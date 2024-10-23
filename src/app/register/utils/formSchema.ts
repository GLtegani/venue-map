import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "O campo nome deve conter no mínimo um carácter"),
    lastName: z
      .string()
      .min(1, "O campo sobrenome deve conter no mínimo 1 carácter"),
    email: z
      .string()
      .email({ message: "Email inválido, tente novamente" })
      .min(1, "O campo email deve conter no mínimo um carácter"),
    password: z.string().min(6, "Sua senha deve conter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "Sua senha deve conter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });

export type RegisterData = z.infer<typeof registerSchema>;
