"use server";

import { Resend } from "resend";

interface SendEmailProps {
  to: Array<string>;
  subject: string;
  template: any;
}
//google analytics change
const sendEmail = async ({
  to,
  subject,
  template,
}: SendEmailProps): Promise<string> => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data } = await resend.emails.send({
    from: "admin@younifind.ca",
    to: to,
    subject: subject,
    react: template,
  });
  if (data !== null) {
    return "emailSentSuccessfully";
  }

  return "";
};

export default sendEmail;
