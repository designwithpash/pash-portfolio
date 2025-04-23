import React, { useState } from 'react'
import { postToAPI } from '@/app/lib/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await postToAPI('/contacts', {
        data: formData
      })
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      console.error('Error submitting form:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>
        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/20 border border-gray-800 rounded-lg focus:outline-none focus:border-[#FF881F]"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/20 border border-gray-800 rounded-lg focus:outline-none focus:border-[#FF881F]"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-black/20 border border-gray-800 rounded-lg focus:outline-none focus:border-[#FF881F]"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#FF881F] text-white py-4 rounded-lg font-semibold hover:bg-[#FF881F]/90 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500 text-center">Error sending message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
} 