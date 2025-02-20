import Navbar from '@/app/components/Navbar'
import React from 'react'

function Introduction() {
  return (
    <>
        <Navbar/>
        <main className='relative flex flex-auto flex-col inherit-z ml-9 mr-9'>
            <div className='flex flex-1 flex-shrink basis-auto flex-col pb-9 relative overflow-hidden ml-auto mr-auto max-w-[2560px] pl-offset-x pr-offset-x w-full'>
                <div className='flex flex-col pb-9 pt-9 absolute left-offset-x overflow-hidden'>
                    <h1 className='font-bold'>TO START ANALYSIS</h1>
                </div>
                <div class="introduction-square js-introduction-square">
                    <span class="dotted-square is-expanded is-animated"></span>
                </div>
            </div>
        </main>
    
    </>

  )
}

export default Introduction
