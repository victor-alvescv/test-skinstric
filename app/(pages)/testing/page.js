"use client";

import React, { useState } from "react";
import Link from "next/link";

function Testing() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex flex-col flex-auto">
        <nav className="items-center flex h-16 justify-between left-0 fixed top-0 w-full z-30 mx-auto max-w-[2560px] px-8">
          <div className="flex items-center relative z-30">
            <Link
              href="/"
              className="font-bold text-[10px]"
              style={{ fontSize: "clamp(10px, 2px + 0.625vw, 14px)" }}
            >
              SKINSTRIC
            </Link>
          </div>
          <div className="flex items-center relative z-30">
            <button className="consult__button">CONSULT CHEMIST</button>
          </div>
        </nav>

        <main className="relative flex flex-col flex-auto">
          <div className="flex flex-auto flex-col pb-9 relative mx-auto max-w-[2560px] px-8 w-full">
            <div className="absolute left-8 top-[86px] block overflow-hidden">
              <h1 className="font-semibold tracking-[-.06em] leading-24 text-base">
                TO START ANALYSIS
              </h1>
              <span className="max-w-[300px] block mt-custom-10 text-sm font-bold leading-24">
                WE USE COMPUTER VISION TO GREATLY
                <br />
                SPEED UP THE DIAGNOSTIC PROCESS.
              </span>
            </div>

            <div className="flex justify-around mb-auto mt-auto pb-16">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="fileInput"
              />

<button className="access__button">
                <span className="dotted-square is-expanded is-animated">
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[112px] flex justify-center items-center">
                    <svg
                      className="w-[136px] h-[136px] absolute  transform rotate-90"
                      viewBox="0 0 136 136"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                    >
                      <circle
                        cx="68.001"
                        cy="68"
                        r="57.786"
                        stroke="#1A1B1C"
                      ></circle>
                      <circle cx="68" cy="68" r="51"></circle>
                    </svg>
                    <img
                      src="/camera-shutter-svgrepo-com.svg"
                      className="w-[68px] h-[68px] relative z-10"
                      alt="Camera shutter"
                    />
                  </span>
                </span>
              </button>

              {/* Display Selected Image */}
              <button className="access__button"  onClick={() => document.getElementById("fileInput").click()}>             
                <span className="dotted-square is-expanded is-animated">
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[112px]">
                    <svg
                      className="w-[136px] h-[136px] relative -top-1 left-1 transform rotate-90"
                      viewBox="0 0 136 136"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                    >
                      <circle
                        cx="68.001"
                        cy="68"
                        r="57.786"
                        stroke="#1A1B1C"
                      ></circle>
                      <circle cx="68" cy="68" r="51" ></circle>
                      <path
                                d="M78.321 68c7.042 0 12.75-5.708 12.75-12.75S85.363 42.5 78.321 42.5c-7.041 0-12.75 5.708-12.75 12.75S71.28 68 78.321 68Z"
                                fill="#1A1B1C"
                              ></path>
                    </svg>
                  </span>
                </span>
              </button>
              {image && (
                <img
                  src={image}
                  alt="Selected"
                  className="w-20 h-20 object-cover"
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Testing;