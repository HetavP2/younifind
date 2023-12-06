"use client";

import React, { useEffect, useState } from "react";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam";
import { Dashboard } from "@uppy/react";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import { DashboardModal } from "@uppy/react";
import Tus from "@uppy/tus";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";

// export default function UppyInput() {
// 	// IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
// 	const [uppy] = useState(() => new Uppy().use(Webcam));

// 	return <Dashboard uppy={uppy} plugins={['Webcam']} />;
// }

// import React from 'react'

const UppyInput = ({ user, opportunityID }) => {
  // IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
  const bucketName = "opportunity-images";
  const token = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const projectId = "qbfbghtpknhobofhpxfr";
  const supabaseUploadURL = `https://${projectId}.supabase.co/storage/v1/upload/resumable`;

  const supabase = createClientComponentClient();

  const addToSupabase = async (fileName, filePath) => {
    const { error } = await supabase.from("opportunity_images").insert({
      opportunity_id: opportunityID,
      file_path: filePath,
      file_name: fileName,
    });

    return error;
  };

  // Uppy instance for cover photo upload
  var uppy = new Uppy({
    id: "avatar",
    autoProceed: false,
    debug: true,
    allowMultipleUploadBatches: true,
    restrictions: {
      maxFileSize: 6000000,
      maxNumberOfFiles: 1,
    },
  }).use(Tus, {
    endpoint: supabaseUploadURL,
    headers: {
      authorization: `Bearer ${token}`,
    },
    chunkSize: 6 * 1024 * 1024,
    allowedMetaFields: [
      "bucketName",
      "objectName",
      "contentType",
      "cacheControl",
    ],
  });

  uppy.on("file-added", async (file) => {
    const random_uuid = crypto.randomUUID();
    const addToSupabaseResponse = await addToSupabase(
      file.name,
      `user-${user.id}/oppImg-${random_uuid}`
    );

    console.log(addToSupabaseResponse);

    file.meta = {
      ...file.meta,
      bucketName: "opportunity-images",
      //   objectName: `user-${user.id}/oppImg-${random_uuid}`,
      objectName: `testFolder/test`,
      contentType: file.type,
    };
  });

  return <Dashboard uppy={uppy} />;
};

export default UppyInput;
