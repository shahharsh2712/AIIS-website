"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/Section";
import { site, whatsappHref } from "@/lib/site";

const interests = [
  { value: "k12", label: "K–12 (student)" },
  { value: "professional", label: "Working professional" },
  { value: "school", label: "School / educator" },
];

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      interest: String(fd.get("interest") ?? "").trim(),
      grade: String(fd.get("grade") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
    };

    setLoading(true);
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try WhatsApp.");
        return;
      }
      if (data.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      setError("Network error. Check your connection or use WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Section className="border-b border-[var(--color-aiis-border)] bg-[var(--color-aiis-surface)] pt-12 pb-16">
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-[var(--color-aiis-ink)] sm:text-5xl">
          Admissions & enquiries
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-aiis-muted)]">
          Tell us who you are enrolling and what you hope to achieve. We&apos;ll follow
          up with batch options, prerequisites, and next steps for Surat-based or
          hybrid participation.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Enquiry form"
              title="Start a conversation"
              description="Submissions are emailed to our team. You can still WhatsApp us for a faster reply."
            />
            {submitted ? (
              <div className="mt-8 rounded-2xl border border-[var(--color-aiis-accent)]/30 bg-teal-50/80 p-6 text-[var(--color-aiis-ink)]">
                <p className="font-semibold">Thank you — your enquiry was sent.</p>
                <p className="mt-2 text-sm text-[var(--color-aiis-muted)]">
                  We&apos;ll get back to you soon at the email you provided. If it&apos;s
                  urgent, message us on WhatsApp.
                </p>
                <a
                  href={whatsappHref(
                    `Hi ${site.shortName}, I submitted the admissions form. Please confirm receipt.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-[var(--color-aiis-accent)] hover:underline"
                >
                  Open WhatsApp →
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="relative mt-8 space-y-5">
                {error ? (
                  <div
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
                    role="alert"
                  >
                    {error}
                  </div>
                ) : null}

                {/* Honeypot — leave hidden; bots often fill this */}
                <div
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-aiis-ink)]"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    disabled={loading}
                    className="mt-1 w-full rounded-xl border border-[var(--color-aiis-border)] px-4 py-2.5 text-[var(--color-aiis-ink)] outline-none ring-[var(--color-aiis-accent)] focus:ring-2 disabled:opacity-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-aiis-ink)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    className="mt-1 w-full rounded-xl border border-[var(--color-aiis-border)] px-4 py-2.5 text-[var(--color-aiis-ink)] outline-none ring-[var(--color-aiis-accent)] focus:ring-2 disabled:opacity-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[var(--color-aiis-ink)]"
                  >
                    Phone (WhatsApp preferred)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    disabled={loading}
                    className="mt-1 w-full rounded-xl border border-[var(--color-aiis-border)] px-4 py-2.5 text-[var(--color-aiis-ink)] outline-none ring-[var(--color-aiis-accent)] focus:ring-2 disabled:opacity-60"
                  />
                </div>
                <div>
                  <span className="block text-sm font-medium text-[var(--color-aiis-ink)]">
                    I am interested as
                  </span>
                  <div className="mt-2 flex flex-col gap-2">
                    {interests.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2 text-sm text-[var(--color-aiis-muted)]"
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={opt.value}
                          required
                          disabled={loading}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="grade"
                    className="block text-sm font-medium text-[var(--color-aiis-ink)]"
                  >
                    Student grade (if K–12)
                  </label>
                  <input
                    id="grade"
                    name="grade"
                    placeholder="e.g. Grade 7"
                    disabled={loading}
                    className="mt-1 w-full rounded-xl border border-[var(--color-aiis-border)] px-4 py-2.5 text-[var(--color-aiis-ink)] outline-none ring-[var(--color-aiis-accent)] focus:ring-2 disabled:opacity-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--color-aiis-ink)]"
                  >
                    Anything else?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    disabled={loading}
                    className="mt-1 w-full rounded-xl border border-[var(--color-aiis-border)] px-4 py-2.5 text-[var(--color-aiis-ink)] outline-none ring-[var(--color-aiis-accent)] focus:ring-2 disabled:opacity-60"
                  />
                </div>
                <p className="text-xs text-[var(--color-aiis-muted)]">
                  By submitting, you agree to our{" "}
                  <Link href="/legal/privacy" className="text-[var(--color-aiis-accent)] hover:underline">
                    Privacy policy
                  </Link>
                  .
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-[var(--color-aiis-accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-aiis-accent-hover)] disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Submit enquiry"}
                </button>
              </form>
            )}
          </div>

          <aside className="lg:pt-28">
            <div className="rounded-2xl border border-[var(--color-aiis-border)] bg-[var(--color-aiis-card)] p-6">
              <h2 className="font-display text-lg font-semibold text-[var(--color-aiis-ink)]">
                FAQ
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-[var(--color-aiis-ink)]">
                    Language of instruction
                  </dt>
                  <dd className="mt-1 text-[var(--color-aiis-muted)]">
                    Primarily English; support for Gujarati/Hindi Q&amp;A where helpful.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--color-aiis-ink)]">
                    Device requirements
                  </dt>
                  <dd className="mt-1 text-[var(--color-aiis-muted)]">
                    Shared at enrolment by grade band; younger cohorts may use institute
                    devices where available.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--color-aiis-ink)]">Fees</dt>
                  <dd className="mt-1 text-[var(--color-aiis-muted)]">
                    Shared after counselling. Institutional pricing for schools is quoted
                    separately. See our{" "}
                    <Link
                      href="/legal/refund"
                      className="text-[var(--color-aiis-accent)] hover:underline"
                    >
                      refund policy
                    </Link>
                    .
                  </dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="mt-6 inline-block text-sm font-semibold text-[var(--color-aiis-accent)] hover:underline"
              >
                Visit & contact details →
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
