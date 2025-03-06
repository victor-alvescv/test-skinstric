"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

function Aicamera() {
  const [cameraAccess, setCameraAccess] = useState(null);
  const videoRef = useRef(null);
  const [countdown, setCountdown] = useState(3);



  useEffect(() => {
    async function requestCameraAccess() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setCameraAccess(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        console.log("Camera access granted", stream);
      } catch (error) {
        console.error("Camera access denied", error);
        setCameraAccess(false);
      }
    };

    requestCameraAccess();
  }, []);

  useEffect(() => {
    console.log(cameraAccess);
  }, [cameraAccess]);

  const startCountdown = () => {
    setIsTakingSnapshot(true);
    setCountdown(3);
    console.log("Starting countdown...");
  };

  useEffect(() => {
    if (countdown > 0) {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown -1);
        }, 1000);

        return () => clearInterval(timer);
    }
  }, [countdown])


  

  return (
    <div className="flex flex-col m-0">
      <main className="flex flex-col relative z-auto flex-1">
        <div className="loading__screen">
          <div className="absolute left-0 top-0 w-full h-full">
            {/* Video element to display camera feed */}

            {cameraAccess && (
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            )}

            <span
              className="dotted-square is-expanded is-animated"
              style={{ "--size": "19.7vw" }}
            >
              {" "}
            </span>

            <div className="absolute left-1/2 top-1/2 max-w-[227px] text-center transform -translate-x-1/2 -translate-y-1/2 font-semibold">
              {cameraAccess === false ? "CAMERA ACCESS IS REQUIRED!" : ""}
            </div>
          </div>

          {cameraAccess === true && (
            <>
              <button
                className="absolute right-6 top-1/2 flex items-center justify-center w-16 h-16 bg-white text-green-500 rounded-full shadow-lg"
                onClick={startCountdown}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
                    fill="#1A1B1C"
                  ></path>

                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </button>

              <span
                className="absolute right-6 flex items-center justify-center text-center w-16"
                style={{ top: "calc(50% + 80px)" }}
              >
                TAKE PICTURE
              </span>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Aicamera;
