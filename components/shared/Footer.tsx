'use client'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-50 py-10'>
      <div className='wrapper grid grid-cols-1 gap-8 md:grid-cols-3'>
        <div className='flex flex-col gap-4'>
          <Link href='/' className='w-36'>
            <Image
              src='/assets/images/logo.svg'
              alt='Evently logo'
              width={128}
              height={38}
            />
          </Link>
          <p className='p-regular-16 text-gray-600'>
            Evently: Your platform for hosting, connecting, and celebrating
            events worldwide.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='h3-bold text-gray-800'>Quick Links</h3>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link
                href='/'
                className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href='/sign-in'
                className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='h3-bold text-gray-800'>Get in Touch</h3>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link
                href='mailto:support@evently.com'
                className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
              >
                support@evently.com
              </Link>
            </li>
            <li className='flex gap-4'>
              <Link
                href='https://twitter.com/evently'
                className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
              >
                Twitter
              </Link>
              <Link
                href='https://facebook.com/evently'
                className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
              >
                Facebook
              </Link>
              <Link
                href='https://instagram.com/evently'
                className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='wrapper mt-8 border-t pt-4 text-center'>
        <p className='p-regular-14 text-gray-600'>
          © {new Date().getFullYear()} Evently. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
