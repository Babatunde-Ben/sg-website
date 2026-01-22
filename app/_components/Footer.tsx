'use client'

import Link from 'next/link'
import DesktopLogo from '@/app/_assets/SVGs/desktop-logo.svg'

const Footer = () => {
    const footerItems = [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/about',
        },
        {
          label: 'Speaking',
          href: '/speaking',
        },
        {
          label: 'Gallery',
          href: '/about#gallery',
        },
        
      ]
  return (
    <footer className='flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-20'>
      <DesktopLogo className="w-40" />
      <ul className="hidden md:flex items-center gap-6 text-white">
        {footerItems.map((item) => (
          <li key={item.href} className='text-lg'>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
