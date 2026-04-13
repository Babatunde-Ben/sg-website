import * as React from "react";

interface StoryFormEmailProps {
  name: string;
  story: string;
  baseUrl?: string;
}

export function StoryFormEmail({
  name,
  story,
  baseUrl = "https://stephanie-george.vercel.app/",
}: StoryFormEmailProps) {
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
              .quote-border { border-color: #e5cbb8 !important; }
              .quote-bg { background-color: #2a1f19 !important; }
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
                          New Story Submission
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
                          Someone has submitted a story through the podcast
                          page.
                        </p>

                        {/* Name card */}
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
                            marginBottom: "20px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: "20px 24px" }}>
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
                                  Submitted by
                                </p>
                                <p
                                  className="field-value"
                                  style={{
                                    margin: 0,
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    color: "#150800",
                                    lineHeight: "1.5",
                                  }}
                                >
                                  {name}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Story blockquote */}
                        <table
                          role="presentation"
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: "0 0 0 0" }}>
                                <p
                                  className="field-label"
                                  style={{
                                    margin: "0 0 12px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "1px",
                                    color: "#99877b",
                                  }}
                                >
                                  Their Story
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table
                                  className="quote-bg"
                                  role="presentation"
                                  width="100%"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{
                                    backgroundColor: "#f6eee7",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="quote-border"
                                        style={{
                                          width: "4px",
                                          backgroundColor: "#e5cbb8",
                                          borderLeft: "4px solid #3c312b",
                                        }}
                                      />
                                      <td
                                        style={{
                                          padding: "24px 28px",
                                        }}
                                      >
                                        <p
                                          className="field-value"
                                          style={{
                                            margin: 0,
                                            fontSize: "15px",
                                            color: "#150800",
                                            lineHeight: "1.8",
                                            fontStyle: "italic",
                                            whiteSpace: "pre-wrap" as const,
                                          }}
                                        >
                                          &ldquo;{story}&rdquo;
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
                          Via stephaniegeorge.com podcast page
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

StoryFormEmail.PreviewProps = {
  name: "Jane Smith",
  story:
    "Three years ago, I lost everything I thought defined me — my career, my relationship, and my sense of purpose. But walking through that valley taught me something I never would have learned on the mountaintop: that our worth isn't tied to what we produce or who stands beside us. If my story could help even one person feel less alone in their own valley, I'd love to share it on the podcast.",
  baseUrl: "http://localhost:3000",
} satisfies StoryFormEmailProps;

export default StoryFormEmail;
