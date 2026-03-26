const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Impact', href: '/#impact' },
  { name: 'Events', href: '/#events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Donate', href: 'https://paystack.com/pay/morolakecares' },
]

const getInvolvedLinks = [
  {
    name: 'Volunteer',
    href: 'mailto:info@morolakecaresinitiatives.com?subject=Volunteer%20with%20Morolake%20Cares',
  },
  {
    name: 'Partner With Us',
    href: 'mailto:info@morolakecaresinitiatives.com?subject=Partner%20with%20Morolake%20Cares',
  },
  { name: 'Sponsor a Girl', href: 'https://paystack.com/pay/morolakecares' },
  {
    name: 'Corporate Giving',
    href: 'mailto:info@morolakecaresinitiatives.com?subject=Corporate%20Giving%20with%20Morolake%20Cares',
  },
]

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="section-container">
        <div className="section-shell overflow-hidden bg-[#17101f] p-8 text-white lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.75fr_0.75fr]">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl font-bold">Morolake Cares Initiatives</h3>
              <p className="mt-5 text-lg leading-relaxed text-white/[0.72]">
                Morolake Cares Initiatives aims to educate the girl-child, support school dropouts,
                and improve the lives of underprivileged girls and families through practical care.
              </p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.26em] text-[#f2bb52]">
                Every life matters.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 transition-colors duration-300 hover:text-white"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Get Involved</h4>
              <ul className="mt-5 space-y-3">
                {getInvolvedLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 transition-colors duration-300 hover:text-white"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
            <div className="min-w-0">
              <h5 className="font-semibold">Address</h5>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                No. 8, StopGap Consulting
                <br />
                Opposite Federal Secretariat
                <br />
                Ikolaba Road, Ibadan
                <br />
                Oyo State, Nigeria
              </p>
            </div>
            <div className="min-w-0">
              <h5 className="font-semibold">Email</h5>
              <a
                href="mailto:info@morolakecaresinitiatives.com"
                className="mt-2 inline-flex break-words text-sm leading-relaxed text-white/70 transition-colors duration-300 hover:text-white"
              >
                info@morolakecaresinitiatives.com
              </a>
            </div>
            <div className="min-w-0">
              <h5 className="font-semibold">Phone</h5>
              <a
                href="tel:+2348090175385"
                className="mt-2 inline-flex text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                +234 809 017 5385
              </a>
            </div>
            <div className="min-w-0">
              <h5 className="font-semibold">Follow</h5>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                <a
                  href="https://www.facebook.com/Morolake-Cares-Inititiatives-100262959291475/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors duration-300 hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/morolakecares/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors duration-300 hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com/morolake_cares?t=71SYN6PL-B_WEO8cNG1U7g&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors duration-300 hover:text-white"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-white/[0.55]">
              Copyright 2026 Morolake Cares Initiatives. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
