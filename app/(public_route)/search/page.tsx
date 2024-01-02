import React from "react";
import SearchContainer from "./components/SearchContainer";
import { Metadata } from "next";

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
  return <div>
    <SearchContainer />
  </div>;
};

export default page;
