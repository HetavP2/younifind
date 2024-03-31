"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";
import ResultCard from "./Result";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import getSearchOpps from "@/actions/opportunity/get-opps/getSearchOpps";
import { useInView } from "react-intersection-observer";
import getLengthApprovedOpportunities from "@/actions/opportunity/get-opps/getLengthOfApprovedOpps";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [recRecords, setRecRecords] = useState<any[]>([]); // Change 'any' to the appropriate type if known
  // const { ref, inView } = useInView();

  // Filter State
  const [allOppsLen, setAllOppsLen] = useState(0);
  const [stopLoading, setStopLoading] = useState(false);

  const [modeSelect, setModeSelect] = useState<string | null>(null);
  const [studentSelect, setStudentSelect] = useState<string | null>(null);
  const [typeSelect, setTypeSelect] = useState<string | null>(null);
  const [seasonSelect, setSeasonSelect] = useState<string | null>(null);
  const [fieldSelect, setFieldSelect] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(0);
  const supabase = createClientComponentClient<Database>();

  const getFromAndTo = () => {
    const ITEM_PER_PAGE = 20;
    let from = page * ITEM_PER_PAGE;
    let to = from + ITEM_PER_PAGE;

    if (page > 0) {
      from += 1;
    }

    return { from, to };
  };

  const fetchData = async () => {
    setLoading(true);
    setAllOppsLen(await getLengthApprovedOpportunities());
    const { from, to } = getFromAndTo();

    const allOpportunitiesToDisplay = await getSearchOpps(from, to);
    // setRecRecords(allOpportunitiesToDisplay);
    setRecRecords((crecRecords) => {
      // Create a set to store unique IDs of existing records
      const existingRecordIds = new Set(crecRecords.map((record) => record.id));

      // Filter out duplicates from allOpportunitiesToDisplay
      const newOpportunities = allOpportunitiesToDisplay.filter(
        (record) => !existingRecordIds.has(record.id)
      );

      // Concatenate the existing records with the new ones
      return [...crecRecords, ...newOpportunities];
    });

    setPage(page + 1);
    if (to >= allOppsLen) {
      setStopLoading(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // if (inView) {
    //   fetchData();
    // }

    if (searchQuery === null) {
      console.log("search query does not exist");
      fetchData();
    }
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
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <>
      <div className=" ">
        <div className="flex h-full  bg-gray-900">
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
                  <option value="STEM">STEM</option>
                </select>
              </div>
            </div>
          </div>

          <main className="h-[800px] ">
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


            <div className="mx-auto max-w-7xl bg-transparent overflow-y-scroll h-[550px] no-scrollbar sm:px-6 lg:px-8">
              <div className="">
                {/* Your content */}

                {recRecords ? (
                  recRecords?.map((record) => (
                    <div className="my-4 rounded-md shadow-xl" key={record.id}>
                      <a href={`/opportunities/o/${record.id}`} target="_blank">
                        <ResultCard recordData={record} />
                      </a>
                    </div>
                  ))
                ) : (
                  <div>No results found.</div>
                )}
                  {loading && (
                    <div
                      className="flex flex-col justify-center items-center h-full w-full"
                    >
                      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
                      <p className="text-white text-2xl text-center my-4 font-semibold">
                        Loading Data...
                      </p>
                    </div>
                  )}
                {/* <div
                  ref={ref}
                  className="flex flex-col justify-center items-center h-full w-full"
                  >
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
                  <p className="text-white text-2xl text-center my-4 font-semibold">
                  Loading Data...
                  </p>
                </div> */}
              </div>
            </div>
                {(stopLoading) && (
                  <button onClick={fetchData}>Load More</button>
                  )}
          </main>
        </div>
      </div>
    </>
  );
};

export default SearchContainer;
