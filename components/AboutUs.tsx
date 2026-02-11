'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const teamMembers = [
    {
      name: 'Team Member 1',
      role: 'Position Title',
      image: '/Monisola 1b.jpeg',
      bio: 'Brief description of team member and their role in the organization.'
    },
    {
      name: 'Team Member 2',
      role: 'Position Title',
      image: '/Queens 7a.jpeg',
      bio: 'Brief description of team member and their role in the organization.'
    },
    {
      name: 'Team Member 3',
      role: 'Position Title',
      image: '/b - Copy.jpeg',
      bio: 'Brief description of team member and their role in the organization.'
    },
    {
      name: 'Team Member 4',
      role: 'Position Title',
      image: '/Monisola 1b.jpeg',
      bio: 'Brief description of team member and their role in the organization.'
    },
  ]

  return (
    <section id="about-us" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="eyebrow mb-8 text-purple">ABOUT US</p>
          <h2 className="heading-lg text-purple mb-8">
            MEET OUR
            <br />
            <span className="italic">TEAM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our dedicated team works tirelessly to empower girls and transform communities 
            across Nigeria through education, support, and sustainable initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-80 mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-purple">{member.name}</h3>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
