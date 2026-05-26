import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  JURISDICTION_PROVINCE_LONG,
  JURISDICTION_REGION_NAME,
  PUBLIC_ADDRESS_CITY,
  PUBLIC_ADDRESS_COUNTRY,
  PUBLIC_BUSINESS_LEGAL_NAME,
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_MAILING_ADDRESS,
  ROUTES,
} from "@/lib/constant";

// Permanently static — content is hardcoded, no data fetching involved
export const revalidate = false;

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description: `The terms and conditions that govern your use of ${PUBLIC_BUSINESS_LEGAL_NAME}'s website.`,
  path: ROUTES.TERMS_OF_SERVICE,
});

const bodyClass =
  "space-y-5 text-tertiary-700 md:text-lg md:leading-8 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-tertiary-300 md:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-tertiary-300 md:[&_h3]:text-2xl [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6 [&_ul]:marker:text-tertiary-500 [&_strong]:font-medium [&_strong]:text-tertiary-600";

export default function TermsOfServicePage() {
  return (
    <>
      <section className="pt-40 section-padding-x xl:px-28">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary-50 mb-8 md:mb-10 lg:mb-14">
            Terms of Service
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
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the website and services provided by{" "}
            <strong>{PUBLIC_BUSINESS_LEGAL_NAME}</strong> (&quot;we&quot;,
            &quot;us&quot;,
            &quot;our&quot;), including any related pages, content, or forms
            (collectively, the &quot;Site&quot;).
          </p>
          <p>
            By accessing or using the Site, you agree to these Terms. If you do
            not agree, do not use the Site.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be able to form a binding contract to use the Site. If you
            are using the Site on behalf of an organization, you represent that
            you have authority to bind that organization to these Terms.
          </p>

          <h2>2. Acceptance of Terms</h2>
          <p>
            We may update these Terms from time to time. The updated Terms will
            be posted on this page with a revised effective date. Your continued
            use of the Site after changes become effective means you accept the
            updated Terms.
          </p>

          <h2>3. Use of the Site</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use the Site only for lawful purposes.</li>
            <li>Provide accurate information when submitting forms.</li>
            <li>
              Not interfere with or disrupt the Site (including attempting to
              bypass security, scrape data where prohibited, or introduce
              malware).
            </li>
          </ul>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Site to transmit unlawful content or to solicit unlawful
              activities.
            </li>
            <li>
              Attempt to gain unauthorized access to systems, accounts, or data.
            </li>
            <li>
              Use the Site in any way that could harm, disable, overburden, or
              impair it.
            </li>
          </ul>

          <h2>4. Availability; Changes; Discontinuation</h2>
          <p>
            The Site is provided on an &quot;as available&quot; basis. We may
            update, modify, suspend, or discontinue parts of the Site at any
            time without notice.
          </p>

          <h2>5. Submissions and User Content</h2>
          <p>
            The Site may allow you to submit information, materials, or
            communications through interactive features, including stories,
            messages, pictures, and audio from events (collectively,{" "}
            <strong>&quot;Content&quot;</strong>).
          </p>

          <h3>5.1 Responsibility for submissions</h3>
          <p>
            You are responsible for what you submit. You represent and warrant
            that:
          </p>
          <ul>
            <li>Your submissions are accurate and not misleading.</li>
            <li>
              You have the right to provide any information you submit
              (including any personal data you provide).
            </li>
          </ul>

          <h3>5.2 License for marketing and portfolio use</h3>
          <p>
            Subject to these Terms, you grant{" "}
            <strong>{PUBLIC_BUSINESS_LEGAL_NAME}</strong>{" "}
            the right to <strong>reuse, quote, or publish</strong>{" "}
            Content—including stories, messages, pictures, and audio from
            events—for <strong>marketing</strong> and{" "}
            <strong>portfolio-building</strong> purposes.
          </p>
          <p>
            We will not use Content in a way that is intended to{" "}
            <strong>damage your reputation</strong>. You{" "}
            <strong>consent</strong> to this use of Content by{" "}
            {PUBLIC_BUSINESS_LEGAL_NAME}
            for the purposes described above and for the purposes for which it
            was collected.
          </p>
          <p>
            If you <strong>oppose</strong> this use of your Content, you must
            contact us at <strong>{PUBLIC_CONTACT_EMAIL}</strong> so we can
            address your request.
          </p>

          <h3>5.3 Operating the Site and legal compliance</h3>
          <p>
            To the extent permitted by law, you also grant us a non-exclusive,
            worldwide, royalty-free license to use, store, reproduce, transmit,
            and otherwise process Content you submit to{" "}
            <strong>operate the Site</strong>, respond to your requests, comply
            with applicable laws, and enforce these Terms.
          </p>

          <h3>5.4 Confidentiality</h3>
          <p>
            Unless otherwise stated, submissions are not treated as strictly
            confidential and may be processed using internal systems or
            third-party service providers used to operate the Site.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, design
            elements, and other materials, is owned by us or licensed to us, and
            is protected by intellectual property laws.
          </p>
          <p>
            You may view and use the Site for personal, non-commercial purposes.
            You may not reproduce, distribute, or create derivative works from
            Site content without our prior written permission, except as
            permitted by law.
          </p>

          <h2>7. Third-Party Links and Services</h2>
          <p>
            The Site may link to or rely on third-party services. We are not
            responsible for third-party services, their content, availability,
            or practices. Your use of third-party services is subject to their
            own terms and policies.
          </p>

          <h2>8. Communications; Newsletter</h2>
          <p>
            If you sign up for email communications (such as a newsletter), you
            agree that we may send you messages in line with what you signed up
            for. <strong>Newsletter</strong> and similar marketing emails
            include an <strong>unsubscribe</strong> link or button. If that
            mechanism does not work, you may unsubscribe or adjust your
            preferences by contacting{" "}
            <strong>{PUBLIC_CONTACT_EMAIL}</strong>.
          </p>

          <h2>9. Disclaimers</h2>
          <p>To the maximum extent permitted by law:</p>
          <ul>
            <li>
              The Site and content are provided &quot;as is&quot; and &quot;as
              available.&quot;
            </li>
            <li>
              We disclaim all warranties, express or implied, including
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </li>
            <li>
              We do not guarantee that the Site will be uninterrupted,
              error-free, or secure.
            </li>
          </ul>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits, revenue, data, or goodwill, arising
            out of or relating to your use of the Site.
          </p>
          <p>
            Our total liability for any claim related to the Site will not
            exceed the amount you paid to us, if any, for access to the Site
            during the three (3) months preceding the event giving rise to the
            claim.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless{" "}
            {PUBLIC_BUSINESS_LEGAL_NAME}
            and its affiliates, officers, employees, agents, and contractors
            from and against any claims, liabilities, damages, losses, and
            expenses (including reasonable attorneys&apos; fees) arising from:
          </p>
          <ul>
            <li>Your use of the Site in violation of these Terms.</li>
            <li>Your submissions or use of the Site.</li>
            <li>Your violation of any law or the rights of a third party.</li>
          </ul>

          <h2>12. Termination</h2>
          <p>
            We may suspend or terminate your access to the Site if we reasonably
            believe you have violated these Terms or if doing so is necessary to
            protect the Site or others.
          </p>

          <h2>13. Governing Law; Venue</h2>
          <p>
            These Terms are governed by the laws of the{" "}
            <strong>{JURISDICTION_PROVINCE_LONG}</strong> and the{" "}
            <strong>federal laws of {PUBLIC_ADDRESS_COUNTRY}</strong> applicable
            therein, without
            regard to conflict of laws principles.
          </p>
          <p>
            Any dispute arising out of or relating to these Terms or the Site
            will be brought exclusively in the{" "}
            <strong>courts of {JURISDICTION_REGION_NAME}</strong>, sitting in{" "}
            <strong>{PUBLIC_ADDRESS_CITY}</strong>, unless applicable law
            requires
            otherwise.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms as described above. Continued use of the
            Site after updates becomes effective means you accept the updated
            Terms.
          </p>

          <h2>15. Contact</h2>
          <p>
            If you have questions about these Terms or wish to raise legal
            concerns, contact:
          </p>
          <ul>
            <li>
              <strong>Name:</strong> {PUBLIC_BUSINESS_LEGAL_NAME}
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
