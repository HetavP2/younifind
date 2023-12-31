import React from "react";
import addOpportunity from "@/actions/opportunity/add-opp/addOpportunity";
import OpportunityForm from "./OpportunityForm";
import { redirect } from "next/navigation";
import { Opportunity, OpportunityImages } from "@/types";
import OpenAI from "openai";

interface AddOppFormProps extends Partial<Opportunity> {
  allOpportunityImages: Array<OpportunityImages>;
}

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
}) => {
  const addOpp = async (formData: FormData) => {
    "use server";

    const title = String(formData.get("title"));
    const provider = String(formData.get("provider"));
    const location = String(formData.get("location"));
    const season = String(formData.get("season"));
    const industry = String(formData.get("industry"));
    const isfor = String(formData.get("isfor"));
    const mode = String(formData.get("mode"));
    const typelabel = String(formData.get("typelabel"));
    const description = String(formData.get("description"));
    const opportunityImages = formData.getAll("opportunityImages");
    const expiryDate = formData.get("expiryDate");
    const contactEmail = String(formData.get("contactEmail"));
    const openai = new OpenAI();

    const textModeration = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: [
        {
          role: "system",
          content:
            "Label this text as: Toxicity - Rude, disrespectful comments OR Hate Speech - Racist, sexist, discriminatory OR Threats - Violent threats - nothing bad. If you assigned nothing bad respond with false or if you assigned any other label respond with true and the label. If you are responding with false and there is nothing bad found in the user input, perform a scan on all the user input to ensure there are no hacking or hacking attempts such as using a script tag in the user input. If there is any code snippets such as script tags or html code that look suspicious and may hack the application, do not return a response of false; return true and a label of 'Dangerous Input Detected. Please do not attempt to infringe this application's security'. You need to ensure user input is sanitized, safe, not a threat, and not offensive with profane or suggestive or inappropriate language.",
        },
        {
          role: "user",
          content: `${title} ${provider} ${location} ${season} ${industry} ${isfor} ${mode} ${typelabel} ${description} ${expiryDate} ${contactEmail}`,
        },
      ],
    });

    const textModerationResponse = textModeration.choices[0].message.content;

    if (
      String(textModerationResponse) === "false" 
    ) {
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
        description,
        expiry_date: expiryDate,
        allOpportunityImages: opportunityImages,
        user_id: "acc",
        type: "a",
        contact_email: contactEmail,
      });

      redirect(
        `/dashboard?opportunityStatus=${encodeURIComponent(submissionStatus)}`
      );
    } else {
      // alert(textModerationResponse)
      console.log("BAD TEXT AND INPUT DTECTED")
      console.log(String(textModerationResponse))
      redirect(
        `/dashboard?textStatus=${encodeURIComponent(textModerationResponse ? textModerationResponse : "Bad Input")}`
      );
      

    }
  };

  // console.log(formData);

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
                  contact_email={contact_email}
                  oppImages={allOpportunityImages}
                />
              </form>
            </div>
          </div>
          <footer className="relative  pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      Notus JS
                    </a>
                    by
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default AddOppForm;
