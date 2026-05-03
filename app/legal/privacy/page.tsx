import type { Metadata } from "next";
import Link from "next/link";
import { LegalProse } from "@/components/LegalProse";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `Privacy policy for ${site.name} (${site.shortName}), Surat, India.`,
};

export default function PrivacyPolicyPage() {
  const updated = "2 May 2026";
  return (
    <>
      <div className="border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)] px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-[var(--color-aiis-accent)]">Legal</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-[var(--color-aiis-ink)]">
            Privacy policy
          </h1>
          <p className="mt-2 text-sm text-[var(--color-aiis-muted)]">
            Last updated: {updated} · Applies to visitors and enquirers in India
          </p>
        </div>
      </div>
      <LegalProse>
        <p>
          This Privacy Policy describes how{" "}
          <strong>{site.name}</strong> (“<strong>{site.shortName}</strong>”, “we”, “us”)
          collects, uses, stores, and shares personal information when you use our website
          at <strong>{site.url}</strong>, submit an enquiry, or otherwise interact with us
          digitally. We are committed to handling information responsibly and in line with
          applicable laws in India, including the Digital Personal Data Protection Act,
          2023 (“<strong>DPDP Act</strong>”) where it applies, and other relevant
          requirements.
        </p>
        <p>
          <strong>Operator details (to be finalized):</strong> This institute operates as{" "}
          {site.legal.entityName}. Registered address: {site.address.line1},{" "}
          {site.address.line2}. GSTIN (if applicable): {site.legal.gstin}. Contact:{" "}
          <a href={`mailto:${site.email}`} className="text-[var(--color-aiis-accent)] hover:underline">
            {site.email}
          </a>
          .
        </p>

        <h2>1. What we collect</h2>
        <p>Depending on how you engage with us, we may collect:</p>
        <ul>
          <li>
            <strong>Identity and contact data:</strong> name, email address, phone number,
            WhatsApp number, city, and the grade or role you disclose in an enquiry form.
          </li>
          <li>
            <strong>Enquiry content:</strong> messages you type when contacting us about
            programs, schools, or admissions.
          </li>
          <li>
            <strong>Technical data:</strong> browser type, device type, approximate
            location (e.g. region from IP), pages visited, and timestamps — typically via
            standard server or analytics logs if enabled.
          </li>
        </ul>
        <p>
          We do not knowingly collect sensitive personal data beyond what you voluntarily
          provide for admissions or institutional coordination. For minors, a parent or
          guardian should submit enquiries where possible.
        </p>

        <h2>2. Why we use your data (purposes)</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to enquiries and schedule counselling, visits, or demos.</li>
          <li>Operate and improve our website and communications.</li>
          <li>Comply with law, respond to lawful requests, and protect our rights.</li>
          <li>
            Send operational messages related to your request (we do not send bulk
            marketing without a separate opt-in where required).
          </li>
        </ul>

        <h2>3. Legal bases</h2>
        <p>
          Where the DPDP Act applies, we rely on grounds such as your{" "}
          <strong>consent</strong> (e.g. submitting a form), <strong>legitimate uses</strong>{" "}
          for providing services you request, and <strong>compliance with law</strong>.
          You may withdraw consent for non-essential processing where applicable by
          contacting us, subject to legal retention needs.
        </p>

        <h2>4. Sharing and disclosure</h2>
        <p>We may share information with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run the site or email (e.g.
            hosting, email delivery), under confidentiality and need-to-know terms.
          </li>
          <li>
            <strong>Authorities</strong> when required by law or to protect safety and
            rights.
          </li>
        </ul>
        <p>
          We do not sell your personal data. Cross-border transfers, if any, will be
          done in compliance with applicable Indian law and, where required, with
          appropriate safeguards.
        </p>

        <h2>5. Retention</h2>
        <p>
          We keep enquiry and contact records only as long as needed to fulfil the
          purposes above, resolve disputes, and meet legal, accounting, or regulatory
          requirements. Technical logs may be kept for shorter operational periods unless
          longer retention is justified.
        </p>

        <h2>6. Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational measures to
          protect information. No method of transmission over the internet is completely
          secure; we encourage you not to share passwords or unrelated sensitive IDs via
          the public enquiry form.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Subject to applicable law, you may have rights to access, correct, update, or
          request deletion of your personal data, and to seek grievance redressal. To
          exercise these rights, contact us at the email above. We may need to verify your
          identity before processing certain requests.
        </p>

        <h2>8. Grievance officer</h2>
        <p>
          For privacy-related concerns, write to{" "}
          <a href={`mailto:${site.email}`} className="text-[var(--color-aiis-accent)] hover:underline">
            {site.email}
          </a>{" "}
          with the subject line “Privacy — {site.shortName}”. We will endeavour to respond
          within timelines prescribed under applicable law, once fully applicable to our
          operations.
        </p>

        <h2>9. Cookies and analytics</h2>
        <p>
          If we use cookies or similar technologies, we will describe them in a cookie
          notice or update this policy. You can control cookies through your browser
          settings.
        </p>

        <h2>10. Changes</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date will
          change; continued use of the site after changes constitutes notice where
          permitted by law.
        </p>

        <p className="pt-6 text-sm">
          <Link href="/legal/terms" className="text-[var(--color-aiis-accent)] hover:underline">
            Terms of use
          </Link>
          {" · "}
          <Link href="/legal/refund" className="text-[var(--color-aiis-accent)] hover:underline">
            Refund & cancellation
          </Link>
          {" · "}
          <Link href="/contact" className="text-[var(--color-aiis-accent)] hover:underline">
            Contact
          </Link>
        </p>
      </LegalProse>
    </>
  );
}
