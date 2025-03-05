"use client";
import Link from "next/link";
import React, { useState } from "react";


function Home() {


  return (
    <>
      <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3">
        <div className="flex flex-row pt-1 scale-75">
          <button className="font-bold text-s mr-2" variant="ghost" asChild>
            <Link href="/" className="line-clamp-4">
              SKINSTRIC
            </Link>
          </button>
          <p className="text-muted-foreground pt-[7.5px] font-semibold text-sm ml-1">
            INTRO
          </p>
        </div>

      </div>
      
      <div className="pointer-events-none fixed -z-[1] w-full h-full flex md:hidden justify-center items-center">
        <div className="opacity-50">
          <svg 
            fill="#333" 
            height="55px"
            width="55px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 472.615 472.615"
            xml:space="0 0 472.615 472.615"
          >
            <path
              d="M236.308,0C105.799,0,0,105.798,0,236.308c0,130.507,105.799,236.308,236.308,236.308s236.308-105.801,236.308-236.308 C472.615,105.798,366.816,0,236.308,0z M139.346,347.733V124.88l229.37,111.428L139.346,347.733z"></path>
          </svg>
        </div>

      </div>


      <div
        className={`
              relative z-10 text-center transition-transform duration-700 ease-in-out`}
      >
        <h1 className="text-[60px] lg:text-[100px] font-inter font-normal tracking-tighter leading-none">
          Sophisticated
          <br />
          <span
            className={`
                  block transition-transform duration-700 ease-in-out`}
          >
            skincare
          </span>
        </h1>
      </div>

      <p className=" z-10 block w-[30ch] mt-4 text-[16px] font-semibold text-center text-muted-foreground">
        SKINTRIC DEVELOPED AN A.I. THAT CREATES
        <br/> A HIGHLY PERSONALIZED ROUTINE TAILORED TO 
        <br/> WHAT YOUR SKIN NEEDS.
      </p>

      <div
          className={`
            hidden lg:block absolute top-1/2 right-[-350px] -translate-y-1/2 w-[500px] h-[500px]
            transition-opacity duration-500 ease-in-out
          `}
        >

<div
          className={`
            hidden lg:block absolute top-1/2 left-[-350px] -translate-y-1/2 w-[500px] h-[500px]
            transition-opacity duration-500 ease-in-out
          `}
        >
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0"
              size="w-full h-full"
              dotted
              borderColorClass="border-black"
            />
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 px-3 py-1"
              variant="ghost"
            >
              Discover A.I.
              <div
                className="rotate-45"
                size="w-[30px] h-[30px]"
                dotted={false}
              />
              <span className="absolute left-[115px] scale-[0.6]">
                &#x25B6;
              </span>
            </button>
          </div>
        </div>


          <div className="relative w-full h-full">
            <div
              className="absolute inset-0"
              size="w-full h-full"
              dotted
              borderColorClass="border-black"
            />
            <Link href="/testing" passHref>
              <button
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 px-3 py-1"
                variant="ghost"
              >
                <div
                  className="rotate-45"
                  size="w-[30px] h-[30px]"
                  dotted={false}
                />
                <span className="absolute left-[20px] scale-[0.6] rotate-180">
                  &#x25B6;
                </span>
                Take the Test
              </button>
            </Link>
          </div>
        </div>
    </>
  );
}

export default Home;
