import Link from "next/link";
import React from "react";

function Introduction() {
  return (
    <>
      <div className="flex flex-col flex-auto">
        <nav className="items-center flex h-16 justify-between left-0 fixed top-0 w-full z-30 mx-auto max-w-[2560px] px-8">
          <div className="flex items-center relative z-30 ">
            <Link href="/" className="font-bold text-[10px]" style={{ fontSize: "clamp(10px,-2px + .9375vw,16px)" }}>
              SKINSTRIC
            </Link>
          </div>
        </nav>
        <main className="relative flex flex-col flex-auto">
          <div className="flex flex-auto flex-col pb-9 relative mx-auto max-w-[2560px] px-8 w-full">
            <div className="absolute left-8 top-[86px] block overflow-hidden">
              <h1
                className="font-semibold tracking-[-.02em] leading-5"
                style={{ fontSize: "clamp(10px,-2px + .9375vw,16px)" }}
              >
                TO START ANALYSIS
              </h1>
            </div>
            <div class="introduction-square js-introduction-square">
              <span class="dotted-square is-expanded is-animated"></span>
            </div>

            <div className="flex items-center h-screen flex-col  justify-center absolute left-1/2 transform -translate-x-1/2 text-center top-1/2 -translate-y-1/2">
              <div className="font-normal tracking-normal absolute bottom-full mb-2px opacity-40 leading-[1.71] text-[clamp(10px, -6px + 1.5625vw, 14px)]">
                CLICK TO TYPE
              </div>
              <form style={{ clippath: "inset(0%)," }}>
                    <div className="py-[5px] relative">
                        <input className="border-b border-solid border-black leading-none text-center text-[#1a1b1c]" style={{ width: "calc((var(--introduction-form-label-symbols, 15) - 5.5)* 1ch)" }}/>
                    </div>


              </form>
            </div>

            <div className='items-center flex "mt-auto'>
              <button>
                <span></span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Introduction;