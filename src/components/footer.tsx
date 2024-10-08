import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import LOGO from '@/assets/LOGO-w.svg'

const footerSections = [
  {
    title: 'COMPANY',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Partners', href: '/partners' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQs', href: '/faqs' },
    ],
  },
  {
    title: 'INDUSTRIES',
    links: [
      { name: 'Mining', href: '/industries/mining' },
      { name: 'Energy', href: '/industries/energy' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Cleaning', href: '/industries/cleaning' },
      { name: 'Construction', href: '/industries/construction' },
      { name: 'Others', href: '/industries/others' },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      { name: 'Technical Consulting', href: '/services/technical-consulting' },
      { name: 'Safety Training', href: '/services/safety-training' },
      { name: 'Customer Support', href: '/services/customer-support' },
      { name: 'Equipment Maintenance', href: '/services/equipment-maintenance' },
    ],
  },
]

const socialMedia = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
]

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-8 md:px-[10%]">
        <div className="flex flex-wrap justify-center gap-8 md:flex-nowrap md:gap-16">
          <div className="order-3 flex flex-col md:order-1">
            <Image className="w-[100px] md:w-[200px]" src={LOGO} alt="Company Logo" />
            <nav aria-label="Company links" className="mt-4">
              <h2 className="mb-4 text-lg font-bold">COMPANY</h2>
              <ul className="space-y-2">
                {footerSections[0].links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-red-800 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {footerSections.slice(1).map((section, index) => (
            <div key={section.title} className={`order-${index + 1} flex flex-col md:order-${index + 2}`}>
              <nav aria-label={`${section.title.toLowerCase()} links`}>
                <h2 className="mb-4 text-lg font-bold">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-red-800 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}

          <div className="order-4 flex flex-col md:order-4">
            <nav aria-label="Social media links">
              <h2 className="mb-4 text-lg font-bold">SOCIAL MEDIA</h2>
              <ul className="flex gap-4">
                {socialMedia.map((platform) => (
                  <li key={platform.name}>
                    <Link href={platform.href} aria-label={platform.name} className="hover:text-red-800 transition-colors">
                      <platform.icon size={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link href="/contact" className="mt-4 hover:text-red-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Dina Holding. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer