'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="heading-xl mb-12 text-gray-800">
            TOGETHER,
            <br />
            WE CAN
            <br />
            <span className="italic">TRANSFORM</span>
            <br />
            LIVES
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            Your support creates ripple effects of positive change that extend far beyond 
            individual lives - it transforms entire communities and builds a brighter future for Nigeria.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <a
              href="https://paystack.com/pay/morolakecares"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple hover:bg-purple-dark text-white px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 border-2 border-purple"
            >
              MAKE A DONATION
            </a>
            <a
              href="#contact"
              className="border-2 border-purple text-purple hover:bg-purple hover:text-white px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300"
            >
              PARTNER WITH US
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}