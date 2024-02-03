import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(request: Request) {
  const fileData = await request.json();

  const { localFilePath } = fileData;

  try {
    const fileModeration = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "You are a content moderator. If there is any NSFW content, violence, weapons, racism, toxicity, sexist or any other harmful content in the image, please reply with only 'true'. If there is no harmful content and the image does not contain any inappropriate content, please only reply with 'false'.",
            },
            {
              type: "image_url",
              image_url: localFilePath,
            },
          ],
        },
      ],
    });

    const fileModerationResponse = fileModeration.choices[0].message.content;
    // const fileModerationResponse = false;

    console.log(fileModerationResponse);

    return NextResponse.json(fileModerationResponse);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
