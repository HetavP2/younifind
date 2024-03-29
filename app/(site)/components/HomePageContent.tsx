"use client";
import addWaitlistUser from "@/actions/waitlist/addWaitlistUser";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HomePageContent() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    const respo = await addWaitlistUser(email);
    setEmail("");
  };
  
  return (
    <div>
      <section className="bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-royalyellow">
              Explore futures, youni
              <b>
                <i>find</i>
              </b>{" "}
              your path.
            </h1>
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              Canada&apos;s first AI powered extracurricular search engine for
              youth.
            </p>
            <a
              href="/search"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-royalblue hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
            >
              Search Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#email"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border  rounded-lg  focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
            >
              Need Help?
            </a>

            {/* //// */}
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit} className="inline-block">
              <label htmlFor="email" className="sr-only">
                Subscribe to Waitlist
              </label>
              <div className="relative rounded-lg border border-royalblue bg-white overflow-hidden focus-within:border-royalblue">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-96 py-2 pl-3 pr-10 text-base placeholder-gray-400 focus:outline-none"
                  placeholder="Subscribe to Waitlist"
                  required
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 px-2 text-white bg-royalyellow hover:bg-yellow-700 focus:outline-none ml-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {/* //// */}
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/younifindheptahedral.png" alt="mockup" />
          </div>
        </div>
      </section>

      <section className="bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-white">
              Find an opportunity, you&apos;re passionate about.
            </h2>
            <p className=" font-medium sm:text-xl text-gray-400">
              Using <i>younifind Search</i>, discover meaningful hands-on
              opportunities that you&apos;re passionate about.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 bg-blue-900">
                <svg
                  className="w-5 h-5  lg:w-6 lg:h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              {/* put number 1 icon */}
              <h3 className="mb-2 text-xl font-bold text-[#e7dd7a]">
                Tailored.
              </h3>
              <p className=" font-medium text-gray-400">
                Connect to opportunities relevant to your interests and passions
                with keywords.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 bg-blue-900">
                <svg
                  className="w-5 h-5  lg:w-6 lg:h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#e7dd7a]">Secure.</h3>
              <p className=" font-medium text-gray-400">
                Don&apos;t worry. We don&apos;t store or track any of your
                activity. Users can use <i>younifind</i>, anonymously.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 bg-blue-900">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#e7dd7a]">
                Newsletter.
              </h3>
              <p className=" font-medium text-gray-400">
                Don&apos;t get left out! Subscribe to <i>younifind&apos;s</i>{" "}
                newsletter for opportunity alerts and updates.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 bg-blue-900">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#e7dd7a]">Free.</h3>
              <p className=" font-medium text-gray-400">
                Access all our features for free. No paywalls, no subscriptions
                or any fees.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 bg-blue-900">
                <svg
                  className="w-5 h-5  lg:w-6 lg:h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#e7dd7a]">Vetted.</h3>
              <p className=" font-medium text-gray-400">
                All available opportunities are vetted and verified by school
                administered staff. No scams or frauds.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 bg-blue-900">
                <svg
                  className="w-5 h-5  lg:w-6 lg:h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#e7dd7a]">
                Endless filters.
              </h3>
              <p className=" font-medium text-gray-400">
                Alongside keywords, use <i>younifind&apos;s</i> search filters
                to find the right opportunity for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light  sm:text-lg text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-white">
              We didn&apos;t reinvent the wheel
            </h2>
            <p className="mb-4 font-medium">
              We are 2 innovators who have simply seen the problem and executed.
              Through younifind we hope students can find meaningful
              extracurricular activities that can help them grow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section> */}

      <section className="bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-400">
            <h2 className="mb-4 text-4xl font-bold  text-white">
              Helping shape futures for youth, <br></br> one opportunity at a
              time.{" "}
            </h2>
            <p className="mb-4 font-medium">
              Our mission is simple. We connect high school students to hands-on
              extracurricular activities, that they&apos;re passionate about.
              For free.
            </p>
            <a
              href="/search"
              className="inline-flex items-center font-medium   text-blue-500 hover:text-blue-700"
            >
              Search Now
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Start your free trial today
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Try Flowbite Platform for 30 days. No credit card required.
            </p>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Free trial for 30 days
            </a>
          </div>
        </div>
      </section> */}

      <footer className="p-4  sm:p-6 bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com" className="flex items-center">
                {/* <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="mr-3 h-8"
                  alt="FlowBite Logo"
                /> */}
                <img width="200" src="/images/younifindwithbackground.png" />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span> */}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  {/* Resources */}
                </h2>
                <ul className=" text-gray-400">
                  <li className="mb-4">
                    <a href="/community" className="hover:underline">
                      {/* Community */}
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      Email
                    </a>
                  </li>
                </ul>
              </div> */}
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a
                      href="/privacy"
                      target="_blank"
                      className="hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/tos" target="_blank" className="hover:underline">
                      Terms Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm  sm:text-center text-gray-400">
              © 2024{" "}
              <a href="#" className="hover:underline">
                younifind
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.instagram.com/younifind"
                className="text-gray-500 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/younifind"
                className="text-gray-500 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                id="email"
                href="mailto:support@younifind.ca"
                className="text-gray-500 hover:text-white"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
