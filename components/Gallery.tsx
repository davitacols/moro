'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Placeholder images - replace with actual gallery photos
  const galleryImages = [
    { src: '/Monisola 1b.jpeg', alt: 'Girls in classroom' },
    { src: '/Queens 7a.jpeg', alt: 'Community event' },
    { src: '/b - Copy.jpeg', alt: 'School activities' },
    { src: '/Monisola 1b.jpeg', alt: 'Educational program' },
    { src: '/Queens 7a.jpeg', alt: 'Empowerment initiative' },
    { src: '/b - Copy.jpeg', alt: 'Community support' },
  ]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-8 text-purple">GALLERY</p>
          <h2 className="heading-lg text-purple mb-6">
            MOMENTS OF
            <br />
            <span className="italic">IMPACT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing the transformative moments and joyful experiences from our initiatives across Nigeria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-80 overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
