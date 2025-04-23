import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="wrapper">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            Pash<span className="text-[#FF881F]">.</span>
          </Link>
          <ul className="flex items-center gap-8">
            <li><Link href="#about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link href="#skills" className="text-gray-300 hover:text-white">Skills</Link></li>
            <li><Link href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</Link></li>
            <li><Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 