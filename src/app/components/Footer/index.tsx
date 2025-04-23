import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              Pash<span className="text-[#FF881F]">.</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Creating beautiful digital experiences that drive results.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="#skills" className="text-gray-300 hover:text-white">Skills</Link></li>
              <li><Link href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: hello@pash.design</li>
              <li>Location: San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 