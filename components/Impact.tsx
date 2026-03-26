'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const stories = [
  {
    title: 'Girls Can Play in grassroots community sports',
    date: 'February 25, 2025',
    location: 'Ibadan',
    image: '/legacy/bg/mcig10.jpg',
    description:
      'A sports competition designed to build confidence, visibility, and teamwork for girls in the community.',
  },
  {
    title: 'MCI empowered mothers of the girl-child',
    date: 'May 5, 2023',
    location: 'Ibadan',
    image: '/legacy/bg/emp-4.jpeg',
    description:
      "Support for mothers and widows reflects the organization's broader understanding of what shapes a girl's future.",
  },
  {
    title: 'School shoes and socks for public school pupils',
    date: 'February 27, 2023',
    location: 'Ibadan',
    image: '/legacy/bg/sh3.jpeg',
    description:
      'A practical education-support response that helps children show up with dignity and readiness to learn.',
  },
  {
    title: 'N3.4 million boarding house cheque presentation',
    date: 'February 22, 2023',
    location: 'Ibadan',
    image: '/legacy/bg/gh2.jpeg',
    description:
      'Infrastructure support aimed at making accommodation safer and more stable for students.',
  },
  {
    title: 'Sanitary pads and deodorants distribution',
    date: 'February 8, 2023',
    location: 'Ibadan',
    image: '/legacy/bg/h10.jpeg',
    description:
      'A dignity-centered intervention that helps girls stay present, comfortable, and engaged in school.',
  },
  {
    title: 'Foodbank distribution to families on Christmas Day',
    date: 'December 25, 2022',
    location: 'Oluyoro, Ibadan',
    image: '/legacy/bg/g.jpeg',
    description:
      'Community support that meets families in moments of need with practical care and solidarity.',
  },
]

export default function Impact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="impact" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-shell overflow-hidden bg-[#1e1429] p-8 text-white lg:p-12"
        >
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow bg-white/10 text-white/80">Featured stories</p>
              <h2 className="mt-6 text-4xl font-display font-black leading-none tracking-tight text-white lg:text-6xl">
                Real initiatives, visible outcomes, and a stronger sense of what the work looks like.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-white/[0.72]">
              These stories come directly from the restored live site and show the mix of education
              support, dignity care, family empowerment, and infrastructure help that defines the
              organization.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.06]"
              >
                <div className="relative min-h-[240px]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/[0.18] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="inline-flex rounded-full border border-white/[0.15] bg-white/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white/[0.8]">
                      {story.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/[0.54]">
                    {story.date}
                  </div>
                  <h3 className="mt-3 text-2xl font-display font-bold text-white">
                    {story.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-white/[0.72]">{story.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
