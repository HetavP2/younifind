import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(request: Request) {
  const textData = await request.json();
  

  try {
    const keywords = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "Generate 50+ keywords for the teenager extracurricular opportunity/job listing below:",
        },
        {
          role: "user",
          content: `${textData}`,
        },
      ],
    });

    const keywordsResponse = keywords.choices[0].message.content;
    

    return NextResponse.json(keywordsResponse);
  } catch (error) {
    return NextResponse.json({ error });
  }


}
