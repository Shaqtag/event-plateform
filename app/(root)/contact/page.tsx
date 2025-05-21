'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion' // Use standard import

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const buttonHover = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
}

const linkHover = {
  hover: { scale: 1.05, color: '#2563EB', transition: { duration: 0.3 } }, // Matches hover:text-blue-600
}

export default function Contact() {
  return (
    <>
      <main>
        <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
          <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
            <motion.div
              className='flex flex-col justify-center gap-8'
              variants={fadeInUp}
              initial='hidden'
              animate='visible'
            >
              <motion.h1 className='h1-bold' variants={fadeInUp}>
                Get in Touch with Evently
              </motion.h1>
              <motion.p
                className='p-regular-20 md:p-regular-24'
                variants={fadeInUp}
              >
                Have questions or need support? We're here to help you connect,
                plan, and celebrate your events. Reach out to our team for
                assistance or to share your ideas!
              </motion.p>
              <motion.div variants={fadeInUp} whileHover='hover'>
                <Button size='lg' asChild className='button w-full sm:w-fit'>
                  <Link href='/sign-in' aria-label='Join our community'>
                    Join Our Community
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial='hidden'
              animate='visible'
            >
              <Image
                src='/assets/images/contact.png'
                alt='Contact Evently'
                width={1000}
                height={1000}
                className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
              />
            </motion.div>
          </div>
        </section>

        <section className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
          <motion.h2
            className='h2-bold'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
          >
            Contact Us
          </motion.h2>
          <motion.div
            className='flex flex-col gap-6'
            variants={staggerContainer}
            initial='hidden'
            animate='visible'
          >
            <motion.div className='flex flex-col gap-2' variants={fadeInUp}>
              <h3 className='h3-bold text-gray-800'>Email Us</h3>
              <p className='p-regular-16 text-gray-600'>
                Reach out to our support team at{' '}
                <motion.span whileHover='hover' variants={linkHover}>
                  <Link
                    href='mailto:support@evently.com'
                    className='text-blue-600 hover:underline'
                    aria-label='Email support'
                  >
                    support@evently.com
                  </Link>
                </motion.span>
              </p>
            </motion.div>
            <motion.div className='flex flex-col gap-2' variants={fadeInUp}>
              <h3 className='h3-bold text-gray-800'>Follow Us</h3>
              <div className='flex gap-4'>
                <motion.span whileHover='hover' variants={linkHover}>
                  <Link
                    href='https://twitter.com/evently'
                    className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
                    aria-label='Follow on Twitter'
                  >
                    Twitter
                  </Link>
                </motion.span>
                <motion.span whileHover='hover' variants={linkHover}>
                  <Link
                    href='https://facebook.com/evently'
                    className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
                    aria-label='Follow on Facebook'
                  >
                    Facebook
                  </Link>
                </motion.span>
                <motion.span whileHover='hover' variants={linkHover}>
                  <Link
                    href='https://instagram.com/evently'
                    className='text-base font-bold text-gray-800 hover:text-blue-600 px-2 py-1'
                    aria-label='Follow on Instagram'
                  >
                    Instagram
                  </Link>
                </motion.span>
              </div>
            </motion.div>
            <motion.div className='flex flex-col gap-2' variants={fadeInUp}>
              <h3 className='h3-bold text-gray-800'>Visit Us</h3>
              <p className='p-regular-16 text-gray-600'>
                Evently Headquarters
                <br />
                123 Community Lane, Suite 456
                <br />
                San Francisco, CA 94105
              </p>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} whileHover='hover'>
            <Button size='lg' asChild className='button w-full sm:w-fit'>
              <Link href='#events' aria-label='Explore events'>
                Explore Events
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
    </>
  )
}
