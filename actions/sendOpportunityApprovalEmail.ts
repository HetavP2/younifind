import { Resend } from "resend";
import {ApprovalPendingEmailTemplate} from "@/components/email-templates/ApprovalPendingEmailTemplate";

export default async function sendOpportunityApprovalEmail() {
  "use server";
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["hetav.j.patel@gmail.com", "vangara.anirudhbharadwaj@gmail.com"],
    subject: "Opportunity Pending Approval",
    react: ApprovalPendingEmailTemplate(),
  });
    
}
