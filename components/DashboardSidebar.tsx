"use client";

import { HiOutlineHome } from "react-icons/hi";
import { BiGlasses, BiSearch } from "react-icons/bi";
import Link from "next/link";
import toast from "react-hot-toast";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
interface DashboardSidebarProps {
  children: React.ReactNode;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ children }) => {


  return (
    <div className="border-b w-1/4 max-w-1/4">
      <div className="py-16 h-screen flex justify-start items-center bg-royalblue flex-col">
        {/* // Title logo */}
        {/* <p className="text-2xl leading-6 text-white">younifind</p> */}
        <div className="p-1 rounded-lg bg-white mx-auto">
          <Image
            alt="logo chill"
            src="/images/younifind.png"
            width="180"
            height="180"
            className=" h-auto "
          />
        </div>

        {/* // Title logo */}

        <div className="mt-6 text-md font-medium flex flex-col justify-start items-center w-3/4 border-gray-600  space-y-3 pb-5 ">
          <ul>
            <li className="my-6" key="Add Opportunity">
              <Link
                className="bg-white py-2 px-6 w-full rounded-md text-royalblue flex jusitfy-start items-center space-x-6  focus:outline-none"
                href="/opportunities/new"
                target="_blank"
              >
                <HiOutlineHome className="text-xl mr-2" />
                Add Opportunity
              </Link>
            </li>

            <li className="my-6">
              <Link
                className="bg-white py-2 px-6 w-full rounded-md text-royalblue flex jusitfy-start items-center space-x-6  focus:outline-none"
                href="/dashboard"
              >
                <BiGlasses className="text-xl mr-2" />
                Dashboard
              </Link>
            </li>

            <li className="my-6">
              <Link
                className="bg-white py-2 px-6 w-full rounded-md text-royalblue flex jusitfy-start items-center space-x-6  focus:outline-none"
                href="https://search-peel-demo.vercel.app/"
                target="_blank"
              >
                <BiSearch className="text-xl mr-2" />
                Opportunities
              </Link>
            </li>

            <div className="mt-12 w-1/3 self-start">{children}</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
