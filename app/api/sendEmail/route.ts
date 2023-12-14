import ReviewOpportunityAgain from "@/components/email-templates/ReviewOpportunityAgain";
import { NextResponse } from "next/server";
import { Resend } from "resend";

type SendEmail = {
  recipient: Array<string>;
  subject: string;
  template: any;
};

export async function POST(request: Request) {
    const emailData: SendEmail = await request.json();

    const { recipient, subject, template } = emailData;
    // console.log(template);
    
    



    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { data } = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: recipient,
          subject: subject,
          react: ReviewOpportunityAgain("notgood"),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}