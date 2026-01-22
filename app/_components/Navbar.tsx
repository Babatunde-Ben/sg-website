'use client'

import DesktopLogo from '@/app/_assets/SVGs/desktop-logo.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Navbar = () => {

const navItems = [
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
  {
    label: 'Podcasts',
    href: '/podcasts',
  },
]
  return (
    <nav className="absolute top-12 left-0 w-full flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-20">
      <DesktopLogo className="w-40" />
      <ul className="hidden md:flex items-center gap-6 text-white">
        {navItems.map((item) => (
          <li key={item.href} className='text-xl'>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <Button>Get in touch</Button>
    </nav>
  )
}

export default Navbar
