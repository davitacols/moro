'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="heading-xl mb-12">
            TOGETHER,
            <br />
            WE CAN
            <br />
            <span className="italic">TRANSFORM</span>
            <br />
            LIVES
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
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
              className="btn-primary"
            >
              MAKE A DONATION
            </a>
            <a
              href="#contact"
              className="btn-secondary"
            >
              PARTNER WITH US
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}