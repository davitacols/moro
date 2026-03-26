'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const originalGallery = [
  {
    src: '/legacy/bg/Queens%207a.jpeg',
    alt: 'Education gallery image from the original site',
    title: 'Education',
    subtitle: 'Girl-child',
  },
  {
    src: '/legacy/bg/b%20-%20Copy.jpeg',
    alt: 'Food Bank gallery image from the original site',
    title: 'Food Bank',
    subtitle: '',
  },
  {
    src: '/legacy/bg/Monisola%201b.jpeg',
    alt: 'Help-Hand gallery image from the original site',
    title: 'Help-Hand',
    subtitle: '',
  },
]

const eventArchive = [
  {
    image: '/legacy/bg/mcig10.jpg',
    title: 'Empowering girls in grassroots community sports competition - Girls Can Play.',
    date: 'February 25, 2025',
  },
  {
    image: '/legacy/bg/emp-4.jpeg',
    title: 'MCI empowered Mothers of the girlchild',
    date: 'May 5, 2023',
  },
  {
    image: '/legacy/bg/sh3.jpeg',
    title: 'MCI donated school shoes and socks to pupils in public School',
    date: 'February 27, 2023',
  },
  {
    image: '/legacy/bg/gh2.jpeg',
    title: 'MCI presents N3.4million Cheque for St. Louis Convent Boarding House',
    date: 'February 22, 2023',
  },
  {
    image: '/legacy/bg/h10.jpeg',
    title: 'MCI Distributes Sanitary Pads, Deodorants to Public Schools in Ibadan',
    date: 'February 8, 2023',
  },
  {
    image: '/legacy/bg/g.jpeg',
    title: 'MCI Foodbank distribution to families on Xmas day',
    date: 'December 25, 2022',
  },
  {
    image: '/legacy/bg/Screenshot_14.png',
    title: 'MCI Foodbank distribution to families on Eid Adha Day',
    date: 'July 8, 2022',
  },
  {
    image: '/legacy/bg/Screenshot_15.png',
    title: 'MCI donate Uniforms and Writing Materials to Public Primary School',
    date: 'June 28, 2022',
  },
  {
    image: '/legacy/bg/Screenshot_16.png',
    title: "MCI Renovated Toilet Facilities for Girl's Secondary School",
    date: 'June 2022',
  },
  {
    image: '/legacy/bg/edun.jpeg',
    title: 'MCI: International Day of the Girl Child',
    date: 'October 10, 2022',
  },
  {
    image: '/legacy/bg/Screenshot_3.png',
    title: "2022 WORLD TEACHERS' DAY: Morolake Cares Initiatives Celebrates Teachers",
    date: 'October 5, 2022',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="gallery" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow">The Gallery</p>
            <h2 className="heading-lg text-slate-950">
              The original gallery pictures, plus the full event-photo archive.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            This page now preserves the original gallery trio from the initial site and adds the
            old event-photo titles so the archive feels complete again.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {originalGallery.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/60 shadow-[0_24px_70px_-38px_rgba(35,16,45,0.52)]"
            >
              <div className="relative min-h-[420px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="soft-label text-white/65">Original gallery</p>
                  <h3 className="mt-3 text-3xl font-display font-bold">{item.title}</h3>
                  {item.subtitle ? (
                    <p className="mt-2 text-base uppercase tracking-[0.22em] text-white/80">
                      {item.subtitle}
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Event Archive</p>
              <h3 className="mt-4 heading-md text-slate-950">
                Event photos and titles restored from the initial website.
              </h3>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              These cards bring the original event coverage into one place so the gallery doubles as
              a usable archive.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {eventArchive.map((event, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + index * 0.05 }}
                className="card-surface bg-white/[0.92]"
              >
                <div className="image-frame relative min-h-[240px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5">
                  <p className="soft-label">{event.date}</p>
                  <h4 className="mt-3 text-2xl font-display font-bold text-slate-950">
                    {event.title}
                  </h4>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
