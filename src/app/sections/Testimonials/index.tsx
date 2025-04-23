import React, { useEffect, useState } from 'react'
import styles from './Testimonials.module.css'

interface Testimonial {
  id: number
  text: string
  name: string
  position: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Pash is a great UI designer and I'm happy to recommend him. He has lots of attention to detail and he's constantly evolving, learning, and growing.",
    name: "Chris Barin",
    position: "Founder and CEO",
    company: "Ohvaz",
    image: "/images/testimonials/chris.jpg"
  },
  {
    id: 2,
    text: "Really amazing work done by Pash! Really quick and efficient and very understanding.",
    name: "Melanie Hawasen",
    position: "Founder",
    company: "Mel's talk",
    image: "/images/testimonials/melanie.jpg"
  },
  // Add more testimonials here
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayDelay = 5000

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length)
      }, autoplayDelay)
    }

    return () => clearInterval(interval)
  }, [isAutoplay])

  const handlePrev = () => {
    setIsAutoplay(false)
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const handleNext = () => {
    setIsAutoplay(false)
    setActiveIndex((current) => 
      (current + 1) % testimonials.length
    )
  }

  const getCardClass = (index: number) => {
    if (index === activeIndex) return styles.cardActive
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) return styles.cardPrev
    if (index === (activeIndex + 1) % testimonials.length) return styles.cardNext
    return styles.card
  }

  return (
    <section className={styles['testimonials-section']}>
      <div className={styles.wrapper}>
        <h2>Here's What My Clients Have to Say</h2>
        <div className={styles.carousel}>
          <div className={styles.container}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={getCardClass(index)}
              >
                <div className={styles.content}>
                  <p className={styles.text}>{testimonial.text}</p>
                  <div className={styles.clientInfo}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={styles.clientImage}
                    />
                    <div className={styles.clientDetails}>
                      <h3 className={styles.clientName}>{testimonial.name}</h3>
                      <p className={styles.clientPosition}>
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.nav}>
            <button className={styles.navButton} onClick={handlePrev}>←</button>
            <button className={styles.navButton} onClick={handleNext}>→</button>
          </div>
        </div>
      </div>
    </section>
  )
} 