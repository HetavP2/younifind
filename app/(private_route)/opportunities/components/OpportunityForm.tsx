"use client";

import React, { useState } from "react";
import OppInput from "./OppInput";
import OppTextarea from "@/components/OppTextarea";
import { Opportunity, OpportunityImages } from "@/types";
import ImageSelect from "./ImageSelect";


interface OpportunityFormProps extends Partial<Opportunity> {
  oppImages: Array<OpportunityImages>;
}

const OpportunityForm: React.FC<OpportunityFormProps> = ({
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
  oppImages,
}) => {
  const [oppData, setOppData] = useState<Opportunity>({
    id: "",
    user_id: "",
    provider: provider || "",
    location: location || "",
    season: season || "",
    industry: industry || "",
    isfor: isfor || "",
    mode: mode || "",
    typelabel: typelabel || "",
    description: description || "",
    title: title || "",
    expiry_date: String(expiry_date).slice(0, -9) || "",
    contact_email: contact_email || "",
    type: "",
  });

  

  return (
    <>
      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Opportunity Information
      </h6>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Title
            </label>
            <OppInput
              id="title"
              name="title"
              value={oppData.title}
              onChange={(e) => {
                setOppData({ ...oppData, title: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Organization
            </label>
            <OppInput
              id="provider"
              name="provider"
              value={oppData.provider}
              onChange={(e) =>
                setOppData({ ...oppData, provider: e.target.value })
              }
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Location
            </label>
            <OppInput
              id="location"
              name="location"
              value={oppData.location}
              onChange={(e) =>
                setOppData({ ...oppData, location: e.target.value })
              }
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Contact Email
            </label>
            <OppInput
              id="contactEmail"
              name="contactEmail"
              value={oppData.contact_email}
              onChange={(e) =>
                setOppData({ ...oppData, contact_email: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Description
            </label>
            <OppTextarea
              name="description"
              rows={4}
              value={oppData.description}
              onChange={(e) =>
                setOppData({ ...oppData, description: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Expiry date
            </label>
            <OppInput
              id="date"
              type="datetime-local"
              name="expiryDate"
              value={oppData.expiry_date}
              onChange={(e) =>
                setOppData({ ...oppData, expiry_date: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <hr className="mt-6 border-b-1 border-blueGray-300" />

      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Additional Details
      </h6>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label
              htmlFor="industry"
              className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
            >
              INDUSTRY:
            </label>

            <select
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
              name="industry"
              id="industry"
              required
              value={oppData.industry}
              onChange={(e) =>
                setOppData({ ...oppData, industry: e.target.value })
              }
            >
              <option value="">--Please choose an option--</option>
              <option value="Environmental Science">
                Environmental Science
              </option>
              <option value="Technology">Technology</option>
              <option value="Education">Education</option>
              <option value="Business">Business</option>
              <option value="Engineering">Engineering</option>
              <option value="Science">Science</option>
              <option value="Health Sciences">Health Sciences</option>
              <option value="Arts">Arts</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label
              htmlFor="pet-select"
              className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
            >
              TYPE OF OPPORTUNITY:
            </label>

            <select
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
              name="typelabel"
              id="pet-select"
              required
              value={oppData.typelabel}
              onChange={(e) =>
                setOppData({ ...oppData, typelabel: e.target.value })
              }
            >
              <option value="">--Please choose an option--</option>
              <option value="Work Opportunity">Work Opportunity</option>
              <option value="Credit Opportunity">Credit Opportunity</option>
            </select>
          </div>
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label
              htmlFor="pet-select"
              className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
            >
              SEASON:
            </label>

            <select
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
              name="season"
              id="pet-select"
              required
              value={oppData.season}
              onChange={(e) =>
                setOppData({ ...oppData, season: e.target.value })
              }
            >
              <option value="">--Please choose an option--</option>
              <option value="All Year">All Year</option>
              <option value="Winter">Winter</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Spring">Spring</option>
              <option value="Year-round">Year-round</option>
            </select>
          </div>
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label
              htmlFor="pet-select"
              className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
            >
              TARGET AUDIENCE:
            </label>

            <select
              value={oppData.isfor}
              onChange={(e) =>
                setOppData({ ...oppData, isfor: e.target.value })
              }
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
              name="isfor"
              id="pet-select"
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="Underrepresented Students">
                Underrepresented Students
              </option>
              <option value="All Students">All Students</option>
            </select>
          </div>
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <div className="relative w-full mb-3">
            <label
              htmlFor="pet-select"
              className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
            >
              IN-PERSON/VIRTUAL/HYBRID:
            </label>

            <select
              value={oppData.mode}
              onChange={(e) => setOppData({ ...oppData, mode: e.target.value })}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
              name="mode"
              id="pet-select"
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="Online">Online</option>
              <option value="In-person">In-person</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
            htmlFor="user_avatar"
          >
            Upload picture for the opportunity
          </label>
          <OppInput
            id="image"
            type="file"
            name="opportunityImages"
            required={false}
            multiple
          />
          {oppImages ? (
            <>
              <br />
              <br />{" "}
              <div className="flex">
                <ImageSelect oppImages={oppImages} />
              </div>
            </>
          ) : (
            <span></span>
          )}

          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          >
            Use pictures to help your opportunity get better recognized.
          </div>
        </div>
      </div>
      <br />
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="submit"
      >
        Done
      </button>
    </>
  );
};

export default OpportunityForm;
