import React from "react";
import addOpportunity from "@/actions/opportunity/add-opp/addOpportunity";
import OpportunityForm from "./OpportunityForm";
import { redirect } from "next/navigation";
import { Opportunity, OpportunityImages } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface AddOppFormProps extends Partial<Opportunity> {
  allOpportunityImages: Array<OpportunityImages>;
}
let recaptchaFailed: any;

const AddOppForm: React.FC<AddOppFormProps> = async ({
  id,
  provider,
  location,
  season,
  industry,
  isfor,
  mode,
  typelabel,
  description,
  title,
  expiry_date,
  contact_email,
  allOpportunityImages,
  website,
}) => {
  async function handleRecaptcha(recaptchaRes: any) {
    "use server";
    recaptchaFailed = recaptchaRes;
    return;
  }

  const addOpp = async (formData: FormData) => {
    "use server";

    const supabase = createServerComponentClient({
      cookies: cookies,
    });
    const {
      data: { user },
    } = await supabase.auth.getUser();

    let is_admin = false;

    const { data: adminInfo, error } = await supabase
      .from("admins")
      .select()
      .filter("admin_id", "in", `(${user?.id})`)
      .single();
    if (adminInfo !== null) {
      is_admin = true;
    }
    
    console.log("is_admin",is_admin)

    const title = String(formData.get("title"));
    const provider = String(formData.get("provider"));
    const location = String(formData.get("location"));
    const season = String(formData.get("season"));
    const industry = String(formData.get("industry"));
    const isfor = String(formData.get("isfor"));
    const mode = String(formData.get("mode"));
    const typelabel = String(formData.get("typelabel"));
    const description = String(formData.get("description"));
    const website = String(formData.get("website"));
    const opportunityImages = formData.getAll("opportunityImages");
    const expiryDate = formData.get("expiryDate");
    const contactEmail = String(formData.get("contactEmail"));

    let textModerationResponse;

    if (!is_admin) {

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAIKEY}`,
          },
          method: "POST",
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "Label this text as: Toxicity - Rude, disrespectful comments OR Hate Speech - Racist, sexist, discriminatory OR Threats - Violent threats - nothing bad. If you assigned nothing bad respond with false (lowercase) or if you assigned any other label respond with true (lowercase) and the label. If you are responding with false (lowercase) and there is nothing bad found in the user input, perform a scan on all the user input to ensure there are no hacking or hacking attempts such as using a script tag in the user input. If there is any code snippets such as script tags or html code that look suspicious and may hack the application, do not return a response of false; return true (lowercase) and a label of 'Dangerous Input Detected. Please do not attempt to infringe this application's security'. You need to ensure user input is sanitized, safe, not a threat, and not offensive with profane or suggestive or inappropriate language.",
              },
              {
                role: "user",
                content: `${title} ${provider} ${location} ${season} ${industry} ${isfor} ${mode} ${typelabel} ${description} ${expiryDate} ${contactEmail} ${website}`,
              },
            ],
          }),
        }
      );

    const textModeration: any = await response.json();

    textModerationResponse = textModeration.choices[0].message.content;
    } else {
      textModerationResponse = "false";
    }

    if (recaptchaFailed) {
      if (String(textModerationResponse) === "false") {
        const submissionStatus = await addOpportunity({
          id: id || "a",
          title,
          provider,
          location,
          season,
          industry,
          isfor,
          mode,
          typelabel,
          website,
          description,
          expiry_date: expiryDate,
          allOpportunityImages: opportunityImages,
          user_id: "acc",
          type: "a",
          contact_email: contactEmail,
        });
        //test
        redirect(
          `/dashboard?opportunityStatus=${encodeURIComponent(submissionStatus)}`
        );
      } else {
        // alert(textModerationResponse)
        console.log("BAD TEXT AND INPUT DTECTED");
        console.log(String(textModerationResponse));
        redirect(
          `/dashboard?textStatus=${encodeURIComponent(
            textModerationResponse ? textModerationResponse : "Bad Input"
          )}`
        );
      }
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Opportunity Details
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form action={addOpp}>
                <OpportunityForm
                  key={id}
                  title={title}
                  description={description}
                  industry={industry}
                  provider={provider}
                  season={season}
                  isfor={isfor}
                  location={location}
                  mode={mode}
                  typelabel={typelabel}
                  expiry_date={expiry_date}
                  website={website}
                  contact_email={contact_email}
                  oppImages={allOpportunityImages}
                  sendDataToParent={handleRecaptcha}
                />
              </form>
            </div>
          </div>
          <footer className="relative  pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default AddOppForm;
