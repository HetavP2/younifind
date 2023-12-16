import handleEmailRequest from "@/actions/handleEmailRequest";
import { NextResponse } from "next/server";
import { Resend } from "resend";

type SendEmail = {
  recipient: Array<string>;
  subject: string;
  operation: string;
  content: any;
};

export async function POST(request: Request) {
  const emailData: SendEmail = await request.json();

  const { recipient, subject, operation, content } = emailData;

  const emailTemplate = await handleEmailRequest({ operation, content });

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipient,
      subject: subject,
      react: emailTemplate,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
