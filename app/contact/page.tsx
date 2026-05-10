import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { site, whatsappHref } from "@/lib/site";

const mapQuery = encodeURIComponent(
  "A-103 Nova Shikhariji, C.B. Patel Road, Surat 395007",
);

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} (${site.shortName}) in Surat — visit, call, or WhatsApp.`,
};

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)] pt-12 pb-16">
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-[var(--color-aiis-ink)] sm:text-5xl">
          Contact & visit
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-aiis-muted)]">
          Visit us at our Surat centre below, or reach us by email, phone, or WhatsApp.
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-aiis-border)] bg-[var(--color-aiis-card)] p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-[var(--color-aiis-ink)]">
              Reach {site.shortName}
            </h2>
            <ul className="mt-6 space-y-4 text-[var(--color-aiis-muted)]">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-aiis-ink)]">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block text-[var(--color-aiis-accent)] hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-aiis-ink)]">
                  Phone
                </span>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="mt-1 inline-block hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-aiis-ink)]">
                  WhatsApp
                </span>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-[var(--color-aiis-accent)] hover:underline"
                >
                  Message us
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-aiis-ink)]">
                  Location
                </span>
                <p className="mt-1">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-[var(--color-aiis-ink)] p-6 text-white sm:p-8">
            <div>
              <h2 className="font-display text-xl font-semibold">Plan your visit</h2>
              <p className="mt-3 text-white/75">
                Book a short tour or counselling slot so we can match the learner to
                the right band — Grades 6–12, professional, or school partnership.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admissions"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--color-aiis-ink)] hover:bg-white/90"
              >
                Enquiry form
              </Link>
              <a
                href={whatsappHref(`Hi ${site.shortName}, I'd like to schedule a visit.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                WhatsApp to book
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)]">
          <iframe
            title="Map — AIIS Surat"
            className="aspect-[21/9] min-h-[240px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          />
          <p className="border-t border-[var(--color-aiis-border)] px-4 py-3 text-center text-sm text-[var(--color-aiis-muted)]">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-aiis-accent)] hover:underline"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
