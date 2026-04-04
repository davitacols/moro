'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const supportThemes = [
  'Education access for girls at risk of dropping out',
  'Support for widows and women in need',
  'Community partnerships that turn care into action',
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-36">
      <div className="decor-ring -left-24 top-20 hidden h-72 w-72 lg:block" />
      <div className="decor-ring -right-28 top-52 hidden h-80 w-80 lg:block" />

      <div className="section-container pb-12 sm:pb-16 lg:pb-24">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-10 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7 sm:space-y-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-purple/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-slate-600">
                Building hope, creating change
              </span>
            </div>

            <h1 className="heading-xl max-w-3xl text-purple">
              <span className="block">EMPOWERING</span>
              <span className="block">
                THE{' '}
                <span className="inline-block -rotate-[4deg] rounded-none bg-purple px-[0.22em] py-[0.06em] text-white shadow-[0_20px_40px_-24px_rgba(83,19,100,0.95)]">
                  GIRL
                </span>{' '}
                CHILD
              </span>
              <span className="block">TO TRANSFORM</span>
              <span className="block">COMMUNITIES</span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl">
              Through education, empowerment, and community support, we're breaking barriers
              and creating opportunities for underprivileged girls and Women.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://paystack.com/pay/morolakecares"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Support the mission
              </a>
              <a href="#about" className="btn-secondary">
                Learn our story
              </a>
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-2 xl:grid-cols-3">
              {supportThemes.map((theme) => (
                <div key={theme} className="card-surface p-5">
                  <p className="soft-label">Focus</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {theme}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="section-shell overflow-hidden p-3 sm:p-4 lg:p-5">
              <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="image-frame relative min-h-[320px] sm:min-h-[440px] lg:min-h-[620px]">
                  <Image
                    src="/legacy/bg/mcig10.jpg"
                    alt="Girls participating in the Girls Can Play community sports event"
                    fill
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.55] via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6 lg:p-8">
                    <p className="soft-label text-white/75">Recent highlight</p>
                    <p className="mt-2 max-w-md text-xl font-display font-bold sm:text-2xl">
                      Girls Can Play brought confidence and visibility to girls in grassroots sport.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="image-frame relative min-h-[180px] sm:min-h-[220px]">
                    <Image
                      src="/legacy/bg/emp-4.jpeg"
                      alt="Women during a Morolake Cares empowerment program"
                      fill
                      sizes="(max-width: 1024px) 100vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="image-frame relative min-h-[180px] sm:min-h-[220px]">
                    <Image
                      src="/legacy/bg/Queens%207a.jpeg"
                      alt="Students during a Morolake Cares school visit"
                      fill
                      sizes="(max-width: 1024px) 100vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="panel-dark">
                    <p className="soft-label text-white/70">What guides the work</p>
                    <p className="mt-4 text-base leading-relaxed text-white/[0.85] sm:text-lg">
                      Every life matters, and support should respond to the real pressures girls
                      and families face, from school needs to dignity, safety, and stability.
                    </p>
                    <a
                      href="#impact"
                      className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.24em] text-white/90"
                    >
                      Explore featured stories
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
