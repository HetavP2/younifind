import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request, response: Response) {
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;
  const postData = await request.json();
  const { gRecaptchaToken } = postData;
  let res: any;
  const recaptchaURL = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?${recaptchaURL}`,
      //   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SEC_KEY}&response=${captcha}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        method: "POST",
      }
    );

    const captchaValidation: any = await res.json();

    const captchaValidationResponse = captchaValidation.success;
    
    return NextResponse.json(captchaValidationResponse);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
