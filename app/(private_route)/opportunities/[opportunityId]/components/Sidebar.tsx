import React from "react";

const Sidebar = () => {
  return (
    <aside className=" bg-royalblue">
      <div className="md:pl-6 lg:pl-10">
        {/* Sidebar content */}
        <div className="space-y-6">
          {/* Search form */}
          <form>
            <div className="flex flex-wrap">
              <div className="w-full">
                <h1 className="text-left text-slate-200 text-md font-bold ">
                  Slingshot Community Resources :
                </h1>
              </div>
            </div>
          </form>

          {/* New Discussions */}
          {/* <div>
            <ul className="space-y-3">
              {items?.map((item) => (
                <a
                  target="_blank"
                  href={item?.fields?.Link}
                  className="font-semibold text-slate-500 hover:text-orange text-sm flex items-center"
                >
                  {item?.fields?.Name}{" "}
                  <TbExternalLink className="inline text-lg ml-1" />{" "}
                </a>
              ))}
            </ul>
          </div> */}

          {/* Latest Startups */}
          {/* <div>
            <div className="text-xs uppercase text-slate-600 font-bold mb-4">
              Latest Startups & Projects
            </div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image
                      className="shrink-0 mr-3"
                      src={Startup01}
                      width="32"
                      height="32"
                      alt="Startup 01"
                    />
                    <h3 className="truncate text-sm">
                      <a className="text-blue font-semibold hover:text-[#ff8553] transition duration-150 ease-in-out">
                        Camb AI
                      </a>
                    </h3>
                  </div>
                  <a
                    href="https://www.CAMB.AI"
                    target="_blank"
                    className="cursor-point text-xs text-white inline-flex font-medium rounded-full text-center px-2 py-0.5 bg-orange hover:bg-[#339d9e] transition duration-150 ease-in-out"
                  >
                    View Profile
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image
                      className="shrink-0 mr-3"
                      src={Startup02}
                      width="32"
                      height="32"
                      alt="Startup 02"
                    />
                    <h3 className="truncate text-sm">
                      <a className="text-blue font-semibold hover:text-[#ff8553] transition duration-150 ease-in-out">
                        GitHired
                      </a>
                    </h3>
                  </div>
                  <a
                    href="https://www.githired.io"
                    target="_blank"
                    className="cursor-point text-xs text-white inline-flex font-medium rounded-full text-center px-2 py-0.5 bg-orange hover:bg-[#339d9e] transition duration-150 ease-in-out"
                  >
                    View Profile
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image
                      className="shrink-0 mr-3"
                      src={Startup03}
                      width="32"
                      height="32"
                      alt="Startup 03"
                    />
                    <h3 className="truncate text-sm">
                      <a className="text-blue font-semibold hover:text-[#ff8553] transition duration-150 ease-in-out">
                        Pureblock
                      </a>
                    </h3>
                  </div>
                  <a
                    href="https://www.pureblock.app/"
                    target="_blank"
                    className="cursor-pointer text-xs text-white inline-flex font-medium rounded-full text-center px-2 py-0.5 bg-orange hover:bg-[#339d9e] transition duration-150 ease-in-out"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            </ul>
          </div> */}

          {/* Popular Posts */}
          {/* <div>
            <div className="text-xs uppercase text-slate-600 font-semibold mb-4">
              Popular Posts
            </div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center mb-1">
                  <img
                    className="rounded-full mr-2"
                    src={User06}
                    width="16"
                    height="16"
                    alt="User 06"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      MaryLync77
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <a
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    to="/post"
                  >
                    How do you decide and keep focus on the{" "}
                    <em className="italic">"right"</em> things?
                  </a>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">22 Feb</span> ·{" "}
                  <span className="text-slate-500">14 Comments</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <img
                    className="rounded-full mr-2"
                    src={User09}
                    width="16"
                    height="16"
                    alt="User 09"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Zakaria_C
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <a
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    to="/post"
                  >
                    How do you approach building a team for your startup?
                  </a>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">22 Feb</span> ·{" "}
                  <span className="text-slate-500">44 Comments</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <img
                    className="rounded-full mr-2"
                    src={User01}
                    width="16"
                    height="16"
                    alt="User 01"
                  />
                  <div className="text-xs">
                    <a
                      className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      IndieMark
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <a
                    className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out"
                    to="/post"
                  >
                    The 5 big lessons I've learnt from Geeks and Experts
                  </a>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">20 Feb</span> ·{" "}
                  <span className="text-slate-500">19 Comments</span>
                </div>
              </li>
            </ul>
          </div> */}

          <iframe
            src="https://discord.com/widget?id=755809763035447306&theme=dark"
            width="280"
            height="450"
            allowTransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />

          {/* Newsletter */}
          <div className="">
            <div className="rounded-md relative px-0 p-5 bg-black">
              {/* <div
                className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px rounded-md"
                aria-hidden="true"
              /> */}
              <div className="font-semibold text-center text-white mb-3 rounded-md">
                Get the best of Slingshot, directly in your inbox.
              </div>
              {/* Form */}
              <div className="w-full rounded-md">
                <label className="block text-sm sr-only" htmlFor="newsletter">
                  Email
                </label>
                <a
                  target="_blank"
                  href={"https://airtable.com/shrsZersFLvmdoJxz"}
                >
                  <form className="relative flex items-center w-full mx-auto">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input py-1.5 w-full pr-10 rounded-md"
                      placeholder="Your email"
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <svg
                        className="w-3 h-3 fill-current text-black mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </form>
                </a>
                {/* Success message */}
                {/* <p className="mt-2 text-slate-200 text-center text-xs">Thanks for subscribing!</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
