import { z } from "zod";

export const contactoSchema = z.object({
  empresa: z
    .string()
    .min(2, "La empresa debe tener al menos 2 caracteres"),
  email: z
    .string()
    .min(1, "El correo es obligatorio")
    .email("Ingresa un correo válido"),
  carga: z
    .string()
    .min(3, "Describe el tipo de carga y destino"),
  volumen: z
    .string()
    .min(1, "El volumen es obligatorio"),
  desafio: z.string().optional(),
});

export type ContactoFormData = z.infer<typeof contactoSchema>;
