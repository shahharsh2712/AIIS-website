"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, whatsappHref } from "@/lib/site";

const nav = [
  { href: "/programs/grades-6-12", label: "Grades 6–12 AI" },
  { href: "/professionals", label: "Professionals & schools" },
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-aiis-border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-aiis-ink)]">
            {site.shortName}
          </span>
          <span className="text-xs text-[var(--color-aiis-muted)]">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[var(--color-aiis-surface)] text-[var(--color-aiis-ink)]"
                    : "text-[var(--color-aiis-muted)] hover:bg-[var(--color-aiis-surface)] hover:text-[var(--color-aiis-ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappHref(
              `Hi ${site.shortName}, I'd like to know more about your programs.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--color-aiis-border)] px-3 py-2 text-sm font-medium text-[var(--color-aiis-ink)] transition-colors hover:bg-[var(--color-aiis-surface)]"
          >
            WhatsApp
          </a>
          <Link
            href="/admissions"
            className="rounded-lg bg-[var(--color-aiis-accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-aiis-accent-hover)]"
          >
            Enquire
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[var(--color-aiis-border)] p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--color-aiis-border)] bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-aiis-ink)] hover:bg-[var(--color-aiis-surface)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-aiis-accent)]"
            >
              WhatsApp
            </a>
            <Link
              href="/admissions"
              className="mt-1 rounded-lg bg-[var(--color-aiis-accent)] px-3 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Enquire
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
