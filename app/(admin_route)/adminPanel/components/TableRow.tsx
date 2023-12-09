"use client";

import OppTextarea from "@/components/OppTextarea";
import { Opportunity } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface TableRowProps extends Opportunity {}

const TableRow: React.FC<TableRowProps> = ({
  id,
  title,
  user_id,
  description,
  industry,
  provider,
  season,
  isfor,
  type,
  location,
  mode,
  typelabel,
  approved,
  admin_notes,
  ...props
}) => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [adminNotes, setAdminNotes] = useState(admin_notes);

  const handleOnChange = async (checked: boolean) => {
    const { data, error } = await supabase
      .from("opportunities")
      .update({ approved: checked })
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      router.refresh();
    }
  };

  const handleOnChangeNotes = async (value: any) => {
    const { data, error } = await supabase
      .from("opportunities")
      .update({ admin_notes: value })
      .eq("id", id)
      .select();
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          {approved ? (
            <input
              id="checkbox-table-search-2"
              type="checkbox"
              onChange={(e) => handleOnChange(e.target.checked)}
              checked={true}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          ) : (
            <input
              id="checkbox-table-search-2"
              type="checkbox"
              onChange={(e) => handleOnChange(e.target.checked)}
              checked={false}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          )}
          <label htmlFor="checkbox-table-search-2" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="ps-3">
          <div className="text-base font-semibold">{title}</div>
          <div className="font-normal text-gray-500">{provider}</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <OppTextarea
          cols={500}
          onChange={(e) => {
            setAdminNotes(e.target.value);
            handleOnChangeNotes(e.target.value);
          }}
          value={adminNotes}
        />
      </td>
      <td className="px-6 py-4">{location}</td>
      <td className="px-6 py-4">{season}</td>
      <td className="px-6 py-4">{isfor}</td>
      <td className="px-6 py-4">{mode}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">Image</td>

      <td className="px-6 py-4">
        <div className="flex items-center">
          {approved ? (
            <>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
              Approved
            </>
          ) : (
            <>
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
              Approval Pending
            </>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Come back soon!
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
