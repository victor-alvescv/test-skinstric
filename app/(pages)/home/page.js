"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";


function Home () {
    const pathname = usePathname();

  return (
    <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3">
      <div className="flex flex-row pt-1 scale-75">
        <button
          className="font-bold text-xs mr-2"
          variant="ghost"
          asChild
        >
          <Link href='/' className="line-clamp-4">
          SKINSTRIC
          </Link>
        </button>
        <p className="text-muted-foreground pt-[7.5px] font-semibold text-sm ml-1">
          INTRO
        </p>
      </div>
      {pathname !== "/testing" && pathname !== "/result" && pathname !== "/select" && pathname !== "/final" && pathname !== "/scan" && (
        <button className="mx-4 scale-[0.8]">ENTER CODE</button>
      )}
    </div>
  )
}

export default Home
