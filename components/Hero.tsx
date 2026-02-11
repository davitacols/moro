'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white pt-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="eyebrow">
              BUILDING HOPE, CREATING CHANGE
            </p>
            <h1 className="text-4xl lg:text-6xl font-display font-black leading-none text-purple">
              EMPOWERING
              <br />
              THE GIRL CHILD
              <br />
              TO TRANSFORM
              <br />
              COMMUNITIES
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Through education, empowerment, and community support, we're breaking barriers 
              and creating opportunities for underprivileged girls and women.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#impact" className="btn-primary">
                SEE OUR IMPACT
              </a>
              <a href="#about" className="btn-secondary">
                OUR STORY
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-black text-purple">5,000+</div>
                <div className="text-xs uppercase tracking-wider text-gray-600">Girls Educated</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple">200+</div>
                <div className="text-xs uppercase tracking-wider text-gray-600">Schools Supported</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple">₦50M+</div>
                <div className="text-xs uppercase tracking-wider text-gray-600">Impact Value</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[600px]"
          >
            <Image
              src="/Monisola 1b.jpeg"
              alt="African girls in school"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}