import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold'>
              About Evently: Connecting Communities Through Events
            </h1>
            <p className='p-regular-20 md:p-regular-24'>
              Evently is your go-to platform for hosting, discovering, and
              celebrating events that bring people together. With a global
              community of over 3,168+ mentors and event organizers, we empower
              individuals and organizations to create memorable experiences. Our
              mission is to make event planning seamless and foster connections
              across the world.
            </p>
            <Button size='lg' asChild className='button w-full sm:w-fit'>
              <Link href='/sign-in'>Join Our Community</Link>
            </Button>
          </div>

          <Image
            src='/assets/images/about.png'
            alt='About Evently'
            width={1000}
            height={1000}
            className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
          />
        </div>
      </section>

      <section className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
        <h2 className='h2-bold'>Our Mission & Vision</h2>
        <p className='p-regular-20'>
          At Evently, we believe in the power of events to build communities and
          spark joy. Our platform provides tools to simplify event creation,
          promotion, and management, so you can focus on what matters
          most—connecting with others. Whether you're hosting a workshop,
          conference, or celebration, Evently is here to support you every step
          of the way.
        </p>
        <Button size='lg' asChild className='button w-full sm:w-fit'>
          <Link href='#events'>Explore Events</Link>
        </Button>
      </section>

      <section className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
        <h2 className='h2-bold'>Meet Our Team</h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md'>
            <Image
              src='/assets/images/team-member1.png'
              alt='Team Member 1'
              width={150}
              height={150}
              className='rounded-full object-cover'
            />
            <h3 className='h3-bold text-gray-800'>Jane Doe</h3>
            <p className='p-regular-16 text-gray-600'>Founder & CEO</p>
            <p className='p-regular-14 text-gray-500 text-center'>
              Jane leads Evently with a passion for connecting communities
              through innovative event solutions.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md'>
            <Image
              src='/assets/images/team-member2.png'
              alt='Team Member 2'
              width={150}
              height={150}
              className='rounded-full object-cover'
            />
            <h3 className='h3-bold text-gray-800'>John Smith</h3>
            <p className='p-regular-16 text-gray-600'>
              Chief Technology Officer
            </p>
            <p className='p-regular-14 text-gray-500 text-center'>
              John drives the technical vision, ensuring Evently's platform is
              seamless and scalable.
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md'>
            <Image
              src='/assets/images/team-member3.png'
              alt='Team Member 3'
              width={150}
              height={150}
              className='rounded-full object-cover'
            />
            <h3 className='h3-bold text-gray-800'>Emily Chen</h3>
            <p className='p-regular-16 text-gray-600'>Head of Community</p>
            <p className='p-regular-14 text-gray-500 text-center'>
              Emily fosters our global community, empowering organizers to
              create impactful events.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
