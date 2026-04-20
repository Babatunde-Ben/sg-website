import * as React from "react";
import { EmailShell } from "./_EmailShell";

interface StoryFormEmailProps {
  name: string;
  story: string;
  baseUrl?: string;
}

export function StoryFormEmail({
  name,
  story,
  baseUrl = "https://www.stephaniegeorge.co",
}: StoryFormEmailProps) {
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
      eyebrow="New Story Submission"
      baseUrl={baseUrl}
      footerNote={
        <>
          Received {timestamp}
          <br />
          Via stephaniegeorge.co podcast page
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
        A story has been shared
      </h1>
      <p
        style={{
          margin: "0 0 28px",
          fontSize: "15px",
          lineHeight: "1.6",
          color: "#635a55",
        }}
      >
        {name} submitted a story through the podcast page.
      </p>

      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{ borderTop: "1px solid #f2e5db" }}
      >
        <tbody>
          <tr>
            <td
              className="field-row"
              style={{
                padding: "16px 0",
                borderBottom: "1px solid #f2e5db",
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
                From
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: "1.5",
                  color: "#150800",
                }}
              >
                {name}
              </p>
            </td>
          </tr>
          <tr>
            <td
              className="field-row"
              style={{ padding: "16px 0" }}
            >
              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#99877b",
                  fontWeight: 600,
                }}
              >
                The Story
              </p>
              <div
                className="story-block"
                style={{
                  padding: "24px 22px",
                  backgroundColor: "#f6eee7",
                  borderLeft: "3px solid #bfa999",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: "1.75",
                    color: "#150800",
                    whiteSpace: "pre-wrap" as const,
                  }}
                >
                  {story}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </EmailShell>
  );
}

StoryFormEmail.PreviewProps = {
  name: "Jane Smith",
  story:
    "I first discovered Stephanie's podcast during a really difficult season of my life. Her conversation with the guest in episode twelve about navigating grief while holding onto faith — it was the first time I felt someone actually got it. I have listened to that episode at least five times, and every time it gives me language for what I was trying to feel. Thank you for making space for these kinds of stories.",
  baseUrl: "https://www.stephaniegeorge.co",
} satisfies StoryFormEmailProps;

export default StoryFormEmail;
