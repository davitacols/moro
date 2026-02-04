'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const events = [
    {
      date: 'Feb 25, 2025',
      title: 'Girls Can Play - Sports Competition',
      description: 'Annual sports competition empowering girls through athletics and building confidence through team sports and individual achievements.'
    },
    {
      date: 'May 5, 2023',
      title: 'Mother Empowerment Initiative',
      description: 'Skills training workshop for mothers in the community, providing resources and knowledge for sustainable income generation.'
    },
    {
      date: 'Feb 27, 2023',
      title: 'School Shoes & Socks Distribution',
      description: 'Distribution of school shoes and socks to ensure every child has proper footwear for their educational journey.'
    },
    {
      date: 'Feb 22, 2023',
      title: '₦3.4M Boarding House Cheque Presentation',
      description: 'Official presentation of ₦3.4 million cheque for St. Louis Convent boarding house construction project.'
    },
    {
      date: 'Oct 11, 2022',
      title: 'International Day of the Girl Child',
      description: 'Special celebration highlighting the importance of girls\' education and empowerment in our communities.'
    }
  ]

  return (
    <section id="events" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Our Journey</p>
          <h2 className="heading-lg">Join Us in Making a Difference</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            <div className="space-y-12">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Event Card */}
                  <div className="md:ml-20 w-full">
                    <div className="bg-cream hover:bg-white hover:shadow-lg transition-all duration-300 p-6 rounded-xl">
                      <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {event.date}
                      </div>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}