import * as React from "react";

export const EMAIL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600;700&display=swap');

  :root { color-scheme: light only; supported-color-schemes: light only; }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    font-family: 'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f6eee7;
    color: #150800;
  }

  img { border: 0; display: block; outline: none; text-decoration: none; max-width: 100%; }
  a { color: #3c312b; }

  .headline {
    font-size: 26px;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  @media only screen and (max-width: 560px) {
    .wrapper { padding: 16px 8px !important; }
    .header-band { padding: 36px 24px 32px !important; }
    .content-band { padding: 32px 24px !important; }
    .footer-band { padding: 20px 24px 28px !important; }
    .headline { font-size: 22px !important; }
    .field-row { padding: 14px 0 !important; }
    .story-block { padding: 20px 18px !important; }
    .brand-logo { width: 150px !important; height: auto !important; }
  }
`;

export function EmailShell({
  eyebrow,
  baseUrl,
  children,
  footerNote,
}: {
  eyebrow: string;
  baseUrl: string;
  children: React.ReactNode;
  footerNote: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
        <style dangerouslySetInnerHTML={{ __html: EMAIL_STYLES }} />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f6eee7" }}>
        <table
          role="presentation"
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          style={{ backgroundColor: "#f6eee7" }}
        >
          <tbody>
            <tr>
              <td
                className="wrapper"
                align="center"
                style={{ padding: "40px 16px" }}
              >
                <table
                  role="presentation"
                  cellPadding="0"
                  cellSpacing="0"
                  width="560"
                  style={{
                    maxWidth: "560px",
                    width: "100%",
                    backgroundColor: "#faf5f1",
                    boxShadow: "0 4px 24px rgba(21, 8, 0, 0.06)",
                  }}
                >
                  <tbody>
                    {/* Thin accent strip */}
                    <tr>
                      <td
                        style={{
                          height: "4px",
                          lineHeight: "4px",
                          fontSize: 0,
                          backgroundColor: "#bfa999",
                        }}
                      >
                        &nbsp;
                      </td>
                    </tr>

                    {/* Header band */}
                    <tr>
                      <td
                        className="header-band"
                        align="center"
                        style={{
                          backgroundColor: "#150800",
                          padding: "52px 40px 44px",
                          backgroundImage:
                            "radial-gradient(circle at 50% 0%, rgba(191, 169, 153, 0.12) 0%, rgba(21, 8, 0, 0) 60%)",
                        }}
                      >
                        <img
                          className="brand-logo"
                          src={`${baseUrl}/stephanie-george-logo.png`}
                          alt="Stephanie George"
                          width="180"
                          height="58"
                          style={{
                            display: "block",
                            margin: "0 auto",
                            height: "auto",
                          }}
                        />

                        {/* Delicate divider flourish */}
                        <table
                          role="presentation"
                          cellPadding="0"
                          cellSpacing="0"
                          align="center"
                          style={{
                            margin: "22px auto 18px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  width: "32px",
                                  height: "1px",
                                  lineHeight: "1px",
                                  fontSize: 0,
                                  backgroundColor: "#635a55",
                                }}
                              >
                                &nbsp;
                              </td>
                              <td
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  padding: "0 10px",
                                }}
                              >
                                <div
                                  style={{
                                    width: "5px",
                                    height: "5px",
                                    margin: "0 auto",
                                    backgroundColor: "#bfa999",
                                    transform: "rotate(45deg)",
                                  }}
                                />
                              </td>
                              <td
                                style={{
                                  width: "32px",
                                  height: "1px",
                                  lineHeight: "1px",
                                  fontSize: 0,
                                  backgroundColor: "#635a55",
                                }}
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p
                          style={{
                            margin: "0",
                            fontSize: "11px",
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            color: "#e5cbb8",
                            fontWeight: 500,
                          }}
                        >
                          {eyebrow}
                        </p>
                      </td>
                    </tr>

                    {/* Content */}
                    <tr>
                      <td
                        className="content-band"
                        style={{ padding: "40px 40px 32px" }}
                      >
                        {children}
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td
                        className="footer-band"
                        style={{
                          padding: "24px 40px 40px",
                          borderTop: "1px solid #eedcd0",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            lineHeight: "1.6",
                            color: "#99877b",
                          }}
                        >
                          {footerNote}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Brand footer outside the card */}
                <table
                  role="presentation"
                  cellPadding="0"
                  cellSpacing="0"
                  width="560"
                  style={{ maxWidth: "560px", width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <td
                        align="center"
                        style={{ padding: "20px 16px 0" }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: "11px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#99877b",
                            fontWeight: 500,
                          }}
                        >
                          <a
                            href={baseUrl}
                            style={{
                              color: "#99877b",
                              textDecoration: "none",
                            }}
                          >
                            stephaniegeorge.co
                          </a>
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
