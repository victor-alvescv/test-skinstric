"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";


function Aicamera () {
    const [cameraAccess, setCameraAccess] = useState(false);
    const videoRef =useRef(null);

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

    const startCountdown = useCallback(() => {
        
    })

  return (
    <body className="flex flex-col m-0">
        <main className="flex flex-col relative z-auto flex-1">
            <div className="loading__screen">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   {cameraAccess && (
                    <>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="w-full h-full object-cover"
                    />
                    <button className="absolute right-6 top-1/2 flex items-center justify-center w-16 h-16 bg-white text-green-500 rounded-full shadow-lg">
                        <svg
                            className="w-[24px] h-[24px] relative -top-1 left-1 transform"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
                                fill="#1A1B1C"
                            ></path>
                            <circle cx="12" cy="13" r="3"></circle>
                        </svg>                    
                    </button>
                    </>
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