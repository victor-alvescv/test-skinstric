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
                              <circle cx="68" cy="68" r="51" fill="#1A1B1C"></circle>
                              <path
                               d="M100.668 35.412C92.315 27.038 80.763 21.857 68 21.857a46.39 46.39 0 0 0-8.64.808c4.774 7.898 22.22 35.59 25.58 40.515.653.957 1.813-.944 8.838-14.487l6.89-13.281ZM25.088 51.004c5.493-13.858 17.506-24.422 32.253-27.91 1.746 2.619 5.081 7.793 8.726 13.555l9.26 14.642H48.886c-12.76 0-20.217-.083-23.798-.287ZM31.87 96.703A45.947 45.947 0 0 1 21.856 68c0-5.199.86-10.197 2.445-14.86h14.865c17.385 0 17.78.027 17.16 1.19-1.232 2.304-19.503 33.932-24.458 42.373ZM76.964 113.273c-2.9.57-5.897.87-8.964.87-13.808 0-26.2-6.066-34.656-15.678 1.827-4.06 6.585-12.533 14.828-26.454.775-1.31 1.56-2.23 1.745-2.045.185.184 6.687 10.554 14.45 23.042l12.597 20.265ZM111.529 83.348c-5.157 14.625-17.476 25.872-32.745 29.528-4.206-6.487-18.172-28.92-18.172-29.267 0-.143 12.07-.261 26.82-.261h24.097ZM101.902 36.697C109.5 44.922 114.143 55.919 114.143 68a46.11 46.11 0 0 1-2.199 14.115H96.597c-9.973 0-18.132-.15-18.132-.335 0-.38 19.972-38.764 23.437-45.083Z"
                              fill="current"
                              ></path>
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
                              <circle cx="68" cy="68" r="51" fill="#1A1B1C"></circle>
                              <path
                               d="M100.668 35.412C92.315 27.038 80.763 21.857 68 21.857a46.39 46.39 0 0 0-8.64.808c4.774 7.898 22.22 35.59 25.58 40.515.653.957 1.813-.944 8.838-14.487l6.89-13.281ZM25.088 51.004c5.493-13.858 17.506-24.422 32.253-27.91 1.746 2.619 5.081 7.793 8.726 13.555l9.26 14.642H48.886c-12.76 0-20.217-.083-23.798-.287ZM31.87 96.703A45.947 45.947 0 0 1 21.856 68c0-5.199.86-10.197 2.445-14.86h14.865c17.385 0 17.78.027 17.16 1.19-1.232 2.304-19.503 33.932-24.458 42.373ZM76.964 113.273c-2.9.57-5.897.87-8.964.87-13.808 0-26.2-6.066-34.656-15.678 1.827-4.06 6.585-12.533 14.828-26.454.775-1.31 1.56-2.23 1.745-2.045.185.184 6.687 10.554 14.45 23.042l12.597 20.265ZM111.529 83.348c-5.157 14.625-17.476 25.872-32.745 29.528-4.206-6.487-18.172-28.92-18.172-29.267 0-.143 12.07-.261 26.82-.261h24.097ZM101.902 36.697C109.5 44.922 114.143 55.919 114.143 68a46.11 46.11 0 0 1-2.199 14.115H96.597c-9.973 0-18.132-.15-18.132-.335 0-.38 19.972-38.764 23.437-45.083Z"
                              fill="current"
                              ></path>
                          </svg>

                      </span>
                  </span>                
              </button>





          </div>


          

        </div>
      </main>
    </div>
  </>



  )
}

export default Testing;