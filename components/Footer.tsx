export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Impact', href: '#impact' },
    { name: 'Events', href: '#events' },
    { name: 'Donate', href: 'https://paystack.com/pay/morolakecares' },
  ]

  const getInvolvedLinks = [
    { name: 'Volunteer', href: '#contact' },
    { name: 'Partner With Us', href: '#contact' },
    { name: 'Sponsor a Girl', href: '#contact' },
    { name: 'Corporate Giving', href: '#contact' },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">Morolake Cares Initiatives</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dedicated to educating the girl-child, school dropouts, and underprivileged girls 
              to improve their lifestyle and transform communities across Nigeria.
            </p>
            <p className="text-secondary font-medium">Every life matters.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {getInvolvedLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <h5 className="font-semibold mb-2">Address</h5>
              <p className="text-gray-300 text-sm">
                No. 8, StopGap Consulting<br />
                Opposite Federal Secretariat<br />
                Ikolaba Road, Ibadan<br />
                Oyo State, Nigeria
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Contact</h5>
              <p className="text-gray-300 text-sm">
                <a href="mailto:info@morolakecaresinitiatives.com" className="hover:text-secondary transition-colors">
                  info@morolakecaresinitiatives.com
                </a><br />
                <a href="tel:+2348090175385" className="hover:text-secondary transition-colors">
                  +234 809 017 5385
                </a>
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Hours</h5>
              <p className="text-gray-300 text-sm">
                Monday - Friday<br />
                9:00 AM - 5:00 PM
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <a
                href="https://www.facebook.com/Morolake-Cares-Inititiatives-100262959291475/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Morolake Cares Initiatives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}