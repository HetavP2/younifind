import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// type SendEmail = {
//   recipient: Array<string>;
//   subject: string;
//   operation: string;
//   content: any;
// };
export const runtime = "edge";
export async function GET(request: Request, context: any) {
  const url = new URL(request.url);

  const mode = url.searchParams.get("mode");
  const isfor = url.searchParams.get("isfor");
  const type = url.searchParams.get("type");
  const season = url.searchParams.get("season");
  const field = url.searchParams.get("field");
  const query = url.searchParams.get("query");
  console.log(mode, isfor, type, season, field, query);

  const supabase = createClient(
    "https://qbfbghtpknhobofhpxfr.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZmJnaHRwa25ob2JvZmhweGZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTEzNjU3OSwiZXhwIjoyMDE2NzEyNTc5fQ.eymQ9qmRDREZE3faHIN3ukCC6a68DpxSxej8BsIUDdg",
    {
      db: {
        schema: "public",
      },
    }
  );

  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAIKEY}`,
    },
    body: JSON.stringify({
      input: query,
      model: "text-embedding-ada-002",
    }),
  });
  const responseData = await response.json();
  const embedding = responseData.data[0].embedding;

  const { data } = await supabase
    .rpc("match_opportunities_two", {
      query_embedding: embedding,
      match_threshold: 0.2,
      match_count: 7,
    })
    .eq(mode ? "mode" : "", mode ? mode : "")
    .eq(isfor ? "isfor" : "", isfor ? isfor : "")
    .eq(type ? "type" : "", type ? type : "")
    .eq(season ? "season" : "", season ? season : "")
    .eq(field ? "industry" : "", field ? field : "");

  console.log(data);

  return NextResponse.json({
    data,
  });
}
