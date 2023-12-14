"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function DashboardAlerts() {
  const params = useSearchParams();

  let submissionStatus = params.get("opportunityStatus") || "";
  let firstLogin = params.get("firstLogin") || "";

  useEffect(() => {
    toast.success("opp added");
  }, []);

  return <></>;
}
