import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

type FilePolice = {
  localFilePath: any;
};

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
              text: "You are a content moderator. Label this image as: Toxicity - Rude, disrespectful comments - Hate Speech - Racist, sexist, discriminatory OR Threats - Violent threats (contains weapons of any sorts including toy and replica guns, etc) - nothing bad. If you assigned nothing bad respond with false (lowercase) or if you assigned any other label respond with true (lowercase) and the label.",
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

    return NextResponse.json(fileModerationResponse);
  } catch (error) {
    return NextResponse.json({ error });
  }


}
