"use server";
import { Resend } from "resend";
import { ApprovalPendingEmailTemplate } from "@/components/email-templates/ApprovalPendingEmailTemplate";

interface SendEmailProps {
  to: Array<string>;
  subject: string;
  template: any;
}

const sendEmail = async ({
  to,
  subject,
  template,
}: SendEmailProps): Promise<void> => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: to,
    subject: subject,
    react: template,
  });
};

export default sendEmail;