'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const events = [
  {
    date: 'February 25, 2025',
    title: 'Girls Can Play sports competition',
    description:
      'A grassroots sports event focused on girls confidence, participation, and public visibility.',
    image: '/legacy/bg/mcig10.jpg',
  },
  {
    date: 'May 5, 2023',
    title: 'Mothers empowerment initiative',
    description:
      'A reminder that strengthening women and widows is also part of strengthening the girl-child.',
    image: '/legacy/bg/emp-4-1.jpeg',
  },
  {
    date: 'February 27, 2023',
    title: 'School shoes and socks distribution',
    description:
      "School essentials distributed to public school pupils as part of the organization's education support.",
    image: '/legacy/bg/sh3-1.jpeg',
  },
  {
    date: 'February 22, 2023',
    title: 'Boarding house cheque presentation',
    description:
      'A major contribution toward student accommodation and safer learning infrastructure.',
    image: '/legacy/bg/gh1-1.jpeg',
  },
]

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="events" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
        >
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Recent events</p>
            <h2 className="mt-5 heading-lg text-slate-950">
              A clearer picture of how the work shows up in the community.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
              The restored site highlights a pattern: identify a real pressure point, respond with
              practical help, and stay visibly connected to the people affected.
            </p>
            <a href="/gallery" className="btn-secondary mt-8">
              Browse the full gallery
            </a>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {events.map((event, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="card-surface bg-white/[0.88]"
              >
                <div className="grid gap-5 md:grid-cols-[0.42fr_0.58fr] md:items-center md:gap-6">
                  <div className="image-frame relative min-h-[210px] sm:min-h-[230px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="inline-flex rounded-full border border-purple/10 bg-purple/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-purple sm:text-sm sm:tracking-[0.24em]">
                      {event.date}
                    </div>
                    <h3 className="mt-4 text-xl font-display font-bold text-slate-950 sm:text-2xl">
                      {event.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
