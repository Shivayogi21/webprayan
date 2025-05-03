'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <div className='w-full  overflow-hidden sm:h-1/2 md:h-2/3'>
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      >
        <source src="/assets/img/vid_01.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl py-4 font-extrabold bg-gradient-to-r from-gray-500 via-white to-gray-100 text-transparent bg-clip-text font-serif">
          <Typewriter
            words={['Welcome to NOVPRAYAN', 'Experience The Real', 'Digital Travel On', 'Your FingerTips']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-serif">
          Empowering individuals and businesses through digital solutions and strategic innovation. Manage your Business On the Gowith our innovative rental management solution
        </p>
      </div>
    </section>
    </div>
  )
}
