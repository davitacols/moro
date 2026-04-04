'use client'

const stats = [
  {
    value: '5,000+',
    label: 'Girls Educated',
  },
  {
    value: '200+',
    label: 'Schools Supported',
  },
  {
    value: '50M+',
    label: 'Impact Value',
  },
]

export default function StatsStrip() {
  return (
    <section className="pb-6 sm:pb-10">
      <div className="section-container">
        <div className="section-shell bg-white/[0.92] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="font-display text-[clamp(3.25rem,12vw,5.5rem)] font-black leading-none text-purple">
                  {stat.value}
                </p>
                <p className="mt-4 text-xl uppercase tracking-[0.18em] text-slate-600 sm:text-2xl">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
