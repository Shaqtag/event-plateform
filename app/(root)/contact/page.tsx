'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <main>
        <section className="bg-orange-50 bg-[url('/assets/images/african-pattern.png')] bg-contain py-8 md:py-12 animate-fade-in">
          <div className='wrapper grid grid-cols-1 gap-8 md:grid-cols-2 2xl:gap-12'>
            <div className='flex flex-col justify-center gap-8 animate-slide-up'>
              <h1 className='h1-bold text-orange-700 font-ubuntu'>
                Contactez Evently
              </h1>
              <p className='p-regular-20 md:p-regular-24 text-gray-700'>
                Une question ou besoin d'aide ? Notre équipe est là pour vous
                accompagner dans la planification et la célébration de vos
                événements. Contactez-nous pour partager vos idées ou obtenir de
                l'assistance !
              </p>
              <Button
                size='lg'
                asChild
                className='button w-full sm:w-fit bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-transform duration-300'
              >
                <Link href='/sign-in' aria-label='Rejoindre notre communauté'>
                  Rejoignez notre communauté
                </Link>
              </Button>
            </div>

            <div className='relative animate-scale-in'>
              <Image
                src='/assets/images/contact-african.png'
                alt="Contactez l'équipe Evently"
                width={1000}
                height={1000}
                className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-lg shadow-lg'
              />
              <div className='absolute inset-0 bg-orange-500 opacity-10 rounded-lg' />
            </div>
          </div>
        </section>

        <section className='wrapper my-12 flex flex-col gap-10 md:gap-14 animate-fade-in'>
          <h2 className='h2-bold text-orange-700 font-ubuntu'>
            Nous contacter
          </h2>
          <div className='flex flex-col gap-8'>
            <div
              className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg animate-slide-up'
              style={{ animationDelay: '0ms' }}
            >
              <Image
                src='/assets/icons/email.svg'
                alt='Icône email'
                width={24}
                height={24}
                className='mt-1'
              />
              <div>
                <h3 className='h3-bold text-gray-800'>Envoyez-nous un email</h3>
                <p className='p-regular-16 text-gray-600'>
                  Contactez notre équipe à{' '}
                  <Link
                    href='mailto:support@evently.com'
                    className='text-orange-500 hover:text-orange-600 hover:underline transition-colors duration-300'
                    aria-label="Envoyer un email à l'équipe support"
                  >
                    support@evently.com
                  </Link>
                </p>
              </div>
            </div>
            <div
              className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg animate-slide-up'
              style={{ animationDelay: '200ms' }}
            >
              <Image
                src='/assets/icons/social.svg'
                alt='Icône réseaux sociaux'
                width={24}
                height={24}
                className='mt-1'
              />
              <div>
                <h3 className='h3-bold text-gray-800'>Suivez-nous</h3>
                <div className='flex gap-4 mt-2'>
                  <Link
                    href='https://twitter.com/evently'
                    className='text-orange-500 hover:text-orange-600 font-bold hover:underline transition-colors duration-300'
                    aria-label='Suivre sur Twitter'
                  >
                    Twitter
                  </Link>
                  <Link
                    href='https://facebook.com/evently'
                    className='text-orange-500 hover:text-orange-600 font-bold hover:underline transition-colors duration-300'
                    aria-label='Suivre sur Facebook'
                  >
                    Facebook
                  </Link>
                  <Link
                    href='https://instagram.com/evently'
                    className='text-orange-500 hover:text-orange-600 font-bold hover:underline transition-colors duration-300'
                    aria-label='Suivre sur Instagram'
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
            <div
              className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg animate-slide-up'
              style={{ animationDelay: '400ms' }}
            >
              <Image
                src='/assets/icons/location.svg'
                alt='Icône localisation'
                width={24}
                height={24}
                className='mt-1'
              />
              <div>
                <h3 className='h3-bold text-gray-800'>Visitez-nous</h3>
                <p className='p-regular-16 text-gray-600'>
                  Siège d'Evently
                  <br />
                  123 Community Lane, Suite 456
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
          <Button
            size='lg'
            asChild
            className='button w-full sm:w-fit bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-transform duration-300 animate-slide-up'
            style={{ animationDelay: '600ms' }}
          >
            <Link href='#events' aria-label='Explorer les événements'>
              Explorer les événements
            </Link>
          </Button>
        </section>
      </main>
    </>
  )
}
