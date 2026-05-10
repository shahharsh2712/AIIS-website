import Link from "next/link";
import { PathCard } from "@/components/PathCard";
import { Section, SectionTitle } from "@/components/Section";
import { site, whatsappHref } from "@/lib/site";

const gradeBands = [
  {
    title: "Grades 6–8",
    text: "Data intuition, how models learn at a high level, ethics in everyday tech.",
  },
  {
    title: "Grades 9–10",
    text: "Structured projects, prompt engineering basics, responsible use in schoolwork.",
  },
  {
    title: "Grades 11–12",
    text: "Deeper builds, portfolios, and pathways toward advanced study or careers.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-aiis-accent)]">
            Surat · Gujarat · India
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--color-aiis-ink)] sm:text-5xl">
            The city&apos;s home for{" "}
            <span className="text-[var(--color-aiis-accent)]">trustworthy AI education</span>{" "}
            — from middle school to the workplace.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-aiis-muted)]">
            {site.shortName} ({site.name}) offers age-appropriate AI literacy for{" "}
            <strong className="font-medium text-[var(--color-aiis-ink)]">
              Grades 6–12
            </strong>
            , plus programs for{" "}
            <strong className="font-medium text-[var(--color-aiis-ink)]">
              working professionals
            </strong>{" "}
            and{" "}
            <strong className="font-medium text-[var(--color-aiis-ink)]">
              schools & educators
            </strong>
            .
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-aiis-accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-aiis-accent-hover)]"
            >
              Enquire for next batch
            </Link>
            <a
              href={whatsappHref(
                `Hi ${site.shortName}, I'd like to speak with you about programs.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--color-aiis-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-aiis-ink)] transition-colors hover:bg-[var(--color-aiis-surface)]"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/programs/grades-6-12"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[var(--color-aiis-accent)] hover:underline"
            >
              View Grades 6–12 programs
            </Link>
          </div>
        </div>
      </section>

      <Section className="py-16">
        <SectionTitle
          eyebrow="Choose your path"
          title="Built for families, careers, and classrooms"
          description="Same institute, different journeys — all focused on practical, ethical AI skills rooted in Surat."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PathCard
            href="/programs/grades-6-12"
            title="Grades 6–12: AI programs"
            description="Hands-on, age-banded tracks for students — from first exposure to portfolio-ready projects. Parents stay informed every step of the way."
            cta="Explore Grades 6–12 tracks"
          />
          <PathCard
            href="/professionals"
            title="Professionals & schools"
            description="Upskill working adults for the AI-augmented workplace, and equip educators and schools with workshops, modules, and ongoing support."
            cta="See professional & school offerings"
          />
        </div>
      </Section>

      <Section className="border-y border-[var(--color-aiis-border)] bg-[var(--color-aiis-warm-soft)] py-16">
        <SectionTitle
          eyebrow="Why AIIS"
          title="Ethics, safety, and real projects — not hype"
          description="We teach how AI works, when to use it, and how to use it responsibly. Young learners get guardrails; professionals get workflows that stick."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Age-appropriate by design",
              d: "Activities match cognitive stage — never one-size-fits-all.",
            },
            {
              t: "Surat-first community",
              d: "Local batches, local context, and room to grow a city-wide AI culture.",
            },
            {
              t: "Educators as partners",
              d: "School programs align with your timetable, staff capacity, and goals.",
            },
          ].map((item) => (
            <li
              key={item.t}
              className="rounded-2xl border border-orange-200/80 bg-white/80 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--color-aiis-ink)]">
                {item.t}
              </h3>
              <p className="mt-2 text-[var(--color-aiis-muted)]">{item.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Grades 6–12 at a glance"
          title="Programs across every school stage"
          description="Each band blends creativity, technical intuition, and responsible use — with clear outcomes you can discuss with our counsellors."
        />
        <div className="mt-12 space-y-4">
          {gradeBands.map((band) => (
            <div
              key={band.title}
              className="flex flex-col gap-2 rounded-2xl border border-[var(--color-aiis-border)] bg-[var(--color-aiis-card)] p-5 sm:flex-row sm:items-start sm:gap-8"
            >
              <p className="shrink-0 font-display text-lg font-semibold text-[var(--color-aiis-accent)] sm:w-40">
                {band.title}
              </p>
              <p className="text-[var(--color-aiis-muted)]">{band.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/programs/grades-6-12"
            className="text-sm font-semibold text-[var(--color-aiis-accent)] hover:underline"
          >
            Full Grades 6–12 curriculum outline →
          </Link>
        </div>
      </Section>

      <Section className="bg-[var(--color-aiis-ink)] py-16 text-white">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to visit or book a call?
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              Tell us the learner&apos;s grade or your professional role — we&apos;ll recommend
              the right track and batch options in Surat.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--color-aiis-ink)] hover:bg-white/90"
            >
              Contact & location
            </Link>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              WhatsApp {site.shortName}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
