'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding pt-8">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-shell overflow-hidden bg-gradient-to-br from-[#261331] via-[#4a1d5f] to-[#7d3294] p-8 text-white lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-2xl">
              <p className="eyebrow bg-white/10 text-white/80">Get involved</p>
              <h2 className="mt-6 heading-lg text-white">
                Back the work with support that can turn into something practical.
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-white/[0.78]">
                Donations, partnerships, and introductions help Morolake Cares continue responding
                to real educational and community needs with care that feels tangible.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://paystack.com/pay/morolakecares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white"
                >
                  Make a donation
                </a>
                <a
                  href="mailto:info@morolakecaresinitiatives.com?subject=Partner%20with%20Morolake%20Cares"
                  className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  Partner with us
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid min-w-0 gap-4"
            >
              <div className="rounded-[1.6rem] border border-white/[0.12] bg-white/[0.08] p-5 backdrop-blur-sm">
                <p className="soft-label text-white/70">Contact</p>
                <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)]">
                  <a
                    href="mailto:info@morolakecaresinitiatives.com"
                    className="min-w-0 rounded-2xl border border-white/[0.12] bg-white/[0.06] px-5 py-4 text-left transition-colors duration-300 hover:bg-white/10"
                  >
                    <p className="soft-label text-white/60">Email</p>
                    <p className="mt-2 break-words text-base font-semibold leading-relaxed text-white">
                      info@morolakecaresinitiatives.com
                    </p>
                  </a>
                  <a
                    href="tel:+2348090175385"
                    className="min-w-0 rounded-2xl border border-white/[0.12] bg-white/[0.06] px-5 py-4 text-left transition-colors duration-300 hover:bg-white/10"
                  >
                    <p className="soft-label text-white/60">Call</p>
                    <p className="mt-2 text-base font-semibold leading-relaxed text-white">
                      +234 809 017 5385
                    </p>
                  </a>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/[0.12] bg-white/[0.08] p-5 backdrop-blur-sm">
                <p className="soft-label text-white/70">Community support</p>
                <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-center">
                  <div className="image-frame relative min-h-[140px] bg-white p-4 sm:min-h-[160px]">
                    <Image
                      src="/legacy/bg/common.jpeg"
                      alt="Community support sponsor mark from the restored site"
                      fill
                      sizes="(max-width: 1024px) 100vw, 14vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <p className="min-w-0 text-lg leading-relaxed text-white/[0.82]">
                    The organization has also highlighted support from grants, multilateral sources,
                    and community generosity that help broaden its work.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
