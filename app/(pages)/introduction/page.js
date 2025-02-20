import Link from 'next/link'
import React from 'react'

function Introduction() {
  return (
    <>
        <nav className="flex items-center justify-between top-0 z-3 py-8 px-9 ml-9 mr-9 w-full">
            <div className="flex items-center relative z-30 "> 
                <Link href="/" className="font-bold">
                    SKINSTRIC
                </Link>
                </div>
         </nav>
        <main className='relative flex flex-auto flex-col inherit-z ml-9 mr-9'>
            <div className='flex flex-1 flex-shrink basis-auto flex-col pb-9 relative overflow-hidden ml-auto mr-auto max-w-[2560px] pl-offset-x pr-offset-x w-full'>
                <div className='flex flex-col pb-9 pt-9 absolute left-offset-x overflow-hidden'>
                    <h1 className='font-bold'>TO START ANALYSIS</h1>
                </div>
                <div class="introduction-square js-introduction-square">
                    <span class="dotted-square is-expanded is-animated"></span>
                </div>

                <div className='flex items-center h-screen flex-col  justify-center absolute left-1/2 transform -translate-x-1/2 text-center top-1/2 -translate-y-1/2'>
                    <div className='font-normal tracking-normal absolute bottom-full mb-2px opacity-40 '>CLICK TO TYPE</div>

                </div>

                <div className='items-center flex "mt-auto'>
                    <button>
                        <span></span>
                    </button>


                </div>
            </div>
        </main>
    
    </>

  )
}

export default Introduction
