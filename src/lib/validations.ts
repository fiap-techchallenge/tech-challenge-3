import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Por favor, insira um e-mail válido")
    .required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

export const postSchema = yup.object({
  title: yup
    .string()
    .min(5, "O título deve ter pelo menos 5 caracteres")
    .max(100, "O título deve ter menos de 100 caracteres")
    .required("Título é obrigatório"),
  content: yup
    .string()
    .min(50, "O conteúdo deve ter pelo menos 50 caracteres")
    .required("Conteúdo é obrigatório"),
  author: yup
    .string()
    .min(2, "O nome do autor deve ter pelo menos 2 caracteres")
    .max(50, "O nome do autor deve ter menos de 50 caracteres")
    .required("Autor é obrigatório"),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
export type PostFormData = yup.InferType<typeof postSchema>;
