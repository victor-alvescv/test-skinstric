"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";

function Demographics() {

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
          <button className="consult__button" disabled>CONSULT CHEMIST</button>
        </div>
      </nav>

      <main className="relative flex flex-col flex-auto">
        <div className="flex flex-auto flex-col pb-9 relative mx-auto max-w-[2560px] px-8 w-full">
          
          <div className="flex items-start flex-col absolute left-8 top-[86px] overflow-hidden">
            <h1 className="font-semibold tracking-[-.06em] leading-24 text-base">
              DEMOGRAPHICS
            </h1>
            <span className="max-w-[300px] block mt-custom-10 text-sm font-bold leading-24">
              PREDICTED RACE AND AGE
            </span>
          </div>

          <div className="flex flex-col flex-1 mt-10 pb-20">
              <div className="flex flex-1">
                    <div className="w-[10vw] flex shrink-0">
                        <ul className="list-none pl-0 m-0 p-0">
                            <li className="mb-2">
                                <button>
                                    <span>
                                        <span>
                                            South Asian
                                        </span>
                                        <span>
                                            Race
                                        </span>
                                    </span>
                                </button>

                            </li>

                        </ul>

                    </div>

              </div> 
          </div>
        </div>
        
      </main>
    </div>
  </>
    )
}
export default Demographics;