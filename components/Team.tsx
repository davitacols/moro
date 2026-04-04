'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

type Member = {
  name: string
  role: string
  bio?: string
  image?: string
  initials?: string
  ctaLabel?: string
  ctaHref?: string
}

const founderCard: Member = {
  name: 'Oladiwura Morolake Laniyan',
  role: 'Founder',
  image: '/legacy/bg/mla.jpeg',
  ctaLabel: 'Meet Our Founder',
  ctaHref: '#founder',
}

const trustees: Member[] = [
  {
    name: 'Rev Fr Joachim Akee',
    role: 'Trustee',
    image: '/legacy/bg/rja.jpg',
    bio: 'Catholic Archdiocese of Ibadan. Father Joachim is devoted to charitable works in all places of his postings, a great fan of sports and a one-time captain of Tiger Golf Club Ibadan. A chaplin to the Children at juvenile home at Eleyele Ibadan. Achieved a BA Philosophy and Bachelor of Theology, Rome.',
  },
  {
    name: 'Lanrewaju Laniyan',
    role: 'Trustee',
    image: '/legacy/bg/mll.jpg',
    bio: 'Over 40 years successful career in Marketing and General management up to senior management in various manufacturing companies. He later served in the public sector at the Polytechnic Ibadan up to the rank of Chief Lecturer and served as Director of Continuing Education Centre. He has experience in diverse board of Trustees. He currently manages two organisations of his Wellness Outfit and a Management Consult.',
  },
]

const nonExecutiveMembers: Member[] = [
  {
    name: 'Florence Alara',
    role: 'Non Executive Member',
    image: '/legacy/bg/fa.jpg',
    bio: "Proprietress and Director of Brighton Hall Nursery and Primary School Lagos, with over 15 year's experience in Financial Services where she was able to Steamline processes and maximise efficiency. Florence is a fervent believe in lifelong learning and education, graduated with an honour's degree in computing and an MBA in Human Resources Management.",
  },
  {
    name: 'Osaheni Ogunbor',
    role: 'Non Executive Member',
    image: '/legacy/bg/moos.jpg',
    bio: 'CEO EASYFIX GROUP and the Group Executive Director Oils AND Fats Sector of NosakGroup founded 1984. In addition holds the following positions, Director at Credit Wise Financial limited, Member at the centre for management and development Nigeria. Fellow of (ICA) The institute of Credit Administration Nigeria. Studied Business information Systems Bolton University, Ecommerce and internet Systems at University of Portsmouth United Kingdom.',
  },
  {
    name: 'Dr. Ashok Kumar',
    role: 'Non Executive Member',
    image: '/legacy/bg/ash.jpg',
    bio: 'Medical Consultant and a Special Educator. Trustee for Montessori Education for Autism in the UK. Professional background as a Consultant Psychologist for children with learning disorders and behavioural intervention. His aptitude includes child development, preparation for life and skill development.',
  },
  {
    name: 'Adetoun Adetona-Daramola',
    role: 'Non Executive Member',
    image: '/legacy/bg/aada.jpg',
    bio: 'Entrepreneur and Founder of COD Travels, a boutique travel management service for corporates and individual. Founder of Sidi Homecare Ltd, manufactures home cleaning products across Nigeria. She has a degree in Accounting and Finance. Masters in International Business both from top UK universities, with over 10 years experience in the finance industry in Nigeria.',
  },
  {
    name: 'Abiola Afolabi Taylor',
    role: 'Non Executive Member',
    image: '/legacy/bg/aats.jpg',
    bio: 'Director Thirteen Scribes Nigeria. Programme Coordinator, Western Nigeria Education Upgrade Programme (EUP). Digital Transformation and Solutions Architect with over 15years in providing business development, technical engineering leadership training and strategic framework. Studied Sociology at the University of Ibadan.',
  },
  {
    name: 'Kayleigh Deroche-Gerber',
    role: 'Non Executive Member',
    image: '/legacy/bg/kdg.jpg',
    bio: 'Clinical Specialists social welfare registered in UK. Passionate on supporting vulnerable people. Focused on therapeutic and practical strategies to help individuals in the community develop the skills and resources they need to improve their overall quality of life.',
  },
]

const mediaSpokesperson: Member[] = [
  {
    name: 'Hammed Hamzat',
    role: 'Media Spokesperson',
    initials: 'HH',
    bio: "Holds a Bachelor Degree (B.Ed) Educational Management and Economics from University of Ibadan. He is a Master's Degree holder from the University of Ibadan. He has over nine years experience in print and online journalism. He is a content writer for Media Bypass, U.S based online newspaper, Opera News Hub and Editor-in-chief of FreshPage.",
  },
]

function MemberCard({ member }: { member: Member }) {
  const hasImage = Boolean(member.image)

  return (
    <article className="card-surface h-full bg-white/[0.92]">
      <div className="image-frame relative h-[280px] bg-gradient-to-br from-[#f7ecfb] via-white to-[#f4efe8] sm:h-[320px]">
        {hasImage ? (
          <div className="absolute inset-3 sm:inset-4">
            <Image
              src={member.image as string}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-contain object-center"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-5xl font-display font-bold text-purple">
            {member.initials}
          </div>
        )}
      </div>
      <div className="mt-5">
        <p className="soft-label">{member.role}</p>
        <h3 className="mt-2 text-xl font-display font-bold text-slate-950 sm:text-2xl">
          {member.name}
        </h3>
        {member.bio ? (
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {member.bio}
          </p>
        ) : null}
        {member.ctaLabel && member.ctaHref ? (
          <a href={member.ctaHref} className="btn-secondary mt-5">
            {member.ctaLabel}
          </a>
        ) : null}
      </div>
    </article>
  )
}

function MemberGroup({
  title,
  members,
  columns,
}: {
  title: string
  members: Member[]
  columns: string
}) {
  return (
    <section className="mt-12 sm:mt-14">
      <div className="mb-6">
        <p className="eyebrow">{title}</p>
      </div>
      <div className={columns}>
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <MemberCard member={member} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="section-padding pt-8">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow">Our Team</p>
            <h2 className="heading-lg text-slate-950">
              Meet the team behind MorolakeCares.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Experienced trustees, advisors, and supporters helping drive the mission forward.
          </p>
        </motion.div>

        <section className="mt-12 max-w-xl sm:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <MemberCard member={founderCard} />
          </motion.div>
        </section>

        <MemberGroup
          title="Trustee"
          members={trustees}
          columns="grid gap-6 md:grid-cols-2"
        />

        <MemberGroup
          title="Non Executive Members"
          members={nonExecutiveMembers}
          columns="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        />

        <MemberGroup
          title="Media Spokesperson"
          members={mediaSpokesperson}
          columns="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        />
      </div>
    </section>
  )
}
