"use client";

import React, { useState } from "react";
import { useRouter } from  'next/navigation';
import Link from "next/link";

function Testing() {
  return (


    <>
    <div className="flex flex-col flex-auto">
      <nav className="items-center flex h-16 justify-between left-0 fixed top-0 w-full z-30 mx-auto max-w-[2560px] px-8">
        <div className="flex items-center relative z-30 ">
          <Link
            href="/"
            className="font-bold text-[10px]"
            style={{ fontSize: "clamp(10px, 2px + 0.625vw, 14px)" }}
          >
            SKINSTRIC
          </Link>
        </div>
        <div className="flex items-center relative z-30 ">
          <button className="consult__button">CONSULT CHEMIST</button>
        </div>
      </nav>
      <main className="relative flex flex-col flex-auto">
        <div className="flex flex-auto flex-col pb-9 relative mx-auto max-w-[2560px] px-8 w-full">
          <div className="absolute left-8 top-[86px] block overflow-hidden">
            <h1
              className="font-semibold tracking-[-.06em] leading-24 text-base"
   
            >
              TO START ANALYSIS
            </h1>
            <span className="max-w-[300px] block mt-custom-10 text-sm font-bold leading-24">WE USE COMPUTER VISION TO GREATLY 
              <br/>
              SPEED UP THE DIAGNOSTIC PROCESS.
            </span>

          </div>

          <div className="flex justify-around mb-auto mt-auto pb-16"> 
              <button className="access__button ">
                  <span className="dotted-square is-expanded is-animated">
                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[112px]">
                          <svg
                              className="w-[136px] h-[136px] relative -top-1 left-1 transform rotate-90"
                              viewBox="0 0 136 136"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                          >
                              <circle cx="68.001" cy="68" r="57.786" stroke="#1A1B1C"></circle>
                              <circle cx="68" cy="68" r="51"></circle>
                              <img src="../assets" ></img>
                          </svg>

                      </span>
                  </span>                
              </button>

              <button className="access__button ">
                  <span className="dotted-square is-expanded is-animated">
                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[112px]">
                          <svg
                              className="w-[136px] h-[136px] relative -top-1 left-1 transform rotate-90"
                              viewBox="0 0 136 136"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              role="img"
                          >
                              <circle cx="68.001" cy="68" r="57.786" stroke="#1A1B1C"></circle>
                              <circle cx="68" cy="68" r="51" ></circle>
                              <path
                                d="M78.321 68c7.042 0 12.75-5.708 12.75-12.75S85.363 42.5 78.321 42.5c-7.041 0-12.75 5.708-12.75 12.75S71.28 68 78.321 68Z"
                                fill="#1A1B1C"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17 68c0 3.96.451 7.815 1.306 11.516C23.526 102.136 43.794 119 68 119c26.867 0 48.882-20.776 50.856-47.138A51.96 51.96 0 0 0 119 68c0-28.166-22.834-51-51-51S17 39.834 17 68Zm18.337-.274L19.382 78.77A49.962 49.962 0 0 1 18.215 68c0-27.496 22.29-49.786 49.786-49.786 27.496 0 49.786 22.29 49.786 49.786 0 1.541-.07 3.066-.207 4.572l-34.634 19.24a7.286 7.286 0 0 1-7.91-.54l-31.18-23.385a7.286 7.286 0 0 0-8.518-.161Z"
                              fill="#1A1B1C"
                              ></path>
                          </svg>

                      </span>
                  </span>                
              </button>





          </div>


          

        </div>

        <div>

        </div>
      </main>
    </div>
  </>



  )
}

export default Testing;