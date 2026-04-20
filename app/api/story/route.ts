import { StoryFormEmail } from "@/components/emails/StoryFormEmail";
import { parseNotificationRecipients } from "@/lib/notification-recipients";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const storySchema = z.object({
  name: z.string().min(1, "Name is required."),
  story: z.string().min(20, "Story should be at least 20 characters.").max(2000, "Story cannot exceed 2000 characters."),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = storySchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error).fieldErrors;
    const firstError =
      Object.values(fieldErrors)[0]?.[0] ?? "Invalid form data.";
    return Response.json(
      { ok: false, message: firstError },
      { status: 400 },
    );
  }

  const emailToRaw = process.env.CONTACT_EMAIL_TO;
  const emailFrom = process.env.CONTACT_EMAIL_FROM;
  const notificationTo = parseNotificationRecipients(emailToRaw);

  if (notificationTo.length === 0 || !emailFrom) {
    return Response.json(
      { ok: false, message: "Story submission is unavailable right now." },
      { status: 500 },
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: notificationTo,
      subject: `New Story Submission from ${parsed.data.name}`,
      react: StoryFormEmail({
        name: parsed.data.name,
        story: parsed.data.story,
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      }),
    });

    if (error) {
      return Response.json(
        { ok: false, message: "Could not submit your story. Please try again." },
        { status: 500 },
      );
    }

    return Response.json({
      ok: true,
      message: "Your story has been submitted. Thank you for sharing.",
      id: data?.id,
    });
  } catch {
    return Response.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
