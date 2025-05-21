import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href='/' className='w-36'>
          <Image
            src='/assets/images/logo.svg'
            width={128}
            height={38}
            alt='Evently logo'
          />
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>

        <div className='flex items-center justify-end gap-3'>
          <nav className='flex gap-3'>
            <Link
              href='/about'
              className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
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
              className='rounded-full text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
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
