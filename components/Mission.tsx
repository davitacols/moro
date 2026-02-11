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
          <h2 className="heading-xl max-w-5xl mx-auto mb-12 text-purple">
            EVERY LIFE
            <br />
            <span className="italic">MATTERS.</span>
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
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

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="eyebrow mb-8 text-purple">OUR TEAM</p>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
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
          ].map((member, index) => (
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

        {/* Founder Section */}
        <motion.div
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