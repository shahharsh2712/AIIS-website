import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-aiis-ink)]">
            {site.shortName}
          </p>
          <p className="mt-2 text-sm text-[var(--color-aiis-muted)]">
            {site.tagline}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-aiis-ink)]">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-aiis-muted)]">
            <li>
              <Link
                href="/programs/k12"
                className="hover:text-[var(--color-aiis-ink)]"
              >
                K–12 AI programs
              </Link>
            </li>
            <li>
              <Link
                href="/professionals"
                className="hover:text-[var(--color-aiis-ink)]"
              >
                Professionals & schools
              </Link>
            </li>
            <li>
              <Link
                href="/admissions"
                className="hover:text-[var(--color-aiis-ink)]"
              >
                Admissions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-aiis-ink)]">
            Contact
          </p>
          <p className="mt-3 text-sm text-[var(--color-aiis-muted)]">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <p className="mt-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="text-[var(--color-aiis-accent)] hover:underline"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-aiis-accent)] hover:underline"
            >
              WhatsApp
            </a>
            <span className="text-[var(--color-aiis-muted)]">
              {" "}
              · {site.phoneDisplay}
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--color-aiis-border)] px-4 py-6 text-center text-xs text-[var(--color-aiis-muted)] sm:px-6">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <Link href="/legal/privacy" className="hover:text-[var(--color-aiis-ink)]">
            Privacy
          </Link>
          <span aria-hidden className="text-[var(--color-aiis-border)]">
            |
          </span>
          <Link href="/legal/terms" className="hover:text-[var(--color-aiis-ink)]">
            Terms
          </Link>
          <span aria-hidden className="text-[var(--color-aiis-border)]">
            |
          </span>
          <Link href="/legal/refund" className="hover:text-[var(--color-aiis-ink)]">
            Refunds
          </Link>
        </p>
        <p className="mt-3">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
