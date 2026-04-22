import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Map,
  Send,
  MailOutlined,
  PhoneInTalk,
  PersonOutlined,
  BusinessCenter,
  ChatBubbleOutlined,
  CheckCircle,
  SupportAgent,
  Schedule,
  OpenInNew,
  CheckCircleOutlined,
} from "@mui/icons-material";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  CONTACT_FORM_CONTROL_CLASS,
  CONTACT_FORM_LABEL_CLASS,
  CONTACT_FORM_TEXTAREA_CLASS,
} from "@/routes/contact/constants";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/routes/contact/form-schema";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  HEADQUARTERS_MAP_QUERY,
  NETWORK_STATUS_ROUTE,
  SOFT_DARK_BOTTOM_SCRIM,
  SOFT_DARK_HERO_OVERLAY,
} from "@/utils/constants";

// ─── Constants & Data ─────────────────────────────────────────────────────────

const CONTACT_BOXES = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    sub: "We reply within 4 hours",
    Icon: MailOutlined,
    href: CONTACT_MAILTO,
  },
  {
    label: "Call us",
    value: CONTACT_PHONE_DISPLAY,
    sub: "Mon–Fri, 08:00–20:00 UTC",
    Icon: PhoneInTalk,
    href: CONTACT_PHONE_TEL,
  },
] as const;

const FORM_STEPS = ["Identification", "Affiliation", "Your Message"];

