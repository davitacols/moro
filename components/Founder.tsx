'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="founder" className="section-padding bg-gradient-to-br from-purple/5 to-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-8 text-purple">MEET THE FOUNDER</p>
          <h2 className="heading-lg text-purple mb-6">
            THE VISION
            <br />
            <span className="italic">BEHIND THE MISSION</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <Image
              src="/Monisola 1b.jpeg"
              alt="Founder of Morolake Cares Initiatives"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold text-purple mb-4">
              Founder Name
            </h3>
            <p className="text-lg font-bold uppercase tracking-wider text-gray-600 mb-6">
              Founder & Executive Director
            </p>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                [Founder's story and background - Replace with actual founder information]
              </p>
              <p>
                With a deep passion for education and women's empowerment, our founder established 
                Morolake Cares Initiatives to create lasting change in the lives of underprivileged 
                girls across Nigeria.
              </p>
              <p>
                Through dedication, compassion, and unwavering commitment, the organization has grown 
                to impact thousands of lives, providing education, healthcare support, and community 
                development programs that transform entire communities.
              </p>
              <p>
                "Every girl deserves the opportunity to reach her full potential. When we invest in 
                girls' education, we invest in the future of our nation."
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                [Add founder's qualifications, awards, and achievements here]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
