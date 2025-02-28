"use client";

import React, { useState } from "react";
import { useRouter } from  'next/navigation';
import Link from "next/link";

function Welcome() {
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
              className="font-semibold tracking-[-.06em] leading-none"
              style={{ fontSize: "clamp(40px, -24px + 5vw, 72px)" }}
            >
              WELCOME NAME
            </h1>
            <span className="max-w-[272px] block mt-custom-10">Pick one of the two options to 
              <br/>
              navigate our skincare platform.
            </span>

          </div>

          <div> 
            <div className="max-w-[448px] border border-black"> 

            </div>



          </div>


          

        </div>
      </main>
    </div>
  </>



  )
}

export default Welcome;