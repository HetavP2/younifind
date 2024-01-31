"use server";
import { IgApiClient } from "instagram-private-api";
import { get } from "request-promise";

const postToInstagram = async (caption: string, image_prompt: string) => {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAIKEY}`,
    },
    method: "POST",
    body: JSON.stringify({
      model: "dall-e-3",
      prompt:
        "create an image post for environment conservation of planting trees. should contain only the following information in clear text (include no other words): The organization name is: treePlant.",
      n: 1,
      size: "1024x1792",
      // response_format: "url",
    }),
  });

  const imageDetails: any = await response.json();

  const image_url = String(imageDetails.data[0].url);
  console.log(imageDetails);

  const ig = new IgApiClient();
  // @ts-ignore
  ig.state.generateDevice(process.env.IG_USERNAME);
  // @ts-ignore
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  const imageBuffer = await get({
    url: image_url,
    encoding: null,
  });
  await ig.publish.photo({
    file: imageBuffer,
    caption: caption, // nice caption (optional)
  });
};

export default postToInstagram;
