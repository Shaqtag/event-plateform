'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export default function Testimonials() {
  return (
    <section className='bg-orange-50 bg-afritude-pattern bg-contain py-10 md:py-16'>
      <div className='wrapper flex flex-col gap-8 md:gap-12'>
        <motion.h2
          className='h2-bold text-amber-900 text-center'
          variants={fadeInUp}
          initial='hidden'
          animate='visible'
        >
          What Our Clients Say
        </motion.h2>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
        >
          <motion.div
            className='flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md'
            variants={fadeInUp}
          >
            <Image
              src='/assets/images/client1.png'
              alt='Client Amina'
              width={80}
              height={80}
              className='rounded-full object-cover'
            />
            <h3 className='h3-bold text-gray-800'>Amina Diallo</h3>
            <p className='p-regular-16 text-gray-600 text-center'>
              "Evently made hosting our cultural festival a breeze! The
              platform's vibrant community helped us connect with amazing
              mentors."
            </p>
          </motion.div>
          <motion.div
            className='flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md'
            variants={fadeInUp}
          >
            <Image
              src='/assets/images/client2.png'
              alt='Client Kwame'
              width={80}
              height={80}
              className='rounded-full object-cover'
            />
            <h3 className='h3-bold text-gray-800'>Kwame Osei</h3>
            <p className='p-regular-16 text-gray-600 text-center'>
              "I organized a music workshop with Evently, and the support was
              incredible. Our event was a huge success!"
            </p>
          </motion.div>
          <motion.div
            className='flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md'
            variants={fadeInUp}
          >
            <Image
              src='/assets/images/client3.png'
              alt='Client Zainab'
              width={80}
              height={80}
              className='rounded-full object-cover'
            />
            <h3 className='h3-bold text-gray-800'>Zainab Musa</h3>
            <p className='p-regular-16 text-gray-600 text-center'>
              "Thanks to Evently, our art exhibition reached a global audience.
              The platform is intuitive and inspiring!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
