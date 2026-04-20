import * as React from "react";
import { EmailShell } from "./_EmailShell";

interface ContactAutoReplyEmailProps {
  name: string;
  baseUrl?: string;
}

export function ContactAutoReplyEmail({
  name,
  baseUrl = "https://www.stephaniegeorge.co",
}: ContactAutoReplyEmailProps) {
  const firstName = name.trim().split(/\s+/)[0] ?? name;

  return (
    <EmailShell
      eyebrow="A Note of Thanks"
      baseUrl={baseUrl}
      footerNote={
        <>
          This is an automated confirmation. Please do not reply to this email —
          Stephanie will respond to you directly.
        </>
      }
    >
      <h1
        className="headline"
        style={{
          margin: "0 0 24px",
          fontSize: "28px",
          fontWeight: 700,
          color: "#150800",
          letterSpacing: "-0.01em",
        }}
      >
        Hi {firstName},
      </h1>

      <p
        style={{
          margin: "0 0 18px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#3c312b",
        }}
      >
        Thank you so much for reaching out. Your message has landed safely in my
        inbox, and I will read it myself.
      </p>
      <p
        style={{
          margin: "0 0 18px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#3c312b",
        }}
      >
        I reply personally to every note, so please allow me a few business days
        to get back to you with the care your message deserves.
      </p>
      <p
        style={{
          margin: "0 0 32px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#3c312b",
        }}
      >
        In the meantime, you are welcome to explore more of my work and recent
        conversations at{" "}
        <a
          href={baseUrl}
          style={{
            color: "#3c312b",
            textDecoration: "underline",
            fontWeight: 500,
          }}
        >
          stephaniegeorge.co
        </a>
        .
      </p>

      <table role="presentation" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td
              style={{
                borderTop: "1px solid #eedcd0",
                paddingTop: "24px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "15px",
                  color: "#635a55",
                  fontStyle: "italic",
                }}
              >
                With gratitude,
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#150800",
                  letterSpacing: "-0.01em",
                }}
              >
                Stephanie George
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </EmailShell>
  );
}

ContactAutoReplyEmail.PreviewProps = {
  name: "John Doe",
  baseUrl: "https://www.stephaniegeorge.co",
} satisfies ContactAutoReplyEmailProps;

export default ContactAutoReplyEmail;
