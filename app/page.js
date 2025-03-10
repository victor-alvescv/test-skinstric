"use client";

import React, { useState } from "react";
import Diamond from "../app/components/diamond";
import Link from "next/link";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";


const Home = () => {
  const [hoveredDiamond, setHoveredDiamond] = useState(null);

  const headingShift =
    hoveredDiamond === "left"
      ? "translate-x-[20rem]"
      : hoveredDiamond === "right"
      ? "-translate-x-[20rem]"
      : "translate-x-0";

  return (
    <>


      {/* Wrapper div for scaling on mobile */}
      <div className="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">

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
            </nav>


            <div
              className="
                flex flex-col items-center justify-center h-[71dvh]
                md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                
              "
            >
              {/* Mobile Diamonds */}
              <div className="absolute inset-0 flex items-center justify-center lg:hidden">
                <Diamond
                  className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2 w-[420px] h-[420px]"
                  dotted
                  borderColorClass="border-black"
                />
                <Diamond
                  className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-1/2 w-[280px] h-[280px]"
                  dotted
                  borderColorClass="border-black"
                />
              </div>

              {/* Heading (centered, shifts via transform) */}
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

              {/* Mobile text */}
              <p className=" z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-muted-foreground">
                Skinstric developed an A.I. that creates a highly-personalized
                routine tailored to what your skin needs.
              </p>

              {/* Mobile button */}
              <div className=" z-10 mt-4 lg:hidden">
                <Link href="/testing">
                  <button className="relative flex items-center gap-4">
                    <span className="text-[12px] font-bold">ENTER EXPERIENCE</span>
                    <Diamond
                      className="rotate-45"
                      size="w-[24px] h-[24px]"
                      dotted={false}
                    />
                    <span className="absolute left-[134px] scale-[0.5]">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-current text-black"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Desktop text */}
            <div
              className="
                hidden lg:block fixed bottom-10 left-10
                font-normal text-sm text-black space-y-3
              "
            >
              <p>
                Skinstric developed an A.I. that creates a
                <br />
                highly-personalized routine tailored to
                <br />
                what your skin needs.
              </p>
            </div>

            {/* LEFT Diamond */}
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
                <Diamond
                  className="absolute inset-0"
                  size="w-full h-full"
                  dotted
                  borderColorClass="border-black"
                />
                <button
                  onMouseEnter={() => setHoveredDiamond("left")}
                  onMouseLeave={() => setHoveredDiamond(null)}
                  className="flex gap-3 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 px-3 py-1"
                  variant="ghost"
                >                  
                  <GoTriangleLeft/>
                  <span className="pt-1">
                  Discover A.I.
                  </span>
                  <Diamond
                    className="rotate-45"
                    size="w-[30px] h-[30px]"
                    dotted={false}
                  />
                </button>
              </div>
            </div>

            {/* RIGHT Diamond */}
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
              <div className="relative w-full h-full">
                <Diamond
                  className="absolute inset-0"
                  size="w-full h-full"
                  dotted
                  borderColorClass="border-black"
                />
                <Link href="/testing" passHref>
                  <button
                    onMouseEnter={() => setHoveredDiamond("right")}
                    onMouseLeave={() => setHoveredDiamond(null)}
                    className="flex gap-3 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 px-3 py-1"
                    variant="ghost"
                  >
                    <Diamond
                      className="rotate-45"
                      size="w-[30px] h-[30px]"
                      dotted={false}
                    />
                    <span className="pt-1">
                    Take the Test
                    </span>
                    <GoTriangleRight />
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-6 max-w-full justify-items-center mx-auto w-full">


            </div>


      </div>
    </>
  );
};

export default Home;