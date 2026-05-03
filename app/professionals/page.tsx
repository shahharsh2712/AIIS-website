import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/Section";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professionals & schools",
  description:
    "AI upskilling for working adults and training programs for educators and schools at AI Institute of Surat (AIIS).",
};

export default function ProfessionalsPage() {
  return (
    <>
      <Section className="border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)] pt-12 pb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-aiis-accent)]">
          Beyond the classroom
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[var(--color-aiis-ink)] sm:text-5xl">
          Professionals & schools — two ways we support Surat&apos;s AI journey
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-aiis-muted)]">
          Whether you are advancing your career or bringing AI literacy to an entire
          institution, {site.shortName} combines practical workflows with the same
          ethical backbone we teach in K–12.
        </p>
      </Section>

      <Section id="working-adults">
        <SectionTitle
          eyebrow="Working adults"
          title="Upskilling for the AI-augmented workplace"
          description="Short, intensive formats and ongoing cohorts — tuned to busy schedules in Surat and hybrid teams."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-aiis-border)] bg-[var(--color-aiis-card)] p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-[var(--color-aiis-ink)]">
              Typical focus areas
            </h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--color-aiis-muted)]">
              <li>Productivity stacks: documents, slides, research, code assistance</li>
              <li>Prompting and evaluation — when to trust the model</li>
              <li>Data awareness for managers and ICs</li>
              <li>Governance basics: privacy, IP, and team norms</li>
              <li>Capstone: a workflow you actually use at work</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--color-aiis-border)] bg-[var(--color-aiis-card)] p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-[var(--color-aiis-ink)]">
              Who it&apos;s for
            </h3>
            <p className="mt-4 text-[var(--color-aiis-muted)]">
              Individual contributors, team leads, founders, and operators who want
              <strong className="font-medium text-[var(--color-aiis-ink)]">
                {" "}
                measurable habits
              </strong>{" "}
              — not a one-off certificate. We welcome mixed-experience cohorts;
              pre-work levels the field.
            </p>
            <p className="mt-4 text-sm text-[var(--color-aiis-muted)]">
              Batch schedules and fees are confirmed at enquiry; corporate bundles
              available for teams based in Surat.
            </p>
          </div>
        </div>
      </Section>

      <Section id="schools-educators" className="bg-[var(--color-aiis-warm-soft)] border-y border-orange-200/60">
        <SectionTitle
          eyebrow="Schools & educators"
          title="Workshops, electives, and sustained partnerships"
          description="Help your staff and students meet AI with confidence — aligned to your school’s values and academic policies."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Staff orientation",
              body: "Half-day or multi-day workshops on AI literacy, classroom policy, and academic integrity.",
            },
            {
              title: "Student modules",
              body: "Elective blocks, club formats, or intensive holiday programs co-designed with your coordinators.",
            },
            {
              title: "Ongoing support",
              body: "Office hours for teachers, refresher sessions, and updates as tools evolve.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-orange-200/80 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--color-aiis-ink)]">
                {card.title}
              </h3>
              <p className="mt-3 text-[var(--color-aiis-muted)]">{card.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[var(--color-aiis-muted)]">
          For institutional proposals, include your board size, grades served, and
          preferred term — we&apos;ll respond with a scoped plan.
        </p>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[var(--color-aiis-ink)] p-8 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Talk to us about your cohort or school
            </h2>
            <p className="mt-2 text-white/75">
              Use the form on Admissions or message us directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--color-aiis-ink)] hover:bg-white/90"
            >
              Enquire
            </Link>
            <a
              href={whatsappHref(
                `Hi ${site.shortName}, I'm interested in professional / school programs.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
