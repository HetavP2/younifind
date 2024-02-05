import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-royalblue text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Opportunity Not Found
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-400 mb-8">
          Sorry, we couldn&apos;t find the opportunity you&apos;re looking for.
        </p>
        <a
          href="/"
          className="inline-block bg-royalyellow text-royalblue hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-3 text-center focus:ring-primary-900"
        >
          Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
