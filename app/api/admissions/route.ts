import { Resend } from "resend";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const interestLabels: Record<string, string> = {
  k12: "Grades 6–12 (student)",
  professional: "Working professional",
  school: "School / educator",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      interest?: string;
      grade?: string;
      message?: string;
      /** Honeypot — must be empty */
      company?: string;
    };

    if (body.company && String(body.company).trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const interest = String(body.interest ?? "").trim();
    const grade = String(body.grade ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || name.length > 200) {
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (!interest || !interestLabels[interest]) {
      return NextResponse.json({ error: "Please select an interest." }, { status: 400 });
    }
    if (phone.length > 50) {
      return NextResponse.json({ error: "Phone is too long." }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Enquiry email is not configured. Add RESEND_API_KEY to the server environment.",
        },
        { status: 503 },
      );
    }

    const to = process.env.ADMISSIONS_TO_EMAIL?.trim() || site.email;
    const from =
      process.env.RESEND_FROM?.trim() ||
      `${site.shortName} Enquiries <onboarding@resend.dev>`;

    const lines = [
      `New admissions enquiry — ${site.shortName}`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Interest: ${interestLabels[interest]}`,
      `Student grade (if any): ${grade || "—"}`,
      "",
      "Message:",
      message || "—",
      "",
      `Submitted via: ${site.url}/admissions`,
    ];

    const text = lines.join("\n");
    const html = `
      <h2>New admissions enquiry — ${site.shortName}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
      <strong>Email:</strong> ${escapeHtml(email)}<br/>
      <strong>Phone:</strong> ${escapeHtml(phone || "—")}<br/>
      <strong>Interest:</strong> ${escapeHtml(interestLabels[interest])}<br/>
      <strong>Grade:</strong> ${escapeHtml(grade || "—")}</p>
      <p><strong>Message</strong></p>
      <p>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
      <p style="color:#666;font-size:12px;">Submitted via ${escapeHtml(site.url)}/admissions</p>
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[${site.shortName}] New enquiry — ${interestLabels[interest]}`,
      text,
      html,
    });

    if (error) {
      console.error("[admissions] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send email. Please try again or use WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
