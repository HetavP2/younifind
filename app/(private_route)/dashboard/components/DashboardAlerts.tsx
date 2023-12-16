"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function DashboardAlerts() {
  const params = useSearchParams();

  let submissionStatus = params.get("opportunityStatus") || "";
  let firstLogin = params.get("firstLogin") || "";

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (firstLogin === "true") {
        toast.success("Logged In");
      } else if (submissionStatus === "SuccessfullyAddedAnOpportunity") {
        toast.success("Successfully Added An Opportunity");
      }
    }
  }, []);

  return <></>;
}
