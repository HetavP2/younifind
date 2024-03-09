import handleEmailRequest from "@/actions/handleEmailRequest";
import { NextResponse } from "next/server";
import { Resend } from "resend";
export const runtime = "edge";
const decryptThis = (encryptedText: any) => {
  let key: any = process.env.payloadKey;
  let result = "";
  for (let i = 0; i < encryptedText.length; i++) {
    const encryptedChar = encryptedText.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);
    const decryptedChar = String.fromCharCode(encryptedChar ^ keyChar);
    result += decryptedChar;
  }

  console.log("result is", result, " after decrypting the text", encryptedText);

  return result;


};


export async function POST(request: any) {


  const emailData: any = await request.json();
  const {
    recipient,
    subject,
    operation,
    content,
  } = await emailData;

  // console.log("emailData", emailData);

  const recipientproper = await decryptThis(recipient);
  const subjectproper = await decryptThis(subject);
  const operationproper = await decryptThis(operation);
  const contentproper = await decryptThis(content);

  console.log("DECRYPTED SHIT:");
  console.log(recipient, recipientproper, subjectproper, operationproper, contentproper);


  const emailTemplate = await handleEmailRequest({ operation:operationproper, content:contentproper });

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      //from might not work
      from: "admin@younifind.ca",
      to: [String(recipientproper)],
      subject: String(subjectproper),
      react: emailTemplate,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
