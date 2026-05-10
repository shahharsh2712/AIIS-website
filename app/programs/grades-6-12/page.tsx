import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/Section";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grades 6–12 AI programs",
  description:
    "AI literacy and project-based learning for Grades 6–12 at AI Institute of Surat (AIIS).",
};

const bands = [
  {
    id: "g6-8",
    title: "Grades 6–8 · Insight",
    topics: [
      "How training differs from rules",
      "Privacy and what not to share online",
      "Ethics scenarios relevant to school life",
      "Small apps or automations with scaffolding",
    ],
    outcomes: "Critical thinking about tech; responsible experimentation.",
  },
  {
    id: "g9-10",
    title: "Grades 9–10 · Application",
    topics: [
      "Prompt design for learning (not shortcuts)",
      "Evaluating AI output for school subjects",
      "Lightweight data exercises",
      "Project sprint with documentation",
    ],
    outcomes: "Judgment for using AI as a study partner; stronger communication of ideas.",
  },
  {
    id: "g11-12",
    title: "Grades 11–12 · Portfolio",
    topics: [
      "End-to-end project lifecycle",
      "Optional deeper tracks (e.g. Python, APIs) where appropriate",
      "Portfolio pieces for higher study or internships",
      "Career context: roles, study paths, Surat ecosystem",
    ],
    outcomes: "Tangible work samples; clearer next steps after school.",
  },
];

export default function Grades612ProgramsPage() {
  return (
    <>
      <Section className="border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)] pt-12 pb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-aiis-accent)]">
          Grades 6–12 at {site.shortName}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[var(--color-aiis-ink)] sm:text-5xl">
          AI for Grades 6–12 — structured, safe, and hands-on
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-aiis-muted)]">
          Parents and schools choose {site.shortName} for clear grade bands, visible
          outcomes, and a consistent message:{" "}
          <strong className="font-medium text-[var(--color-aiis-ink)]">
            learn to use AI well, not blindly
          </strong>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/admissions"
            className="rounded-xl bg-[var(--color-aiis-accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-aiis-accent-hover)]"
          >
            Enquire for your child&apos;s grade
          </Link>
          <a
            href={whatsappHref(
              `Hi ${site.shortName}, I'd like details on Grades 6-12 AI for grade: `,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--color-aiis-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-aiis-ink)] hover:bg-[var(--color-aiis-surface)]"
          >
            WhatsApp us
          </a>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Grade bands"
          title="What each stage covers"
          description="Exact session plans and batch timings are shared during counselling. Below is a transparent overview you can discuss at home or with your school."
        />
        <div className="mt-12 space-y-8">
          {bands.map((band) => (
            <article
              key={band.id}
              id={band.id}
              className="scroll-mt-28 rounded-2xl border border-[var(--color-aiis-border)] bg-[var(--color-aiis-card)] p-6 sm:p-8"
            >
              <h2 className="font-display text-2xl font-semibold text-[var(--color-aiis-ink)]">
                {band.title}
              </h2>
              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-aiis-muted)]">
                    Sample themes
                  </h3>
                  <ul className="mt-3 list-inside list-disc space-y-2 text-[var(--color-aiis-muted)]">
                    {band.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-[var(--color-aiis-surface)] p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-aiis-muted)]">
                    Outcomes
                  </h3>
                  <p className="mt-3 text-[var(--color-aiis-ink)]">{band.outcomes}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--color-aiis-surface)] py-16">
        <SectionTitle
          eyebrow="For parents"
          title="Safety and school alignment"
          description="We communicate what students are building, how tools are used in class, and how to extend learning safely at home."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "No anonymous accounts for minors; clear communication channels with guardians.",
            "Age-appropriate tools only; staff-supervised sessions for younger bands.",
            "Honest guidance on academic integrity and school policies.",
            "Optional parent orientation sessions each term.",
          ].map((line) => (
            <li
              key={line}
              className="rounded-xl border border-[var(--color-aiis-border)] bg-white p-4 text-[var(--color-aiis-muted)]"
            >
              {line}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
