import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Pash - UI/UX Designer"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              With over 5 years of experience in UI/UX design, I've helped numerous businesses transform their digital presence. My approach combines aesthetic excellence with user-centered design principles.
            </p>
            <p className="text-gray-300 mb-8">
              I specialize in creating intuitive, responsive designs that not only look beautiful but also drive results. Whether it's a website redesign or a new digital product, I ensure every pixel serves a purpose.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-[#FF881F] mb-2">5+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#FF881F] mb-2">50+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 