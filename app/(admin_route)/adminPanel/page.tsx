import getAllAdminOpportunities from "@/actions/opportunity/get-opps/getAllAdminOpportunities";
import TableRow from "./components/TableRow";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPanel() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const allOpportunities = await getAllAdminOpportunities();
  if (!session) {
    redirect("login");
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search htmlFor users"
          />
        </div>
      </div> */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              {/* <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div> */}
            </th>
            <th scope="col" className="px-6 py-3">
              Name & Author
            </th>
            <th scope="col" className="px-6 py-3">
              Notes
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Season
            </th>
            <th scope="col" className="px-6 py-3">
              Target Audience
            </th>
            <th scope="col" className="px-6 py-3">
              Mode
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Contact Email
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Action
            </th> */}
          </tr>
        </thead>
        <tbody>
          {allOpportunities.map((opportunity) => (
            <TableRow
              id={opportunity.id}
              key={opportunity.id}
              user_id={session.user.id}
              title={opportunity.title}
              description={opportunity.description}
              industry={opportunity.industry}
              provider={opportunity.provider}
              season={opportunity.season}
              isfor={opportunity.season}
              type={opportunity.type}
              location={opportunity.location}
              mode={opportunity.mode}
              typelabel={opportunity.typelabel}
              approved={opportunity.approved}
              expiry_date={opportunity.expiry_date}
              admin_notes={opportunity.admin_notes}
              contact_email={opportunity.contact_email}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
