'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="founder" className="section-padding pt-8">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center lg:mb-14"
        >
          <p className="eyebrow">Meet the founder</p>
          <h2 className="mt-6 heading-lg text-slate-950">
            Oladiwura Morolake Laniyan
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-shell p-4 sm:p-5"
          >
            <div className="image-frame relative min-h-[320px] sm:min-h-[460px]">
              <Image
                src="/legacy/bg/morolake.jpeg"
                alt="Oladiwura Morolake Laniyan"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid gap-5 sm:gap-6"
          >
            <div className="card-surface bg-white/[0.92]">
              <p className="soft-label">Founder and vision</p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                Oladiwura Morolake Laniyan is an innovative woman with broad knowledge and
                experience across several areas, including multidisciplinary cancer pathway and
                mental health teams within the NHS in the United Kingdom.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                Born in Ibadan, she completed her primary and secondary education in Nigeria,
                earned a BSc in Social Policy and Sociology at London Metropolitan University, and
                later completed an MSc in Human Resources Management at the University of Wales,
                Cardiff.
              </p>
            </div>

            <div className="card-surface bg-white/[0.92]">
              <p className="soft-label">What shaped the initiative</p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                As someone who attended a girls secondary school in western Nigeria, she came to
                understand the challenges, lifestyle pressures, and vulnerabilities that can shape
                a girl's future. That experience deeply influenced her passion for educating the
                girl-child.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                Her involvement in cancer care pathways and charity fundraising, including Race for
                Life, Walk the Walk, Macmillan Coffee Morning, and Save the Children fundraising
                events, also reinforced a long-standing commitment to practical compassion,
                community care, and education as a route out of present and future poverty.
              </p>
            </div>

            <div className="panel-dark">
              <p className="soft-label text-white/70">Belief at the center of the work</p>
              <p className="mt-4 text-lg leading-relaxed text-white/[0.84] sm:text-xl">
                Educating a girl-child eventually produces educated mothers, who will in turn
                educate their children.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/[0.78]">
                For her, educating a girl-child also means building the mind, character,
                capabilities, income, and welfare that help protect against current and future
                poverty.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
