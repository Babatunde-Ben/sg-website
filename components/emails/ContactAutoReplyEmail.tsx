import * as React from "react";

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
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600;700&display=swap');

            :root { color-scheme: light dark; }

            body {
              margin: 0;
              padding: 0;
              font-family: 'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background-color: #faf5f1;
              color: #150800;
            }

            @media (prefers-color-scheme: dark) {
              body { background-color: #150800 !important; color: #faf5f1 !important; }
              .email-wrapper { background-color: #150800 !important; }
              .email-body { background-color: #1a0e05 !important; }
              .email-card { background-color: #3c312b !important; border-color: #4a3e37 !important; }
              .body-text { color: #f2e5db !important; }
              .email-header { background-color: #3c312b !important; }
              .email-title { color: #faf5f1 !important; }
              .email-subtitle { color: #e5cbb8 !important; }
              .email-footer { color: #99877b !important; }
              .signature { color: #e5cbb8 !important; }
            }
          `,
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <table
          className="email-wrapper"
          role="presentation"
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          style={{ backgroundColor: "#faf5f1", padding: "40px 20px" }}
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  className="email-body"
                  role="presentation"
                  width="600"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{
                    maxWidth: "600px",
                    width: "100%",
                    backgroundColor: "#faf5f1",
                  }}
                >
                  <tbody>
                    {/* Header */}
                    <tr>
                      <td
                        className="email-header"
                        style={{
                          backgroundColor: "#3c312b",
                          padding: "32px 40px",
                        }}
                      >
                        <img
                          src={`${baseUrl}/stephanie-george-logo.png`}
                          alt="Stephanie George"
                          width="130"
                          height="42"
                          style={{ display: "block", border: 0 }}
                        />
                        <p
                          className="email-subtitle"
                          style={{
                            margin: "18px 0 0",
                            fontSize: "14px",
                            color: "#e5cbb8",
                            letterSpacing: "0.4px",
                          }}
                        >
                          Thank you for reaching out
                        </p>
                      </td>
                    </tr>

                    {/* Body */}
                    <tr>
                      <td style={{ padding: "40px" }}>
                        <p
                          className="body-text"
                          style={{
                            margin: "0 0 20px",
                            fontSize: "16px",
                            lineHeight: "1.7",
                            color: "#150800",
                          }}
                        >
                          Hi {firstName},
                        </p>
                        <p
                          className="body-text"
                          style={{
                            margin: "0 0 20px",
                            fontSize: "16px",
                            lineHeight: "1.7",
                            color: "#150800",
                          }}
                        >
                          Thank you for your message. I&apos;ve received your
                          note and will read it personally. You can expect a
                          thoughtful reply within a few business days.
                        </p>
                        <p
                          className="body-text"
                          style={{
                            margin: "0 0 28px",
                            fontSize: "16px",
                            lineHeight: "1.7",
                            color: "#150800",
                          }}
                        >
                          In the meantime, feel free to explore more of my work
                          and recent conversations at{" "}
                          <a
                            href={baseUrl}
                            style={{
                              color: "#8b5a3c",
                              textDecoration: "underline",
                            }}
                          >
                            stephaniegeorge.co
                          </a>
                          .
                        </p>
                        <p
                          className="signature"
                          style={{
                            margin: 0,
                            fontSize: "16px",
                            lineHeight: "1.7",
                            color: "#3c312b",
                          }}
                        >
                          With gratitude,
                          <br />
                          Stephanie
                        </p>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td style={{ padding: "0 40px 40px" }}>
                        <p
                          className="email-footer"
                          style={{
                            margin: 0,
                            fontSize: "13px",
                            color: "#99877b",
                            lineHeight: "1.5",
                          }}
                        >
                          This is an automated confirmation. Please do not reply
                          to this email — Stephanie will respond to you
                          directly.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

ContactAutoReplyEmail.PreviewProps = {
  name: "John Doe",
  baseUrl: "https://www.stephaniegeorge.co",
} satisfies ContactAutoReplyEmailProps;

export default ContactAutoReplyEmail;
