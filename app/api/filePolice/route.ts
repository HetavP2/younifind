import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();
export const runtime = "edge";
export async function POST(request: Request) {
  const fileData = await request.json();

  const { localFilePath } = fileData;

  try {
    const fileModeration = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAIKEY}`,
        },
        method: "POST",
        body: JSON.stringify({
          model: "gpt-4-vision-preview",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "You are a content moderator. If there is any NSFW content, violence, weapons, racism, toxicity, sexist or any other harmful content in the image, please reply with only 'true' (has to be in lowercase). If there is no harmful content and the image does not contain any inappropriate content, please only reply with 'false' (has to be in lowercase).",
                },
                {
                  type: "image_url",
                  image_url: localFilePath,
                },
              ],
            },
          ],
        }),
      }
    );

    const fileModerationRes: any = await fileModeration.json();

    const fileModerationResponse = fileModerationRes.choices[0].message.content;

    return NextResponse.json(fileModerationResponse);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
