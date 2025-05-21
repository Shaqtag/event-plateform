'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Animation variants
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

// Carousel images
const images = [
  {
    src: '/assets/images/9963.jpg',
    alt: 'Afritude event celebration',
  },
  {
    src: '/assets/images/10058.jpg',
    alt: 'Afritude cultural festival',
  },
  {
    src: '/assets/images/1255.jpg',
    alt: 'Afritude community gathering',
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/assets/images/placeholder.jpg'
  }

  return (
    <section className='bg-orange-50 bg-afritude-pattern bg-contain py-5 md:py-10'>
      <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
        <motion.div
          className='flex flex-col justify-center gap-8'
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
        >
          <motion.h1 className='h1-bold text-amber-900' variants={fadeInUp}>
            Celebrate Afritude: Host, Connect, and Thrive!
          </motion.h1>
          <motion.p
            className='p-regular-20 md:p-regular-24 text-gray-700'
            variants={fadeInUp}
          >
            Join our vibrant community to create and discover events inspired by
            African culture, guided by 3,168+ mentors across the globe.
          </motion.p>
          <motion.div variants={fadeInUp} whileHover='hover'>
            <Button
              size='lg'
              asChild
              className='button w-full sm:w-fit bg-orange-600 hover:bg-yellow-600 text-white'
            >
              <Link href='#events' aria-label='Explore Afritude events'>
                Explore Now
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className='relative overflow-hidden rounded-lg'
          variants={slideInRight}
          initial='hidden'
          animate='visible'
        >
          <motion.div
            className='flex'
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {images.map((image, index: number) => (
              <div key={index} className='min-w-full'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-lg border border-gray-200'
                  onError={handleImageError}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full'
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            aria-label='Previous image'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>
          <motion.button
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full'
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            aria-label='Next image'
          >
            <motion.svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </motion.svg>
          </motion.button>

          {/* Navigation Dots */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
            {images.map((_, index: number) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-orange-600' : 'bg-gray-400'
                }`}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
