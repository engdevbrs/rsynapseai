import { z } from "zod";

/**
 * Schema de validación para el formulario de contacto
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),

  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Por favor ingresa un email válido")
    .toLowerCase(),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      "Por favor ingresa un número de teléfono válido"
    ),

  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede exceder 500 caracteres"),

  company: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Schema para newsletter subscription
 */
export const newsletterSchema = z.object({
  email: z.string().email("Por favor ingresa un email válido").toLowerCase(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
