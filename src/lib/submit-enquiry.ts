import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(240),
  message: z.string().trim().min(1).max(4000),
});

export type EnquiryPayload = z.infer<typeof enquirySchema>;

type EnquiryResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "delivery-failed" };

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator(enquirySchema)
  .handler(async ({ data }): Promise<EnquiryResult> => {
    const apiKey = typeof process !== "undefined" ? process.env.RESEND_API_KEY : undefined;
    const destination = typeof process !== "undefined" ? process.env.ENQUIRY_TO_EMAIL : undefined;
    const sender = typeof process !== "undefined" ? process.env.ENQUIRY_FROM_EMAIL : undefined;

    if (!apiKey || !destination || !sender) {
      return { ok: false, reason: "not-configured" };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [destination],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}`,
        text: [
          `Name: ${data.name}`,
          `Brand / Company: ${data.company}`,
          `Email: ${data.email}`,
          "",
          data.message,
        ].join("\n"),
      }),
    });

    return response.ok ? { ok: true } : { ok: false, reason: "delivery-failed" };
  });
