"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

import React from "react";
import Image from "next/image";

interface DashboardSidebarProps {
  children: React.ReactNode;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        // path is active everytime its not search
        icon: HiHome,
        label: "Add Opportunity",
        active: pathname === "/opportunities/new",
        href: "/opportunities/new",
        className:
          "bg-white p-1 px-7 w-full rounded-md text-royalblue flex jusitfy-start items-center space-x-6  focus:outline-none  rounded",
      },
      {
        // path is active everytime its not search
        icon: HiHome,
        label: "Dashboard",
        active: pathname === "/dashboard",
        href: "/dashboard",
        className:
          "flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded",
      },
      //these are all the pathnames
      {
        icon: BiSearch,
        label: "Opportunities",
        active: pathname === "https://search-peel-demo.vercel.app/",
        href: "https://search-peel-demo.vercel.app/",
        className:
          "flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded",
      },
    ],
    [pathname]
  );
  return (
    <div className="border-b">
      <div className="py-8 h-screen flex justify-start items-center w-full md:w-1/5 bg-royalblue flex-col">
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

        <div className="mt-6 text-md font-medium flex bg-red-500 flex-col justify-start items-center w-3/4 border-gray-600  space-y-3 pb-5 ">
          <ul>
            {routes.map((item) => {
              return (
                <li className="my-6" key={item.label}>
                  {item.icon}
                  <Link className={item.className} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <div className="mt-12 w-1/3 self-start">{children}</div>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
