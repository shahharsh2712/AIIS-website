/**
 * Public site config. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 * Legal entity / GST: update `legal` when registration is complete.
 */
export const site = {
  name: "AI Institute of Surat",
  shortName: "AIIS",
  tagline: "Age-appropriate AI literacy for Surat—and beyond.",
  description:
    "AIIS offers AI programs for Grades 6–12, professional upskilling for working adults, and training for educators and schools in Surat, Gujarat.",
  /** Set NEXT_PUBLIC_SITE_URL in production for correct links and metadata. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "shahharsh2712@gmail.com",
  phoneDisplay: "+91 96623 64422",
  phoneTel: "+919662364422",
  /** E.164 without + for wa.me */
  whatsapp: "919662364422",
  address: {
    line1: "A-103, Nova Shikhariji, C.B. Patel Road",
    line2: "Surat, Gujarat 395007, India",
  },
  /** Update when proprietorship / company / trust and GST are finalized. */
  legal: {
    entityName: "[Legal entity name — to be updated]",
    gstin: "[GSTIN — to be updated]",
    jurisdiction: "Surat, Gujarat, India",
  },
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
} as const;

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
