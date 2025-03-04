"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

function Home() {
  const pathname = usePathname();
  const [hoveredDiamond, setHoveredDiamond] = useState(null);

  const headingShift =
    hoveredDiamond === "left"
      ? "translate-x-[20rem]"
      : hoveredDiamond === "right"
      ? "-translate-x-[20rem]"
      : "translate-x-0";

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
        {pathname !== "/testing" &&
          pathname !== "/result" &&
          pathname !== "/select" &&
          pathname !== "/final" &&
          pathname !== "/scan" && (
            <button className="mx-4 scale-[0.8]">ENTER CODE</button>
          )}
      </div>
      
      <div className="border-dotted border-black rotate-45 absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2 w-[280px] h-[280px]">

      </div>


      <div
        className={`
              relative z-10 text-center transition-transform duration-700 ease-in-out ${headingShift}
            `}
      >
        <h1 className="text-[60px] lg:text-[100px] font-inter font-normal tracking-tighter leading-none">
          Sophisticated
          <br />
          <span
            className={`
                  block transition-transform duration-700 ease-in-out
                  ${
                    hoveredDiamond === "left"
                      ? "translate-x-[6rem]"
                      : hoveredDiamond === "right"
                      ? "-translate-x-[6rem]"
                      : "translate-x-0"
                  }
                `}
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
            ${
              hoveredDiamond === "left"
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }
          `}
        >

<div
          className={`
            hidden lg:block absolute top-1/2 left-[-350px] -translate-y-1/2 w-[500px] h-[500px]
            transition-opacity duration-500 ease-in-out
            ${
              hoveredDiamond === "right"
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }
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
              onMouseEnter={() => setHoveredDiamond("left")}
              onMouseLeave={() => setHoveredDiamond(null)}
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
                onMouseEnter={() => setHoveredDiamond("right")}
                onMouseLeave={() => setHoveredDiamond(null)}
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
