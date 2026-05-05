import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  JURISDICTION_REGION_NAME,
  PUBLIC_ADDRESS_COUNTRY,
  PUBLIC_BUSINESS_LEGAL_NAME,
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_MAILING_ADDRESS,
  ROUTES,
} from "@/lib/constant";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `How ${PUBLIC_BUSINESS_LEGAL_NAME} collects, uses, and protects your information.`,
  path: ROUTES.PRIVACY_POLICY,
});

const bodyClass =
  "space-y-5 text-tertiary-700 md:text-lg md:leading-8 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-tertiary-300 md:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-tertiary-300 md:[&_h3]:text-2xl [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6 [&_ul]:marker:text-tertiary-500 [&_strong]:font-medium [&_strong]:text-tertiary-600";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-40 section-padding-x xl:px-28">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-8 md:mb-10 lg:mb-14">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="section-padding-x pb-24 xl:px-28">
        <article className={`mx-auto max-w-4xl ${bodyClass}`}>
          <p>
            <strong>Effective date:</strong> May 5, 2026
          </p>
          <p>
            <strong>Last updated:</strong> May 5, 2026
          </p>
          <p>
            This Privacy Policy explains how{" "}
            <strong>{PUBLIC_BUSINESS_LEGAL_NAME}</strong>{" "}
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses,
            discloses, and otherwise processes information when you visit our
            website and interact with us through forms, cookies, analytics, and
            other features (the &quot;Site&quot;).
          </p>

          <h2>1. What this policy covers</h2>
          <p>This policy applies to:</p>
          <ul>
            <li>Your use of the Site.</li>
            <li>
              Information you submit to us through interactive features on the
              Site.
            </li>
            <li>
              Information collected automatically (including through cookies and
              analytics).
            </li>
          </ul>

          <h2>2. Who we are</h2>
          <p>
            <strong>Data controller:</strong> {PUBLIC_BUSINESS_LEGAL_NAME}
          </p>
          <p>
            <strong>Contact (privacy and legal requests):</strong>{" "}
            {PUBLIC_CONTACT_EMAIL}
          </p>
          <p>
            <strong>Mailing location:</strong> {PUBLIC_MAILING_ADDRESS}
          </p>

          <h2>3. Information we collect</h2>

          <h3>3.1 Information you provide to us</h3>
          <p>
            We may collect personal information you submit directly, such as:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Organization (if provided)</li>
            <li>
              Message, story, or other content you submit (including pictures or
              audio where you choose to provide them)
            </li>
          </ul>
          <p>
            We may also collect information needed to manage communications you
            request from us (for example, newsletter sign-ups).
          </p>

          <h3>3.2 Information collected automatically</h3>
          <p>
            When you visit the Site, we and our service providers may collect:
          </p>
          <ul>
            <li>Internet Protocol (IP) address</li>
            <li>Browser type, device type, and operating system</li>
            <li>Approximate location derived from IP</li>
            <li>Pages viewed, time spent, and navigation paths</li>
            <li>Referring and exit URLs</li>
            <li>
              Interactions with the Site (such as clicks and scrolls, where
              collected by our tools)
            </li>
          </ul>
          <p>
            We use this information for security, <strong>analytics</strong>{" "}
            (including <strong>Google Analytics</strong>), measuring Site
            performance, improving content and user experience, and
            troubleshooting.
          </p>

          <h3>3.3 Cookies and similar technologies</h3>
          <p>
            We use <strong>cookies</strong> and similar technologies (such as
            pixels or local storage) to:
          </p>
          <ul>
            <li>Remember preferences where applicable</li>
            <li>
              Measure traffic and usage (<strong>Google Analytics</strong>)
            </li>
            <li>Support security and basic Site functionality</li>
          </ul>
          <p>
            <strong>Cookie consent:</strong> We use a{" "}
            <strong>cookie consent banner</strong> so you can accept or decline
            non-essential cookies (such as analytics) before they are set, in
            line with your choices and applicable law. Essential cookies needed
            to operate or secure the Site may still be used as permitted by law.
          </p>
          <p>
            You can also control cookies through your browser settings. Note
            that disabling certain cookies may affect how the Site works.
          </p>

          <h3>3.4 Data from service providers and other sources</h3>
          <p>
            We may receive or process information through third-party services
            used to operate the Site (including{" "}
            <strong>Google Analytics</strong> and email or form tools). Such
            providers may store or process data in accordance with their own
            policies.
          </p>

          <h2>4. How we use your information</h2>
          <p>We may use personal information to:</p>
          <ul>
            <li>
              Respond to inquiries and requests submitted through the Site
            </li>
            <li>
              Send and manage <strong>newsletter</strong> or other
              communications you sign up for
            </li>
            <li>
              <strong>Analyze</strong> how the Site is used (
              <strong>Google Analytics</strong> and similar metrics)
            </li>
            <li>Improve the Site’s content, layout, and functionality</li>
            <li>Protect the Site and our users (security, fraud prevention)</li>
            <li>
              Comply with applicable laws, regulations, and lawful requests from
              public authorities
            </li>
          </ul>

          <h2>5. Legal bases</h2>
          <p>
            Where applicable law requires or recognizes a stated basis for
            processing, we process personal information on one or more of the
            following bases:
          </p>
          <ul>
            <li>
              Consent (including consent provided through our cookie banner
              where applicable)
            </li>
            <li>Contract or steps prior to entering a contract</li>
            <li>
              Legitimate interests (such as improving the Site and understanding
              aggregate usage), balanced against your rights
            </li>
            <li>Legal obligation</li>
          </ul>

          <h2>6. How we share information</h2>
          <p>We may share information with:</p>

          <h3>6.1 Service providers</h3>
          <p>
            We share data with service providers that help operate the Site and
            support our business operations. This includes{" "}
            <strong>Google LLC</strong> and its affiliates in connection with{" "}
            <strong>Google Analytics</strong>, as well as hosting, email, form,
            and related vendors. These providers process data on our behalf and
            are contractually or legally required to protect it appropriately.
          </p>

          <h3>6.2 Legal and safety</h3>
          <p>
            We may disclose information if required to do so by law or if we
            believe disclosure is necessary to:
          </p>
          <ul>
            <li>
              Comply with legal process or requests from government authorities
            </li>
            <li>
              Detect, prevent, or address fraud, security incidents, or
              technical issues
            </li>
            <li>Protect the rights, property, or safety of us or others</li>
          </ul>

          <h2>7. Communications; newsletter; unsubscribe</h2>
          <p>
            If you subscribe to our <strong>newsletter</strong> or similar
            emails, we use your contact details to send those messages. Each
            marketing email includes an <strong>unsubscribe</strong> link or
            button. If that does not work, you may contact{" "}
            <strong>{PUBLIC_CONTACT_EMAIL}</strong> to unsubscribe or update
            your preferences.
          </p>

          <h2>8. International data transfers</h2>
          <p>
            We operate from <strong>{PUBLIC_ADDRESS_COUNTRY}</strong> (
            {JURISDICTION_REGION_NAME}). Some of
            our service providers (including <strong>Google Analytics</strong>)
            may process or store data in the <strong>United States</strong> or
            other countries. Where personal information is transferred across
            borders, we take steps designed to comply with applicable data
            protection laws, which may include contractual safeguards or
            reliance on adequacy decisions where available.
          </p>

          <h2>9. Data retention</h2>
          <p>
            We retain personal information for at least{" "}
            <strong>two (2) years</strong> where that period supports our
            business, communication, and record-keeping needs.
          </p>
          <p>
            We also retain information <strong>for as long as required</strong>{" "}
            by applicable <strong>law</strong>, <strong>regulation</strong>, or{" "}
            <strong>government</strong> or regulatory requirements, including
            retention periods that may extend beyond two years when necessary to
            meet those obligations.
          </p>
          <p>
            When retention is no longer required for the purposes in this policy
            and we are not legally required to keep the data, we will delete or
            anonymize it in accordance with our practices and applicable law.
          </p>

          <h2>10. Your privacy rights</h2>
          <p>
            Depending on your location (including under Canadian private-sector
            privacy law or other applicable regimes), you may have rights such
            as:
          </p>
          <ul>
            <li>Access to personal information we hold about you</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of personal information (where applicable)</li>
            <li>
              Withdrawal of consent where processing is based on consent
              (without affecting the lawfulness of processing before withdrawal)
            </li>
            <li>
              Objection to or restriction of certain processing (where
              applicable)
            </li>
          </ul>
          <p>
            To exercise these rights or ask questions about processing, contact{" "}
            <strong>{PUBLIC_CONTACT_EMAIL}</strong>.
          </p>

          <h2>11. Security</h2>
          <p>
            We use reasonable administrative, technical, and organizational
            measures intended to protect personal information. However, no
            method of transmission or storage is 100% secure.
          </p>

          <h2>12. Children’s privacy</h2>
          <p>
            The Site is <strong>not</strong> directed to children under{" "}
            <strong>13</strong> years of age. We do not knowingly collect
            personal information from children under 13. If you believe we have
            collected such information, please contact{" "}
            <strong>{PUBLIC_CONTACT_EMAIL}</strong> so we can take appropriate
            steps.
          </p>

          <h2>13. Third-party links</h2>
          <p>
            The Site may include links to third-party websites or services. We
            are not responsible for the privacy practices of those third
            parties.
          </p>

          <h2>14. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The updated version
            will be posted with a revised effective date and, where appropriate,
            we will notify you in line with applicable law.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about this Privacy Policy or privacy-related requests:
          </p>
          <ul>
            <li>
              <strong>{PUBLIC_BUSINESS_LEGAL_NAME}</strong>
            </li>
            <li>
              <strong>Email:</strong> {PUBLIC_CONTACT_EMAIL}
            </li>
            <li>
              <strong>Mailing location:</strong> {PUBLIC_MAILING_ADDRESS}
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
