import { ContactFormEmail } from "@/components/emails/ContactFormEmail";
import { ContactAutoReplyEmail } from "@/components/emails/ContactAutoReplyEmail";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().optional(),
  organization: z.string().optional(),
  message: z.string().min(10, "Message should be at least 10 characters.").max(1000, "Message cannot exceed 1000 characters."),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error).fieldErrors;
    const firstError =
      Object.values(fieldErrors)[0]?.[0] ?? "Invalid form data.";
    return Response.json(
      { ok: false, message: firstError },
      { status: 400 },
    );
  }

  const emailTo = process.env.CONTACT_EMAIL_TO;
  const emailFrom = process.env.CONTACT_EMAIL_FROM;

  if (!emailTo || !emailFrom) {
    return Response.json(
      { ok: false, message: "Contact form is unavailable right now." },
      { status: 500 },
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: parsed.data.email,
      subject: `New Contact Inquiry from ${parsed.data.name}`,
      react: ContactFormEmail({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        organization: parsed.data.organization,
        message: parsed.data.message,
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      }),
    });

    if (error) {
      return Response.json(
        { ok: false, message: "Could not send your message. Please try again." },
        { status: 500 },
      );
    }

    await resend.emails
      .send({
        from: emailFrom,
        to: [parsed.data.email],
        replyTo: emailTo,
        subject: "Thank you for reaching out",
        react: ContactAutoReplyEmail({
          name: parsed.data.name,
          baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
        }),
      })
      .catch(() => null);

    return Response.json({
      ok: true,
      message: "Your message has been sent. Thank you for reaching out.",
      id: data?.id,
    });
  } catch {
    return Response.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
