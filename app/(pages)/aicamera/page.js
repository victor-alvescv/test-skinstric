"use client";
import React, { useEffect, useState } from "react";


function Aicamera () {
    const [cameraAccess, setCameraAccess] = useState(false);

    useEffect(() => {
        async function requestCameraAccess() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true
                });
                setCameraAccess(true);
                console.log("Camera access granted", stream);
            }   catch (error) {
                console.error("Camera access denied", error);
                setCameraAccess(false);
            }
        }
        requestCameraAccess();
    }, []);

  return (
    <body className="flex flex-col m-0">
        <main className="flex flex-col relative z-auto flex-1">
            <div className="loading__screen">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   {cameraAccess && (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="w-full h-full object-cover"
                    />
                   )                   }
                    <span className="dotted-square is-expanded is-animated --size: 19.7vw;">
                        {" "}
                    </span>
                    <div className="absolute left-1/2 top-1/2 max-w-[227px] text-center transform -translate-x-1/2 -translate-y-1/2 font-semibold">
                    {cameraAccess === false && "CAMERA ACCESS IS REQUIRED!"}
                    {cameraAccess === null && "SETTING UP CAMERA..."}
                    </div>

                </div>
        </div>
        </main>

    </body>
  )
}

export default Aicamera;