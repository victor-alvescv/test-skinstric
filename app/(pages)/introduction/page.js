import Navbar from '@/app/components/Navbar'
import React from 'react'

function Introduction() {
  return (
    <>
        <Navbar/>
        <main className='relative ml-9 mr-9'>
            <div className='flex flex-col pb-9'>
                <h1 className='font-bold'>TO START ANALYSIS</h1>
                <div className='introduction__square'></div>

            </div>

        </main>
    
    </>

  )
}

export default Introduction