export function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const handleNext = async () => {
    if (currentStep === 0) {
      const ok = await form.trigger(["name", "email"], { shouldFocus: true });
      if (!ok) return;
    } else if (currentStep === 1) {
      const ok = await form.trigger(["company"], { shouldFocus: true });
      if (!ok) return;
    }
    if (currentStep < FORM_STEPS.length - 1) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const onSubmit = async () => {
    setFormState("submitting");
    await new Promise((res) => setTimeout(res, 1800));
    setFormState("success");
  };

  const renderStepIndicator = () => (
    <div className="flex items-center gap-0 mb-14">
      {FORM_STEPS.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? "bg-secondary text-on-secondary"
                    : isActive
                      ? "bg-secondary text-on-secondary ring-4 ring-secondary/40"
                      : "bg-surface-container-highest text-on-surface-variant/55"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle sx={{ fontSize: 18 }} />
                ) : (
                  <span className="text-xs font-black font-headline">
                    {index + 1}
                  </span>
                )}
              </div>
              <span
                className={`font-label text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isActive
                    ? "text-secondary font-bold"
                    : isCompleted
                      ? "text-secondary/90"
                      : "text-on-surface-variant/50"
                }`}
              >
                {step}
              </span>
            </div>

            {index < FORM_STEPS.length - 1 && (
              <div className="flex-1 mx-3 mb-5">
                <div className="h-px w-full relative overflow-hidden bg-outline-variant/20">
                  <div
                    className="absolute inset-0 bg-secondary transition-transform duration-500 origin-left"
                    style={{
                      transform: `scaleX(${index < currentStep ? 1 : 0})`,
                    }}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );

  return (
    <div className="bg-background text-on-surface font-body min-h-screen">
      <main className="pb-24">
        <div className="relative w-full bg-tier-1 overflow-hidden">
          <div className={SOFT_DARK_HERO_OVERLAY} />
          <div className={SOFT_DARK_BOTTOM_SCRIM} />
          <section className="relative z-10 pt-32 pb-0 px-8 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-outline-variant/10 pb-12 mb-0">
              <div className="max-w-2xl">
                <span className="font-label text-secondary tracking-[0.4em] uppercase text-[10px] mb-4 block">
                  Support & Contact
                </span>
                <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter leading-[1.08]">
                  Establish <br />
                  <span className="text-primary block max-w-full">
                    Direct Uplink.
                  </span>
                </h1>
                <p className="mt-5 text-on-surface-variant font-light text-base leading-relaxed max-w-md">
                  Get technical support, raise a ticket, or speak to an
                  engineer. We're here 24/7.
                </p>
              </div>
              <div className="max-w-xs text-right hidden md:block">
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                  Speak directly with deployment and operations teams for urgent
                  incidents, architecture planning, or managed service support.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="py-14 px-8 max-w-screen-2xl mx-auto">
          <section className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {CONTACT_BOXES.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative bg-surface-container-high/95 border border-outline-variant/15 p-6 flex items-start gap-4 hover:bg-surface-container-highest transition-colors duration-200 rounded-lg"
                >
                  <item.Icon
                    sx={{ fontSize: 22 }}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-headline text-base font-semibold mb-0.5 group-hover:text-primary transition-colors">
                      {item.label}
                    </p>
                    <p className="text-on-surface font-body text-sm mb-1">
                      {item.value}
                    </p>
                    <p className="text-on-surface-variant text-xs font-light">
                      {item.sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Sidebar Info Blocks */}
            <div className="md:col-span-5 space-y-10">
              <div className="relative p-8 bg-surface-container-low/95 border border-outline-variant/15 overflow-hidden rounded-lg">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary" />
                <span className="font-label text-secondary/60 text-[10px] tracking-widest uppercase mb-6 block">
                  Physical Node
                </span>
                <h3 className="font-headline text-2xl font-bold mb-2">
                  Primary Headquarters
                </h3>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  Level 88, Obsidian Tower
                  <br />
                  99 Silicon Boulevard
                  <br />
                  Tech District, NE 40401
                </p>
                <a
                  href={HEADQUARTERS_MAP_QUERY}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-secondary cursor-pointer group"
                >
                  <Map fontSize="small" />
                  <span className="font-label uppercase text-[10px] tracking-widest group-hover:underline">
                    Open in Maps
                  </span>
                </a>
              </div>

              <div className="relative p-8 bg-surface-container-low/95 border border-outline-variant/15 rounded-lg overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 border border-secondary/25 flex items-center justify-center shrink-0 mt-1">
                    <Schedule
                      className="text-secondary"
                      sx={{ fontSize: 20 }}
                    />
                  </div>
                  <div>
                    <span className="font-label text-secondary/70 text-[10px] tracking-widest uppercase mb-2 block">
                      Support SLA
                    </span>
                    <p className="font-headline text-xl font-bold mb-1">
                      4-hour critical response
                    </p>
                    <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-4">
                      All critical tickets are acknowledged within 4 hours,
                      24/7/365. P1 incidents receive immediate engineer
                      escalation.
                    </p>
                    <a
                      href={NETWORK_STATUS_ROUTE}
                      className="inline-flex items-center gap-1.5 text-secondary text-xs font-label tracking-widest uppercase hover:underline"
                    >
                      <OpenInNew sx={{ fontSize: 13 }} /> Network status page
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-surface-container-low/95 border border-outline-variant/15 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <SupportAgent
                    className="text-primary"
                    sx={{ fontSize: 20 }}
                  />
                </div>
                <div>
                  <p className="font-headline font-semibold text-sm mb-0.5">
                    Dedicated account engineers
                  </p>
                  <p className="text-on-surface-variant text-xs font-light">
                    Enterprise clients get a named support contact
                  </p>
                </div>
              </div>
            </div>

            {/* Main Form Area */}
            <div className="md:col-span-7">
              <div className="glass-panel p-10 md:p-14 border border-outline-variant/15 rounded-xl">
                {formState === "success" ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                    <div className="w-16 h-16 bg-secondary/15 border border-secondary/30 rounded-full flex items-center justify-center">
                      <CheckCircleOutlined
                        className="text-secondary"
                        sx={{ fontSize: 36 }}
                      />
                    </div>
                    <div>
                      <h2 className="font-headline font-bold text-2xl mb-2">
                        Message received
                      </h2>
                      <p className="text-on-surface-variant font-light text-sm leading-relaxed max-w-sm">
                        We've received your message. Expect a reply within{" "}
                        <span className="text-secondary font-medium">
                          4 hours
                        </span>
                        . You'll get a confirmation at{" "}
                        <span className="text-on-surface">
                          {form.getValues("email")}
                        </span>
                        .
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFormState("idle");
                        setCurrentStep(0);
                        form.reset();
                      }}
                      className="mt-2 font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    {renderStepIndicator()}

                    <Form {...form}>
                      <form
                        noValidate
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-10"
                      >
                        {currentStep === 0 && (
                          <div className="space-y-8 animate-in fade-in duration-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem className="group flex flex-col gap-1.5 space-y-0">
                                    <FormLabel
                                      className={cn(CONTACT_FORM_LABEL_CLASS)}
                                    >
                                      <PersonOutlined sx={{ fontSize: 12 }} />{" "}
                                      Full name
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Your name"
                                        autoComplete="name"
                                        className={cn(
                                          CONTACT_FORM_CONTROL_CLASS,
                                          form.formState.errors.name &&
                                            "border-error focus-visible:border-error",
                                        )}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage className="text-xs text-error" />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem className="group flex flex-col gap-1.5 space-y-0">
                                    <FormLabel
                                      className={cn(CONTACT_FORM_LABEL_CLASS)}
                                    >
                                      <MailOutlined sx={{ fontSize: 12 }} />{" "}
                                      Email
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        type="email"
                                        inputMode="email"
                                        autoComplete="email"
                                        placeholder="you@company.com"
                                        className={cn(
                                          CONTACT_FORM_CONTROL_CLASS,
                                          form.formState.errors.email &&
                                            "border-error focus-visible:border-error",
                                        )}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage className="text-xs text-error" />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        )}

                        {currentStep === 1 && (
                          <div className="space-y-8 animate-in fade-in duration-200">
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem className="group flex flex-col gap-1.5 space-y-0">
                                  <FormLabel
                                    className={cn(CONTACT_FORM_LABEL_CLASS)}
                                  >
                                    <BusinessCenter sx={{ fontSize: 12 }} />{" "}
                                    Company
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      autoComplete="organization"
                                      placeholder="Your organisation"
                                      className={cn(
                                        CONTACT_FORM_CONTROL_CLASS,
                                        form.formState.errors.company &&
                                          "border-error focus-visible:border-error",
                                      )}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-xs text-error" />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}

                        {currentStep === 2 && (
                          <div className="space-y-8 animate-in fade-in duration-200">
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem className="group flex flex-col gap-1.5 space-y-0">
                                  <FormLabel
                                    className={cn(CONTACT_FORM_LABEL_CLASS)}
                                  >
                                    <ChatBubbleOutlined sx={{ fontSize: 12 }} />{" "}
                                    How can we help?
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea
                                      rows={5}
                                      placeholder="Describe your situation…"
                                      className={cn(
                                        CONTACT_FORM_TEXTAREA_CLASS,
                                        form.formState.errors.message &&
                                          "border-error focus-visible:border-error",
                                      )}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-xs text-error" />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}

                        <div className="flex justify-between items-center pt-4">
                          <div className="flex items-center gap-3">
                            {currentStep > 0 && (
                              <button
                                type="button"
                                onClick={handleBack}
                                className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
                              >
                                ← Back
                              </button>
                            )}
                            {currentStep === 0 && (
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">
                                  Systems ready
                                </span>
                              </div>
                            )}
                          </div>

                          {currentStep < FORM_STEPS.length - 1 ? (
                            <Button
                              type="button"
                              onClick={handleNext}
                              className="group flex items-center gap-3 uppercase tracking-tight bg-primary text-on-primary font-headline font-bold py-2 px-6 rounded-lg transition-transform hover:shadow-[0_0_20px_rgba(192,193,255,0.4)]"
                            >
                              <span>Continue</span>
                              <Send
                                sx={{ fontSize: 16 }}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            </Button>
                          ) : (
                            <Button
                              type="submit"
                              disabled={formState === "submitting"}
                              className="group flex items-center gap-3 uppercase tracking-tight bg-primary text-on-primary font-headline font-bold py-2 px-6 rounded-lg transition-transform hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                              {formState === "submitting" ? (
                                <>
                                  <svg
                                    className="animate-spin h-4 w-4 text-on-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    aria-hidden
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    />
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    />
                                  </svg>
                                  <span>Sending…</span>
                                </>
                              ) : (
                                <>
                                  <span>Send message</span>
                                  <Send
                                    sx={{ fontSize: 16 }}
                                    className="group-hover:translate-x-1 transition-transform"
                                  />
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
