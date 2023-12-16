"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import ResultCard from "./Result";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Select from "react-select";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [recRecords, setRecRecords] = useState<any[]>([]); // Change 'any' to the appropriate type if known

  // Filter State
  const [modeSelect, setModeSelect] = useState<string | null>(null);
  const [studentSelect, setStudentSelect] = useState<string | null>(null);
  const [typeSelect, setTypeSelect] = useState<string | null>(null);
  const [seasonSelect, setSeasonSelect] = useState<string | null>(null);
  const [fieldSelect, setFieldSelect] = useState<string | null>(null);

  const supabase = createClientComponentClient<Database>();

  // const supabase = createClient(
  //   "https://qbfbghtpknhobofhpxfr.supabase.co/" || "",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZmJnaHRwa25ob2JvZmhweGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMzY1NzksImV4cCI6MjAxNjcxMjU3OX0.uhq3d8nom2XEifLOzUbv7OQ8cTsUODz-upgymtfugMU" ||
  //     ""
  // );

  useEffect(() => {
    const getData = async () => {
      //     const supabaseAdmin = createClient(
      //       "https://dywothwzjruxdviwvsxt.supabase.co" || "",
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5d290aHd6anJ1eGR2aXd2c3h0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjY5NjYwNCwiZXhwIjoyMDEyMjcyNjA0fQ.z8UmvcTJJwYmsxdNNSENIeXCgPAx4k-s-0cyzp0_D9o" ||
      //         ""
      //     );

      //     const { data } = await supabaseAdmin
      //       .from("opportunities")
      //       .select("* WHERE APPROVAL TRUE")
      //       .order("id");
      //     console.log(data);
      //     setRecRecords(data || []);
      //   };

      try {
        const { data, error } = await supabase
          .from("opportunities")
          .select("*")
          .eq("approved", true)
          .order("id");

        if (error) {
          console.error("Error fetching data:", error);
          // Handle error state or notify the user
        } else {
          console.log("Fetched data:", data);
          setRecRecords(data || []); // Set empty array if data is null
        }
      } catch (error) {
        console.error("Error in fetching data:", error);
        // Handle error state or notify the user
      }
    };

    if (searchQuery === null) {
      console.log("search query does not exist");
      getData();
    }

    console.log("useffect is triggered");
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const modeSelectString =
      modeSelect && modeSelect != "Mode"
        ? `&mode=${encodeURIComponent(modeSelect)}`
        : ``;
    const studentSelectString =
      studentSelect && studentSelect != "Eligibility"
        ? `&isfor=${encodeURIComponent(studentSelect)}`
        : ``;
    const typeSelectString =
      typeSelect && typeSelect != "Type"
        ? `&type=${encodeURIComponent(typeSelect)}`
        : ``;

    const seasonSelectString =
      seasonSelect && seasonSelect != "Season"
        ? `&season=${encodeURIComponent(seasonSelect)}`
        : ``;

    const fieldSelectString =
      fieldSelect && fieldSelect != "Industry"
        ? `&field=${encodeURIComponent(fieldSelect)}`
        : ``;

    if (!searchQuery || searchQuery.trim() === "") {
      console.log("No search input.");
      alert("Please enter a search query.");
      setSearchQuery(null);
      return;
    }

    console.log(searchQuery);
    console.log(
      `/api/getRecords?query=${encodeURIComponent(searchQuery)}` +
        modeSelectString +
        studentSelectString +
        typeSelectString +
        seasonSelectString +
        fieldSelectString
    );
    const response = await fetch(
      `/api/getRecords?query=${encodeURIComponent(searchQuery)}` +
        modeSelectString +
        studentSelectString +
        typeSelectString +
        seasonSelectString +
        fieldSelectString
    );
    const data = await response.json();
    console.log(data.data);
    setRecRecords(data.data);
  };

  return (
    <>
      <div className="min-h-full flex bg-gradient-to-br from-royalblue via-royalblue to-white md:h-screen">
        <div className="FILTERS w-1/4 p-8">
          <div className="w-full flex flex-col gap-4 bg-white shadow-xl rounded-md p-2">
            <div className="w-full rounded-md bg-slate-100 p-2 ">
              <Image
                alt="logo chill"
                src="/images/younifind.png"
                width="180"
                height="180"
                className=" h-auto w-full"
              />
            </div>
            <div className="w-full flex flex-col gap-4 pb-4 justify-between items-center rounded-md">
              <select
                onChange={(e) => setModeSelect(e.target.value)}
                className="select p-2 select-bordered w-4/5 rounded-lg max-w-xs mx-1 border-4 border-royalblue"
              >
                <option selected>Mode</option>
                <option>In-person</option>
                <option>Online</option>
              </select>
              <select
                onChange={(e) => setStudentSelect(e.target.value)}
                className="select p-2 select-bordered w-4/5 rounded-lg max-w-xs mx-1 border-4 border-royalblue"
              >
                <option selected>Eligibility</option>
                <option>Underrepresented Students</option>
                <option>All Students</option>
              </select>
              <select
                onChange={(e) => setTypeSelect(e.target.value)}
                className="select p-2 select-bordered w-4/5 rounded-lg max-w-xs mx-1 border-4 border-royalblue"
              >
                <option selected>Type</option>
                <option>Work Opportunity</option>
                <option>Credit Opportunity</option>
              </select>
              <select
                onChange={(e) => setSeasonSelect(e.target.value)}
                className="select p-2 select-bordered w-4/5 rounded-lg max-w-xs mx-1 border-4 border-royalblue"
              >
                <option selected>Season</option>
                <option value="All Year">All Year</option>
                <option value="Winter">Winter</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Year-round">Year-round</option>
              </select>
              <select
                onChange={(e) => setFieldSelect(e.target.value)}
                className="select p-2 select-bordered w-4/5 rounded-lg max-w-xs mx-1 border-4 border-royalblue"
              >
                <option selected>Industry</option>
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
        </div>

        <main className="h-[700px]">
          <header className="">
            <div className="mx-auto max-w-7xl p-8">
              <div className="flex flex-row w-full gap-2 mb-4 bg-white shadow-xl p-4 rounded-md">
                <div className="flex self-stretch flex-1 p-3 border border-gray-200 rounded-md shadow-sm gap-x-4 lg:gap-x-6 focus-within:ring-0 focus-within:ring-offset-0 focus-within:border-indigo-300">
                  <form
                    className="relative flex flex-1 outline-none"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <BiSearch
                      className="absolute inset-y-0 left-0 w-5 h-full text-gray-400 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      id="search-field"
                      className="block w-full placeholder:text-royalblue font-medium h-full py-0 pl-8 pr-0 border-0 outline-none text-md"
                      placeholder="Find your next big thing."
                      onChange={(e) => setSearchQuery(e.target.value)}
                      type="search"
                    />
                  </form>
                </div>
                {/* // Insert filters here */}

                {/* // Insert filters here */}
                <button
                  onClick={handleSubmit}
                  className="py-1 text-black bg-gray-200 rounded-md px-4"
                >
                  Search
                </button>
              </div>
            </div>
          </header>
          <div className="mx-auto max-w-7xl bg-transparent overflow-y-scroll no-scrollbar h-2/3 sm:px-6 lg:px-8">
            <div className="">
              {/* Your content */}
              {recRecords?.map((record) => (
                <div className="my-4 rounded-md shadow-xl">
                  <a href={`/view/${record.id}`} target="_blank">
                    <ResultCard recordData={record} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SearchContainer;
