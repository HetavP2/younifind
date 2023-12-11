'use client';


import React from 'react';
import OppInput from './OppInput';
import OppTextarea from '@/components/OppTextarea';


export default function AddOpportunityForm() {
  return (
    <>
    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Opportunity Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Title
                      </label>
                      <OppInput id="title" name="title" />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Organization
                      </label>
                      <OppInput id="provider" name="provider" />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Location
                      </label>
                      <OppInput id="location" name="location" />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Contact Email
                      </label>
                      <OppInput id="contactEmail" name="contactEmail" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Description
                      </label>
                      <OppTextarea name="description" rows={4} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Expiry date
                      </label>
                      <OppInput id="date" type="date" name="expiryDate" />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Additional Details
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="industry"
                        className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
                      >
                        INDUSTRY:
                      </label>

                      <select
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
                        name="industry"
                        id="industry"
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="Environmental Science">
                          Environmental Science
                        </option>
                        <option value="Technology">Technology</option>
                        <option value="Education">Education</option>
                        <option value="Business">Business</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Science">Science</option>
                        <option value="Health Sciences">Health Sciences</option>
                        <option value="Arts">Arts</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Finance</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="pet-select"
                        className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
                      >
                        TYPE OF OPPORTUNITY:
                      </label>

                      <select
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
                        name="typelabel"
                        id="pet-select"
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="Work Opportunity">
                          Work Opportunity
                        </option>
                        <option value="Credit Opportunity">
                          Credit Opportunity
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="pet-select"
                        className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
                      >
                        SEASON:
                      </label>

                      <select
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
                        name="season"
                        id="pet-select"
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="All Year">All Year</option>
                        <option value="Winter">Winter</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        <option value="Spring">Spring</option>
                        <option value="Year-round">Year-round</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="pet-select"
                        className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
                      >
                        TARGET AUDIENCE:
                      </label>

                      <select
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
                        name="isfor"
                        id="pet-select"
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="Underrepresented Students">
                          Underrepresented Students
                        </option>
                        <option value="All Students">All Students</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        htmlFor="pet-select"
                        className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
                      >
                        IN-PERSON/VIRTUAL/HYBRID:
                      </label>

                      <select
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600
                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear
                                    transition-all duration-150"
                        name="mode"
                        id="pet-select"
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="Online">Online</option>
                        <option value="In-person">In-person</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold
                                    mb-2"
                      htmlFor="user_avatar"
                    >
                      Upload picture for the opportunity
                    </label>
                    <OppInput
                      id="image"
                      type="file"
                      name="opportunityImages"
                      multiple
                    />

                    <div
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="user_avatar_help"
                    >
                      Use pictures to help your opportunity get better
                      recognized.
                    </div>
                  </div>
                </div>
                <br />
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Add
                </button>
                </>
  );
}