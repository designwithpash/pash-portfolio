'use client'

import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Hero() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['UI/UX Designer', 'Web Developer', 'Creative Thinker'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="wrapper text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm Pash
        </h1>
        <h2 className="text-3xl md:text-5xl text-[#FF881F] font-bold mb-8">
          <span ref={el}></span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          I help businesses grow by crafting amazing web experiences. If you're looking for a designer who can bring your vision to life, you're in the right place.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-[#FF881F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF881F]/90 transition-colors"
        >
          Let's Work Together
        </a>
      </div>
    </section>
  )
} 