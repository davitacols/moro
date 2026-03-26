'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const focusAreas = [
  {
    title: 'Education and school retention',
    description:
      'Responding to the barriers that keep girls out of school, from poverty to the loss of parents and unstable family income.',
  },
  {
    title: 'Support for widows and women',
    description:
      'Extending the work beyond students by supporting the women and widowed families many girls depend on.',
  },
  {
    title: 'Dignity, health, and safe spaces',
    description:
      'Using practical interventions such as sanitary support and better facilities to help girls learn with confidence.',
  },
  {
    title: 'Partnerships for long-term change',
    description:
      'Working with people and organizations who share the same vision to create responsible, lasting development.',
  },
]

export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow">About Morolake Cares</p>
            <h2 className="heading-lg text-slate-950">
              The mission is grounded in what girls and families actually face.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            Morolake Cares Initiatives aims to educate the girl-child, support school dropouts and
            underprivileged girls, and widen opportunity through practical community care.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-shell p-5 lg:p-6"
          >
            <div className="image-frame relative min-h-[360px]">
              <Image
                src="/legacy/bg/26.png"
                alt="Community gathering captured on the restored Morolake Cares website"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/[0.15] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-7">
                <p className="soft-label text-white/75">Why the work matters</p>
                <p className="mt-3 max-w-md text-2xl font-display font-bold">
                  Educated girls create a positive ripple effect in their health, families,
                  communities, and society.
                </p>
              </div>
            </div>

            <div className="mt-5 card-surface bg-white/[0.92]">
              <p className="soft-label">How the organization frames the challenge</p>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  Morolake Cares identifies early pregnancy, gender inequality, low family income,
                  poverty, and the death of one or both parents as some of the factors that drive
                  high school dropout rates.
                </p>
                <p>
                  Through lived experience and direct community contact, the initiative was also
                  shaped by the need to support widows and women in poverty whose circumstances
                  often affect the girls in their care.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card-surface bg-white/[0.88]"
              >
                <p className="soft-label">Focus area</p>
                <h3 className="mt-3 text-2xl font-display font-bold text-slate-950">
                  {area.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
