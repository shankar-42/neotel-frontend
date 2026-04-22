import { z } from "zod";

import {
  CONTACT_EMAIL_PATTERN,
  CONTACT_MIN_COMPANY_LENGTH,
  CONTACT_MIN_MESSAGE_LENGTH,
  CONTACT_MIN_NAME_LENGTH,
  CONTACT_VALIDATION_ERROR_COMPANY_REQUIRED,
  CONTACT_VALIDATION_ERROR_COMPANY_SHORT,
  CONTACT_VALIDATION_ERROR_EMAIL_INVALID,
  CONTACT_VALIDATION_ERROR_EMAIL_REQUIRED,
  CONTACT_VALIDATION_ERROR_MESSAGE_REQUIRED,
  CONTACT_VALIDATION_ERROR_MESSAGE_SHORT,
  CONTACT_VALIDATION_ERROR_NAME_REQUIRED,
  CONTACT_VALIDATION_ERROR_NAME_SHORT,
} from "@/routes/contact/constants";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, CONTACT_VALIDATION_ERROR_NAME_REQUIRED)
    .refine((val) => val.length >= CONTACT_MIN_NAME_LENGTH, {
      message: CONTACT_VALIDATION_ERROR_NAME_SHORT,
    }),
  email: z
    .string()
    .trim()
    .min(1, CONTACT_VALIDATION_ERROR_EMAIL_REQUIRED)
    .refine((val) => CONTACT_EMAIL_PATTERN.test(val), {
      message: CONTACT_VALIDATION_ERROR_EMAIL_INVALID,
    }),
  company: z
    .string()
    .trim()
    .min(1, CONTACT_VALIDATION_ERROR_COMPANY_REQUIRED)
    .refine((val) => val.length >= CONTACT_MIN_COMPANY_LENGTH, {
      message: CONTACT_VALIDATION_ERROR_COMPANY_SHORT,
    }),
  message: z
    .string()
    .trim()
    .min(1, CONTACT_VALIDATION_ERROR_MESSAGE_REQUIRED)
    .refine((val) => val.length >= CONTACT_MIN_MESSAGE_LENGTH, {
      message: CONTACT_VALIDATION_ERROR_MESSAGE_SHORT,
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
