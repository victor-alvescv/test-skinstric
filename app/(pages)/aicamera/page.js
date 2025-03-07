"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

function Aicamera() {
  const [cameraAccess, setCameraAccess] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [countdown, setCountdown] = useState(3);
  const [isTakingSnapshot, setIsTakingSnapshot] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    }

    requestCameraAccess();
  }, []);

  const startCountdown = () => {
    setIsTakingSnapshot(true);
    setCountdown(3);
    console.log("Starting countdown...");
  };

  useEffect(() => {
    if (isTakingSnapshot && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(timer);
            takeSnapshot();
            setIsTakingSnapshot(false);
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown, isTakingSnapshot]);

  const takeSnapshot = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const imageDataUrl = canvas.toDataURL("image/png");
    setImage(imageDataUrl);
    console.log("Snapshot taken!");

    sendImageToAPI(imageDataUrl);
  };

  const sendImageToAPI = async (base64String) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64String }),
        },
        3000
      );

      const data = await response.json();
      localStorage.setItem("analysisResult", JSON.stringify(data));
      setInterval(() => {
        router.push("/demographics");
      });
      console.log("API Response:", data);
    } catch (error) {
      console.error("Error sending image to API:", error);
    } finally {
      setLoading(false);
    }
  };

  if (cameraAccess === null) {
    // Initial screen asking for camera access
    return (
      <div className="flex flex-col m-0">
        <main className="flex flex-col relative z-auto flex-1">
          <div className="loading__screen">
            <div className="absolute">
              <span
                className="dotted-square is-expanded is-animated"
                style={{ "--size": "19.7vw" }}
              ></span>
              <div className="absolute left-1/2 top-1/2 max-w-[227px] text-center transform -translate-x-1/2 -translate-y-1/2 font-semibold">
                {"Requesting camera access..."}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (cameraAccess === false) {
    // Camera access denied screen
    return (
      <div className="flex flex-col m-0">
        <main className="flex flex-col relative z-auto flex-1">
          <div className="loading__screen">
            <div className="absolute">
              <span
                className="dotted-square is-expanded is-animated"
                style={{ "--size": "19.7vw" }}
              ></span>
              <div className="absolute left-1/2 top-1/2 max-w-[227px] text-center transform -translate-x-1/2 -translate-y-1/2 font-semibold">
                {"CAMERA ACCESS IS REQUIRED!"}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (cameraAccess === true) {
    // Camera access granted, show video feed and snapshot functionality
    return (
      <div className="flex flex-col m-0">
        <main className="flex flex-col relative z-auto flex-1">
          <div className="loading__screen">
            <div className="absolute">
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-screen  object-cover"
              />

              <button
                className="absolute right-6 top-1/2 flex items-center justify-center w-16 h-16 bg-white text-green-500 rounded-full shadow-lg"
                onClick={startCountdown}
                disabled={loading}
              >
                {loading ? "Uploading..." : "📸"}
              </button>

              <span
                className="absolute right-6 flex items-center justify-center text-center w-16"
                style={{ top: "calc(50% + 80px)" }}
              >
                TAKE PICTURE
              </span>

              {isTakingSnapshot && countdown > 0 && (
                <div className="absolute top-1/2 left-1/2 transform text-white -translate-x-1/2 -translate-y-1/2 font-bold text-2xl">
                  {countdown}
                </div>
              )}

              {image && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-white shadow-lg rounded-md">
                  <p className="text-center font-semibold">Snapshot:</p>
                  <img
                    src={image}
                    alt="Snapshot"
                    className="mt-2 w-40 h-auto"
                  />
                </div>
              )}
            </div>
          </div>
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </main>
      </div>
    );
  }

  return null;
}

export default Aicamera;