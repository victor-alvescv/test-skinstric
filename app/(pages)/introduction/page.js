"use client"
import Link from "next/link";
import React, { useState } from "react";



function Introduction() {
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const handleClick = () => {
        setIsTyping(true);
      };

  return (
    <>
      <div className="flex flex-col flex-auto">
        <nav className="items-center flex h-16 justify-between left-0 fixed top-0 w-full z-30 mx-auto max-w-[2560px] px-8">
          <div className="flex items-center relative z-30 ">
            <Link
              href="/"
              className="font-bold text-[10px]"
              style={{ fontSize: "clamp(10px,-2px + .9375vw,16px)" }}
            >
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
            <div className="items-center flex flex-col justify-center left-1/2 absolute text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <div
                style={{ fontSize: "clamp(10px,-6px + 1.5625vw,14px)" }}
                className="bottom-[100%] mb-1 opacity-40 absolute uppercase font-normal tracking-[0] leading-[1.71]">
                Click to type
              </div>
              <form>
              <div className="py-[5px] relative">
                   {isTyping ? (
                     <input
                     type="text"
                     value={name}
                     onChange = {(e) => setName(e.target.value)}
                     placeholder="Introduce Yourself"
                     className="introduction__input text-black placeholder:text-black"
                     />
                   ) : (
                    <p className="absolute top-37p left-33p cursor-pointer rotate-[-45deg] " onClick={handleClick}>
                    {name || "Click To Type"}
                  </p>
                   )            
                }
                </div>
              </form>
            </div>
            <div className='items-center flex "mt-auto'>
                <div className="mr-auto flex-none flex-shrink basis-1/4 pr-2.5 text-color-color">
                    <button>
                         <span>Back</span>
                    </button>
                </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Introduction;