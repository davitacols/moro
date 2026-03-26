'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { type ChangeEvent, type FormEvent, useState } from 'react'

type ContactFormData = {
  fullName: string
  email: string
  phone: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Website message from ${formData.fullName}`)
    const body = encodeURIComponent(
      [
        `Full Name: ${formData.fullName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        '',
        'Message:',
        formData.message,
      ].join('\n')
    )

    window.location.href = `mailto:info@morolakecaresinitiatives.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section-padding pt-32 lg:pt-36">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="min-w-0 space-y-8"
          >
            <div className="space-y-5">
              <p className="eyebrow">Contact</p>
              <h1 className="heading-lg text-slate-950">
                Reach Morolake Cares Initiatives directly.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-slate-600">
                For partnerships, volunteering, donations, or general enquiries, use any of the
                contact options below. The team is based in Ibadan and reachable during weekdays.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
              <a
                href="mailto:info@morolakecaresinitiatives.com"
                className="card-surface flex h-full min-w-0 flex-col bg-white/[0.92]"
              >
                <p className="soft-label">Email</p>
                <p className="mt-3 break-words text-base font-semibold leading-relaxed text-slate-950 lg:text-lg">
                  info@morolakecaresinitiatives.com
                </p>
              </a>
              <a
                href="tel:+2348090175385"
                className="card-surface flex h-full min-w-0 flex-col bg-white/[0.92]"
              >
                <p className="soft-label">Phone</p>
                <p className="mt-3 text-lg font-semibold leading-relaxed text-slate-950">
                  +234 809 017 5385
                </p>
              </a>
              <div className="card-surface min-w-0 bg-white/[0.92] md:col-span-2">
                <p className="soft-label">Address</p>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">
                  No. 8, StopGap Consulting
                  <br />
                  Opposite Federal Secretariat
                  <br />
                  Ikolaba Road, Ibadan
                  <br />
                  Oyo State, Nigeria
                </p>
              </div>
              <div className="card-surface min-w-0 bg-white/[0.92] md:col-span-2">
                <p className="soft-label">Office hours</p>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="section-shell overflow-hidden p-5"
          >
            <div className="image-frame relative min-h-[360px] lg:min-h-[520px]">
              <Image
                src="/legacy/bg/26.png"
                alt="Morolake Cares community gathering"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-8">
                <p className="soft-label text-white/70">Stay connected</p>
                <p className="mt-3 max-w-lg text-2xl font-display font-bold">
                  Partnerships and community support are a big part of how the work keeps growing.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <a
                href="https://www.facebook.com/Morolake-Cares-Inititiatives-100262959291475/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface flex h-full min-w-0 flex-col bg-white/[0.92]"
              >
                <p className="soft-label">Facebook</p>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  Follow updates from outreach and event coverage.
                </p>
              </a>
              <a
                href="https://www.instagram.com/morolakecares/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface flex h-full min-w-0 flex-col bg-white/[0.92]"
              >
                <p className="soft-label">Instagram</p>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  See photo highlights and recent community moments.
                </p>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-shell mt-10 p-6 sm:p-8 lg:mt-12 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div className="space-y-4">
              <p className="eyebrow">Leave A Message</p>
              <h2 className="heading-md text-slate-950">Send a message to the team.</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Your email address will not be published. Required fields are marked.
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                Sending this form opens a pre-filled email draft to Morolake Cares Initiatives.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <label className="min-w-0">
                <span className="soft-label">Full Name*</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 outline-none transition focus:border-purple focus:ring-4 focus:ring-purple/10"
                />
              </label>

              <label className="min-w-0">
                <span className="soft-label">Email*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 outline-none transition focus:border-purple focus:ring-4 focus:ring-purple/10"
                />
              </label>

              <label className="min-w-0 sm:col-span-2">
                <span className="soft-label">Phone*</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 outline-none transition focus:border-purple focus:ring-4 focus:ring-purple/10"
                />
              </label>

              <label className="min-w-0 sm:col-span-2">
                <span className="soft-label">Message*</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-base leading-relaxed text-slate-900 outline-none transition focus:border-purple focus:ring-4 focus:ring-purple/10"
                />
              </label>

              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
