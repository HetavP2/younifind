"use server";
//its fuckin up cause its use server but if we remove it it wont be able to find the RESEND_API_KEY

import { Resend } from "resend";

interface SendEmailProps {
  to: Array<string>;
  subject: string;
  template: any;
}

const sendEmail = async ({
  to,
  subject,
  template,
}: SendEmailProps): Promise<string> => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
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
