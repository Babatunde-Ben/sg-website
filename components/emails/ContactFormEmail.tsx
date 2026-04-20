import * as React from "react";
import { EmailShell } from "./_EmailShell";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  message: string;
  baseUrl?: string;
}

function FieldRow({
  label,
  value,
  isLast,
}: {
  label: string;
  value: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <tr>
      <td
        className="field-row"
        style={{
          padding: "16px 0",
          borderBottom: isLast ? "none" : "1px solid #f2e5db",
        }}
      >
        <p
          style={{
            margin: "0 0 6px",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#99877b",
            fontWeight: 600,
          }}
        >
          {label}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            lineHeight: "1.5",
            color: "#150800",
          }}
        >
          {value}
        </p>
      </td>
    </tr>
  );
}

export function ContactFormEmail({
  name,
  email,
  phone,
  organization,
  message,
  baseUrl = "https://www.stephaniegeorge.co",
}: ContactFormEmailProps) {
  const now = new Date();
  const timestamp = `${now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })} at ${now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  return (
    <EmailShell
      eyebrow="New Contact Inquiry"
      baseUrl={baseUrl}
      footerNote={
        <>
          Received {timestamp}
          <br />
          Via stephaniegeorge.co contact form
        </>
      }
    >
      <h1
        className="headline"
        style={{
          margin: "0 0 12px",
          fontSize: "26px",
          fontWeight: 700,
          color: "#150800",
          letterSpacing: "-0.01em",
        }}
      >
        You have a new inquiry
      </h1>
      <p
        style={{
          margin: "0 0 28px",
          fontSize: "15px",
          lineHeight: "1.6",
          color: "#635a55",
        }}
      >
        {name}
        {organization ? ` from ${organization}` : ""} just reached out through
        your contact form.
      </p>

      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{ borderTop: "1px solid #f2e5db" }}
      >
        <tbody>
          <FieldRow label="Name" value={name} />
          <FieldRow
            label="Email"
            value={
              <a
                href={`mailto:${email}`}
                style={{ color: "#3c312b", textDecoration: "underline" }}
              >
                {email}
              </a>
            }
          />
          {phone ? (
            <FieldRow
              label="Phone"
              value={
                <a
                  href={`tel:${phone}`}
                  style={{ color: "#3c312b", textDecoration: "underline" }}
                >
                  {phone}
                </a>
              }
            />
          ) : null}
          {organization ? (
            <FieldRow label="Organization" value={organization} />
          ) : null}
          <FieldRow
            label="Message"
            value={
              <span
                style={{
                  display: "block",
                  marginTop: "4px",
                  padding: "16px 18px",
                  backgroundColor: "#f6eee7",
                  borderLeft: "3px solid #bfa999",
                  whiteSpace: "pre-wrap" as const,
                  lineHeight: "1.7",
                  color: "#150800",
                }}
              >
                {message}
              </span>
            }
            isLast
          />
        </tbody>
      </table>
    </EmailShell>
  );
}

ContactFormEmail.PreviewProps = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (234) 567-8900",
  organization: "Acme Corp",
  message:
    "Hi Stephanie, I'd love to discuss having you speak at our upcoming conference in Lagos. We're expecting about 500 attendees and the theme is 'Stories That Shape Us'. Would you be available on June 15th?",
  baseUrl: "https://www.stephaniegeorge.co",
} satisfies ContactFormEmailProps;

export default ContactFormEmail;
