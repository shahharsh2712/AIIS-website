export function LegalProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="legal-prose mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="space-y-4 text-[var(--color-aiis-muted)] [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--color-aiis-ink)] [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-[var(--color-aiis-ink)] [&_li]:ml-6 [&_li]:list-disc [&_ol]:ml-6 [&_ol]:list-decimal [&_p]:leading-relaxed [&_strong]:font-medium [&_strong]:text-[var(--color-aiis-ink)] [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}
