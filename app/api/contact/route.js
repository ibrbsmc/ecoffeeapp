import { Resend } from "resend";

// key al
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  // Formdan gelen verileri al
  const { name, email, subject, message } = await request.json();

  // Resend ile mail gönder
  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ibrabasmac14@gmail.com",
    subject: `Contact Form: ${subject}`,
    text: `
İsim: ${name}
Email: ${email}
Konu: ${subject}

Mesaj:
${message}
    `,
  });

  // Hata varsa hata döndür
  if (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }

  // Başarılıysa başarılı döndür
  return Response.json({ success: true });
}