'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        {/* Large typography section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="eyebrow mb-8">OUR MISSION</p>
          <h2 className="heading-xl max-w-5xl mx-auto mb-12">
            EVERY LIFE
            <br />
            <span className="italic">MATTERS.</span>
            <br />
            EVERY GIRL
            <br />
            DESERVES A
            <br />
            <span className="italic">FUTURE.</span>
          </h2>
        </motion.div>

        {/* Split content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-xl leading-relaxed">
              <p className="mb-6">
                Morolake Cares Initiatives is dedicated to transforming lives through education, 
                empowerment, and community support. We believe that when you educate a girl, 
                you educate a nation.
              </p>
              <p>
                Our mission extends beyond the classroom - we provide comprehensive support 
                including health education, infrastructure development, and family empowerment 
                programs that create lasting change in communities across Nigeria.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image
                src="/Monisola 1b.jpeg"
                alt="Classroom learning environment"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Values grid - editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { title: 'EDUCATION ACCESS', desc: 'Breaking barriers to quality education for every girl child' },
            { title: 'DIGNITY & HEALTH', desc: 'Providing sanitary products and health education' },
            { title: 'INFRASTRUCTURE', desc: 'Renovating schools and building better facilities' },
            { title: 'COMMUNITY SUPPORT', desc: 'Empowering mothers and strengthening families' }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="border-l-4 border-black pl-6 hover:border-gray-400 transition-colors duration-300"
            >
              <h3 className="font-black text-lg mb-3 tracking-wider">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}