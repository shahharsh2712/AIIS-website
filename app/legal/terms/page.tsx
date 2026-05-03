import type { Metadata } from "next";
import Link from "next/link";
import { LegalProse } from "@/components/LegalProse";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms of use for ${site.name} (${site.shortName}), Surat, India.`,
};

export default function TermsPage() {
  const updated = "2 May 2026";
  return (
    <>
      <div className="border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)] px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-[var(--color-aiis-accent)]">Legal</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-[var(--color-aiis-ink)]">
            Terms of use
          </h1>
          <p className="mt-2 text-sm text-[var(--color-aiis-muted)]">
            Last updated: {updated} · Governing law: India
          </p>
        </div>
      </div>
      <LegalProse>
        <p>
          These Terms of Use (“<strong>Terms</strong>”) govern your access to and use of
          the website and online enquiry facilities of <strong>{site.name}</strong> (“
          <strong>{site.shortName}</strong>”, “we”, “us”) at <strong>{site.url}</strong>.
          By using the site, you agree to these Terms. If you do not agree, please do not
          use the site.
        </p>
        <p>
          <strong>Operator:</strong> {site.legal.entityName}. Address: {site.address.line1},{" "}
          {site.address.line2}. GSTIN (if applicable): {site.legal.gstin}.
        </p>

        <h2>1. Nature of the website</h2>
        <p>
          The site provides general information about our programs, admissions, and
          contact options. It does not constitute a binding offer. Program details, fees,
          schedules, and eligibility are confirmed only through official communications
          (e.g. signed agreements, fee receipts, or written confirmations from us).
        </p>

        <h2>2. Eligibility and accounts</h2>
        <p>
          Where programs involve minors, a parent or legal guardian is responsible for
          enrolment decisions and for ensuring compliance with school and examination
          board rules. You agree that information you provide is accurate to the best of
          your knowledge.
        </p>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site for unlawful, harassing, or harmful purposes.</li>
          <li>
            Attempt to gain unauthorized access to our systems, other users, or third
            parties.
          </li>
          <li>
            Scrape, overload, or interfere with the site’s operation; introduce malware;
            or misuse enquiry forms or contact channels.
          </li>
          <li>
            Misrepresent your identity or affiliation, or use another person’s
            information without authority.
          </li>
        </ul>

        <h2>4. Intellectual property</h2>
        <p>
          Content on this site (text, branding, layout, and original materials) is owned
          by us or our licensors unless stated otherwise. You may view and share links
          for personal, non-commercial reference. No licence is granted except as
          expressly stated in writing (e.g. for enrolled students under separate terms).
        </p>

        <h2>5. Third-party links and tools</h2>
        <p>
          The site may refer to third-party websites, AI tools, or platforms used in
          teaching. We are not responsible for third-party terms, content, or privacy
          practices. Use of such services is at your own risk and subject to their
          policies.
        </p>

        <h2>6. Disclaimers</h2>
        <p>
          The site and its content are provided “as is” and “as available”. To the maximum
          extent permitted by applicable law in India, we disclaim warranties of
          merchantability, fitness for a particular purpose, and non-infringement. We do
          not guarantee uninterrupted or error-free operation, or specific career,
          examination, or admission outcomes.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for any indirect,
          incidental, special, consequential, or punitive damages, or for loss of profits,
          data, or goodwill, arising from your use of the site or inability to use it.
          Our aggregate liability for claims relating to the site (excluding liability that
          cannot be excluded under the Consumer Protection Act, 2019 or other mandatory
          law) shall not exceed the amount you paid us specifically for digital access to
          the site in the twelve (12) months preceding the claim, or INR 2,000,
          whichever is higher — unless a separate signed agreement states otherwise.
        </p>

        <h2>8. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless {site.shortName} and its personnel
          against claims arising from your breach of these Terms, misuse of the site, or
          violation of third-party rights, except where caused by our wilful misconduct as
          finally determined by a competent court.
        </p>

        <h2>9. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of India. Subject to mandatory consumer
          forums, courts at {site.legal.jurisdiction} shall have exclusive jurisdiction over
          disputes arising from these Terms or the site, unless another forum is
          mandatorily applicable.
        </p>

        <h2>10. Changes</h2>
        <p>
          We may modify these Terms by posting an updated version on the site. Material
          changes will be indicated by updating the “Last updated” date. Continued use
          after changes may constitute acceptance where permitted by law.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href={`mailto:${site.email}`} className="text-[var(--color-aiis-accent)] hover:underline">
            {site.email}
          </a>
          .
        </p>

        <p className="pt-6 text-sm">
          <Link href="/legal/privacy" className="text-[var(--color-aiis-accent)] hover:underline">
            Privacy policy
          </Link>
          {" · "}
          <Link href="/legal/refund" className="text-[var(--color-aiis-accent)] hover:underline">
            Refund & cancellation
          </Link>
        </p>
      </LegalProse>
    </>
  );
}
