import React from "react";
import addOpportunity from "@/actions/opportunity/add-opp/addOpportunity";
import OpportunityForm from "./OpportunityForm";
import { redirect } from "next/navigation";
import { Opportunity, OpportunityImages } from "@/types";
import Filter from 'bad-words';

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

    // const filter = new Filter();
    // const cleanText = filter.isProfane("Some bad here!");
    // console.log(formData);
    
    



    


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
