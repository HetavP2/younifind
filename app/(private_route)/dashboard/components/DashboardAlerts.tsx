"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function DashboardAlerts() {
  const router = useRouter();
  const params = useSearchParams();

  let submissionStatus =
    decodeURIComponent(params.get("opportunityStatus") || "") || "";
  let firstLogin = decodeURIComponent(params.get("firstLogin") || "") || "";

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      if (firstLogin === "true") {
        toast.success("Logged In");
      } else if (submissionStatus === "SuccessfullyUpdatedAnOpportunity") {
        toast.success("Updated Opportunity");
      }
      router.replace("/dashboard");
    }
  }, [firstLogin, submissionStatus]);

  return <></>;
}
