import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} (${site.shortName}) — AI education in Surat for Grades 6–12, professionals, and schools.`,
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)] pt-12 pb-16">
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-[var(--color-aiis-ink)] sm:text-5xl">
          About {site.shortName}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-aiis-muted)]">
          {site.name} exists so Surat has a dedicated place to learn AI the right
          way: with clarity, ethics, and projects you can point to — whether you are
          in grades 6–12, leading a team, or teaching the next generation.
        </p>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Mission"
          title="AI literacy that respects the learner"
          description="We believe AI will touch every career and classroom. Our job is to demystify it without overselling it — and to build habits that last after the course ends."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-aiis-border)] p-6">
            <h3 className="font-display text-lg font-semibold text-[var(--color-aiis-ink)]">
              Pedagogy
            </h3>
            <p className="mt-3 text-[var(--color-aiis-muted)]">
              Scaffolded projects, visible progress for parents and schools, and open
              conversation about limitations, bias, and academic honesty.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-aiis-border)] p-6">
            <h3 className="font-display text-lg font-semibold text-[var(--color-aiis-ink)]">
              Community
            </h3>
            <p className="mt-3 text-[var(--color-aiis-muted)]">
              Surat-first: local batches, local partners, and room to grow a network
              of students, teachers, and employers who share the same standards.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--color-aiis-surface)] py-16">
        <SectionTitle
          eyebrow="Team"
          title="People behind AIIS"
          description="Faculty and advisors will be listed here with photos and bios as we finalize the founding team. For now, reach out — we are happy to introduce ourselves personally."
        />
        <div className="mt-8 rounded-2xl border border-dashed border-[var(--color-aiis-border)] bg-white p-8 text-center text-[var(--color-aiis-muted)]">
          <p>Founding faculty & leadership — coming soon.</p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm font-semibold text-[var(--color-aiis-accent)] hover:underline"
          >
            Contact us →
          </Link>
        </div>
      </Section>
    </>
  );
}
