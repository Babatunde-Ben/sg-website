import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  message: string;
  baseUrl?: string;
}

export function ContactFormEmail({
  name,
  email,
  phone,
  organization,
  message,
  baseUrl = "https://stephanie-george.vercel.app/",
}: ContactFormEmailProps) {
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
              .field-label { color: #e5cbb8 !important; }
              .field-value { color: #f2e5db !important; }
              .email-header { background-color: #3c312b !important; }
              .email-title { color: #faf5f1 !important; }
              .email-subtitle { color: #e5cbb8 !important; }
              .email-footer { color: #99877b !important; }
              .divider { border-color: #4a3e37 !important; }
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
          style={{
            backgroundColor: "#faf5f1",
            padding: "40px 20px",
          }}
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
                  {/* Header */}
                  <tbody>
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
                          style={{
                            display: "block",
                            marginBottom: "20px",
                            width: "130px",
                            height: "auto",
                          }}
                        />
                        <h1
                          className="email-title"
                          style={{
                            margin: 0,
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#faf5f1",
                          }}
                        >
                          New Contact Inquiry
                        </h1>
                      </td>
                    </tr>

                    {/* Body */}
                    <tr>
                      <td style={{ padding: "32px 40px" }}>
                        <p
                          className="email-subtitle"
                          style={{
                            margin: "0 0 24px",
                            fontSize: "15px",
                            color: "#635a55",
                            lineHeight: "1.5",
                          }}
                        >
                          You have received a new message through the website
                          contact form.
                        </p>

                        <table
                          className="email-card"
                          role="presentation"
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #eedcd0",
                            borderRadius: "8px",
                            overflow: "hidden",
                          }}
                        >
                          <tbody>
                            {/* Name */}
                            <tr>
                              <td style={{ padding: "20px 24px 0" }}>
                                <p
                                  className="field-label"
                                  style={{
                                    margin: "0 0 4px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "1px",
                                    color: "#99877b",
                                  }}
                                >
                                  Name
                                </p>
                                <p
                                  className="field-value"
                                  style={{
                                    margin: 0,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#150800",
                                    lineHeight: "1.5",
                                  }}
                                >
                                  {name}
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td style={{ padding: "12px 24px" }}>
                                <hr
                                  className="divider"
                                  style={{
                                    border: "none",
                                    borderTop: "1px solid #f2e5db",
                                    margin: 0,
                                  }}
                                />
                              </td>
                            </tr>

                            {/* Email */}
                            <tr>
                              <td style={{ padding: "0 24px" }}>
                                <p
                                  className="field-label"
                                  style={{
                                    margin: "0 0 4px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "1px",
                                    color: "#99877b",
                                  }}
                                >
                                  Email
                                </p>
                                <p
                                  className="field-value"
                                  style={{
                                    margin: 0,
                                    fontSize: "16px",
                                    color: "#150800",
                                    lineHeight: "1.5",
                                  }}
                                >
                                  <a
                                    href={`mailto:${email}`}
                                    style={{
                                      color: "#3c312b",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    {email}
                                  </a>
                                </p>
                              </td>
                            </tr>

                            {/* Phone (conditional) */}
                            {phone && (
                              <>
                                <tr>
                                  <td style={{ padding: "12px 24px" }}>
                                    <hr
                                      className="divider"
                                      style={{
                                        border: "none",
                                        borderTop: "1px solid #f2e5db",
                                        margin: 0,
                                      }}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ padding: "0 24px" }}>
                                    <p
                                      className="field-label"
                                      style={{
                                        margin: "0 0 4px",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        textTransform: "uppercase" as const,
                                        letterSpacing: "1px",
                                        color: "#99877b",
                                      }}
                                    >
                                      Phone
                                    </p>
                                    <p
                                      className="field-value"
                                      style={{
                                        margin: 0,
                                        fontSize: "16px",
                                        color: "#150800",
                                        lineHeight: "1.5",
                                      }}
                                    >
                                      {phone}
                                    </p>
                                  </td>
                                </tr>
                              </>
                            )}

                            {/* Organization (conditional) */}
                            {organization && (
                              <>
                                <tr>
                                  <td style={{ padding: "12px 24px" }}>
                                    <hr
                                      className="divider"
                                      style={{
                                        border: "none",
                                        borderTop: "1px solid #f2e5db",
                                        margin: 0,
                                      }}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ padding: "0 24px" }}>
                                    <p
                                      className="field-label"
                                      style={{
                                        margin: "0 0 4px",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        textTransform: "uppercase" as const,
                                        letterSpacing: "1px",
                                        color: "#99877b",
                                      }}
                                    >
                                      Organization
                                    </p>
                                    <p
                                      className="field-value"
                                      style={{
                                        margin: 0,
                                        fontSize: "16px",
                                        color: "#150800",
                                        lineHeight: "1.5",
                                      }}
                                    >
                                      {organization}
                                    </p>
                                  </td>
                                </tr>
                              </>
                            )}

                            <tr>
                              <td style={{ padding: "12px 24px" }}>
                                <hr
                                  className="divider"
                                  style={{
                                    border: "none",
                                    borderTop: "1px solid #f2e5db",
                                    margin: 0,
                                  }}
                                />
                              </td>
                            </tr>

                            {/* Message */}
                            <tr>
                              <td style={{ padding: "0 24px 24px" }}>
                                <p
                                  className="field-label"
                                  style={{
                                    margin: "0 0 8px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "1px",
                                    color: "#99877b",
                                  }}
                                >
                                  Message
                                </p>
                                <p
                                  className="field-value"
                                  style={{
                                    margin: 0,
                                    fontSize: "15px",
                                    color: "#150800",
                                    lineHeight: "1.7",
                                    whiteSpace: "pre-wrap" as const,
                                  }}
                                >
                                  {message}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td
                        style={{
                          padding: "0 40px 40px",
                        }}
                      >
                        <p
                          className="email-footer"
                          style={{
                            margin: 0,
                            fontSize: "13px",
                            color: "#99877b",
                            lineHeight: "1.5",
                          }}
                        >
                          Received on{" "}
                          {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}{" "}
                          at{" "}
                          {new Date().toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                          <br />
                          Via stephaniegeorge.com contact form
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

ContactFormEmail.PreviewProps = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (234) 567-8900",
  organization: "Acme Corp",
  message:
    "Hi Stephanie, I'd love to discuss having you speak at our upcoming conference in Lagos. We're expecting about 500 attendees and the theme is 'Stories That Shape Us'. Would you be available on June 15th?",
  baseUrl: "http://localhost:3000",
} satisfies ContactFormEmailProps;

export default ContactFormEmail;
