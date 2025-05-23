import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b bg-white shadow-sm'>
      <div className='wrapper flex items-center justify-between py-2'>
        <Link href='/' className='w-28'>
          <Image
            src='/assets/images/logo.svg'
            width={100}
            height={30}
            alt='Evently logo'
            className='object-contain'
          />
        </Link>

        <SignedIn>
          <nav className='hidden md:flex items-center gap-4 max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>

        <div className='flex items-center justify-end gap-2'>
          <nav className='flex items-center gap-2'>
            <Link
              href='/about'
              className='text-sm font-medium text-gray-700 hover:text-blue-500 px-2 py-1 transition-colors'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-sm font-medium text-gray-700 hover:text-blue-500 px-2 py-1 transition-colors'
            >
              Contact
            </Link>
          </nav>

          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className='rounded-full text-sm font-medium text-gray-700 hover:text-blue-500 px-3 py-1 border border-gray-300 hover:border-blue-500 transition-colors'
            >
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
