import Link from "next/link";

export function PathCard({
  href,
  title,
  description,
  cta,
}: {
  href: string;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-[var(--color-aiis-border)] bg-[var(--color-aiis-card)] p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="font-display text-xl font-semibold text-[var(--color-aiis-ink)] group-hover:text-[var(--color-aiis-accent)]">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-[var(--color-aiis-muted)]">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-aiis-accent)]">
        {cta}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
