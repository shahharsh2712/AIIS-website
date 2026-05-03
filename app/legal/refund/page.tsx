import type { Metadata } from "next";
import Link from "next/link";
import { LegalProse } from "@/components/LegalProse";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & cancellation",
  description: `Refund and cancellation policy for ${site.name} (${site.shortName}), Surat, India.`,
};

export default function RefundPolicyPage() {
  const updated = "2 May 2026";
  return (
    <>
      <div className="border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)] px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-[var(--color-aiis-accent)]">Legal</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-[var(--color-aiis-ink)]">
            Refund & cancellation policy
          </h1>
          <p className="mt-2 text-sm text-[var(--color-aiis-muted)]">
            Last updated: {updated} · For programs and fees in India
          </p>
        </div>
      </div>
      <LegalProse>
        <p>
          This Refund & Cancellation Policy (“<strong>Policy</strong>”) applies to fees
          paid to <strong>{site.name}</strong> (“<strong>{site.shortName}</strong>”) for
          courses, workshops, camps, school programs, and related services, including
          where payment is made online or offline. It is intended to be fair, transparent,
          and aligned with consumer protection expectations in India. Specific batches may
          have written schedules or annexures; where those documents conflict on a
          material point, the signed or written enrolment terms prevail.
        </p>
        <p>
          <strong>Operator:</strong> {site.legal.entityName}. GSTIN (if applicable):{" "}
          {site.legal.gstin}. Invoices, where issued, will reflect the final registered
          name and tax details once updated.
        </p>

        <h2>1. Cooling-off and enquiries</h2>
        <p>
          Submitting the website enquiry form does <strong>not</strong> create a paid
          enrolment. Fee obligations arise only after you receive a clear fee quote and
          confirm enrolment according to our process (e.g. payment acknowledgement /
          receipt / agreement).
        </p>

        <h2>2. Cancellations by you (before programme start)</h2>
        <p>
          If you cancel a confirmed enrolment <strong>before</strong> the programme’s
          official start date as communicated in writing:
        </p>
        <ul>
          <li>
            <strong>Within 7 days of payment</strong> (and before the programme has
            started): we will refund <strong>100%</strong> of tuition fees paid, minus
            non-recoverable third-party charges actually incurred and disclosed in
            advance (if any), within a reasonable period — typically within{" "}
            <strong>10–14 business days</strong> of an approved refund request.
          </li>
          <li>
            <strong>After 7 days but before start:</strong> we may retain a{" "}
            <strong>reasonable administrative fee</strong> (not exceeding{" "}
            <strong>15%</strong> of programme fees or INR 5,000, whichever is lower,
            unless a different cap is stated in your enrolment letter) and refund the
            balance, subject to seat planning and batch viability.
          </li>
        </ul>
        <p>
          “Programme start” means the first scheduled instructional session for that
          batch, not orientation materials sent electronically unless expressly defined
          otherwise in your enrolment pack.
        </p>

        <h2>3. Withdrawal after programme start</h2>
        <p>
          Once the programme has started, refunds are generally{" "}
          <strong>pro-rata</strong> by completed weeks or modules, at our discretion and
          subject to batch rules — except where the Consumer Protection Act, 2019 or other
          mandatory law requires a different outcome. No refund is due for sessions already
          delivered, materials already provided, or third-party licences already
          activated on your behalf.
        </p>

        <h2>4. Cancellations by us</h2>
        <p>
          If we cancel a programme before it begins, we will offer{" "}
          <strong>full refund of fees received</strong> for that programme or, with your
          consent, transfer to a comparable future batch. If we discontinue a programme
          mid-way due to reasons within our reasonable control, we will work with you on a
          fair remedy (e.g. credit or partial refund for undelivered portion).
        </p>

        <h2>5. Force majeure</h2>
        <p>
          For events beyond our reasonable control (natural disasters, government orders,
          epidemics, strikes, infrastructure failures), we may reschedule or move
          delivery online. Fees already paid may be applied to the rescheduled offering;
          where no reasonable substitute exists, we will refund amounts for undelivered
          services as per an announced plan.
        </p>

        <h2>6. Online payments</h2>
        <p>
          If you pay through a payment gateway, settlement timelines may depend on banks
          and processors. Refunds, when approved, are typically credited to the original
          payment method where technically feasible; UPI/card network rules may apply.
        </p>

        <h2>7. Institutional (school) contracts</h2>
        <p>
          School and corporate engagements are governed by separate statements of work
          or agreements. This Policy supplements those contracts; where they differ on
          refunds, the <strong>signed agreement</strong> controls.
        </p>

        <h2>8. How to request a refund</h2>
        <p>
          Email{" "}
          <a href={`mailto:${site.email}`} className="text-[var(--color-aiis-accent)] hover:underline">
            {site.email}
          </a>{" "}
          from the email on file (or attach proof of enrolment), with subject “Refund
          request — [learner name] — [programme]”. We may verify identity and payment
          before processing.
        </p>

        <h2>9. Grievances</h2>
        <p>
          If you are unsatisfied with our decision, you may escalate in writing. You may
          also have rights under the Consumer Protection Act, 2019, including access to
          consumer commissions, where applicable.
        </p>

        <p className="pt-6 text-sm">
          <Link href="/legal/privacy" className="text-[var(--color-aiis-accent)] hover:underline">
            Privacy policy
          </Link>
          {" · "}
          <Link href="/legal/terms" className="text-[var(--color-aiis-accent)] hover:underline">
            Terms of use
          </Link>
        </p>
      </LegalProse>
    </>
  );
}
