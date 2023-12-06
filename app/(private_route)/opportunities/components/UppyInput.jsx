"use client";

import React, { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import Webcam from '@uppy/webcam';
import { Dashboard } from '@uppy/react';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';

// export default function UppyInput() {
// 	// IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
// 	const [uppy] = useState(() => new Uppy().use(Webcam));

// 	return <Dashboard uppy={uppy} plugins={['Webcam']} />;
// }

// import React from 'react'

const UppyInput = () => {
	// IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
	const [uppy] = useState(() => new Uppy().use(Webcam));

	return (<Dashboard uppy={uppy} plugins={['Webcam']} />);

}

export default UppyInput