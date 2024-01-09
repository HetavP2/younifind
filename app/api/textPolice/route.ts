import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(request: Request) {
  const textData = await request.json();
  

  try {
    const textModeration = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "Label this text as: Toxicity - Rude, disrespectful comments OR Hate Speech - Racist, sexist, discriminatory OR Threats - Violent threats - nothing bad. If you assigned nothing bad respond with false (lowercase) or if you assigned any other label respond with true (lowercase) and the label. If you are responding with false (lowercase) and there is nothing bad found in the user input, perform a scan on all the user input to ensure there are no hacking or hacking attempts such as using a script tag in the user input. If there is any code snippets such as script tags or html code that look suspicious and may hack the application, do not return a response of false; return true (lowercase) and a label of 'Dangerous Input Detected. Please do not attempt to infringe this application's security'. You need to ensure user input is sanitized, safe, not a threat, and not offensive with profane or suggestive or inappropriate language.",
        },
        {
          role: "user",
          content: `${textData}`,
        },
      ],
    });

    const textModerationResponse = textModeration.choices[0].message.content;
    

    return NextResponse.json(textModerationResponse);
  } catch (error) {
    return NextResponse.json({ error });
  }


}
