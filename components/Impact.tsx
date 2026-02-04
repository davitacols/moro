'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Impact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stories = [
    {
      title: 'GIRLS CAN PLAY SPORTS INITIATIVE',
      date: 'FEBRUARY 2025',
      description: 'Empowering girls through grassroots sports programs and building confidence through athletics.',
      number: '01'
    },
    {
      title: 'SANITARY PAD DISTRIBUTION',
      date: 'FEBRUARY 2023',
      description: 'Distributed sanitary pads to thousands of girls, ensuring they never miss school.',
      number: '02'
    },
    {
      title: '₦3.4M BOARDING HOUSE FUND',
      date: 'FEBRUARY 2023',
      description: 'St. Louis Convent boarding house construction fund to provide safe accommodation.',
      number: '03'
    },
    {
      title: 'SCHOOL TOILET RENOVATION',
      date: 'JUNE 2022',
      description: 'Building clean, safe sanitation infrastructure in rural schools.',
      number: '04'
    },
    {
      title: 'MOTHER EMPOWERMENT PROGRAM',
      date: 'MAY 2023',
      description: 'Providing skills training and resources to empower mothers in the community.',
      number: '05'
    },
    {
      title: 'FOOD BANK DISTRIBUTIONS',
      date: 'DECEMBER 2022',
      description: 'Holiday food support programs for families in need across our communities.',
      number: '06'
    }
  ]

  return (
    <section id="impact" className="section-padding bg-black text-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="eyebrow text-gray-400 mb-8">OUR IMPACT</p>
          <h2 className="heading-xl mb-12">
            STORIES OF
            <br />
            <span className="italic">TRANSFORMATION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Every initiative we undertake creates ripple effects of positive change. 
            Here are some of the ways we're making a difference in communities across Nigeria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-gray-800 pb-8 hover:border-white transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl font-black text-gray-800 group-hover:text-white transition-colors duration-300">
                  {story.number}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-black tracking-widest text-gray-400 mb-2">
                    {story.date}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {story.description}
                  </p>
                  <div className="text-white font-bold uppercase tracking-wider text-sm hover:underline cursor-pointer">
                    LEARN MORE →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}