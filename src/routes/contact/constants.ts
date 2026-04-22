/** Contact form validation — messages and thresholds */

export const CONTACT_MIN_NAME_LENGTH = 2;
export const CONTACT_MIN_COMPANY_LENGTH = 2;
export const CONTACT_MIN_MESSAGE_LENGTH = 10;

export const CONTACT_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CONTACT_VALIDATION_ERROR_NAME_REQUIRED = "Enter your full name.";
export const CONTACT_VALIDATION_ERROR_NAME_SHORT = `Name must be at least ${CONTACT_MIN_NAME_LENGTH} characters.`;
export const CONTACT_VALIDATION_ERROR_EMAIL_REQUIRED = "Enter your email address.";
export const CONTACT_VALIDATION_ERROR_EMAIL_INVALID = "Enter a valid email address.";
export const CONTACT_VALIDATION_ERROR_COMPANY_REQUIRED = "Enter your company or organisation.";
export const CONTACT_VALIDATION_ERROR_COMPANY_SHORT = `Company must be at least ${CONTACT_MIN_COMPANY_LENGTH} characters.`;
export const CONTACT_VALIDATION_ERROR_MESSAGE_REQUIRED = "Tell us how we can help.";
export const CONTACT_VALIDATION_ERROR_MESSAGE_SHORT = `Message must be at least ${CONTACT_MIN_MESSAGE_LENGTH} characters.`;

/** Shadcn Input control — bottom-border style for contact multi-step form */
export const CONTACT_FORM_CONTROL_CLASS =
  "h-auto min-h-[3rem] w-full rounded-none border-0 border-b-2 border-white/30 bg-surface-container-highest/60 px-0 py-3.5 text-base text-on-surface leading-normal shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-secondary md:text-base dark:bg-surface-container-highest/60";

export const CONTACT_FORM_TEXTAREA_CLASS =
  "h-auto min-h-[8.5rem] w-full resize-none rounded-none border-0 border-b-2 border-white/30 bg-surface-container-highest/60 px-0 py-4 text-base text-on-surface leading-normal shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-secondary md:text-base dark:bg-surface-container-highest/60";

export const CONTACT_FORM_LABEL_CLASS =
  "font-label text-[10px] tracking-widest uppercase text-on-surface-variant group-focus-within:text-secondary flex items-center gap-1.5";
