import React from "react";
import SearchContainer from "./components/SearchContainer";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AuthSystem from "@/components/AuthSystem";

// import Example from "@/components/Container";
// import { Fragment, useEffect, useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

// import ResultCard from "@/components/Result";

export const metadata: Metadata = {
  title: "Find Your Next Big Thing",
  description:
    "An endless catalogue of extracurricular activies for high school students across the Greater Toronto Area and more. Regardless of the field there is an opportunity for all students juniors or seniors.",
  alternates: {
    canonical: `/search`,
    languages: {
      "en-CA": `en-CA/search`,
    },
  },
};

const page = () => {
  return (
    <div>
      <Navbar>
        <AuthSystem className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" />
      </Navbar>
      <SearchContainer />
    </div>
  );
};

export default page;
