import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About | Evently',
  description:
    'Learn about Evently, your go-to platform for hosting and discovering events that connect communities worldwide.',
}

export default function About() {
  return (
    <>
      {/* Section Hero */}
      <section className="bg-orange-50 bg-[url('/assets/images/african-pattern.png')] bg-contain py-8 md:py-12 animate-fade-in">
        <div className='wrapper grid grid-cols-1 gap-8 md:grid-cols-2 2xl:gap-12'>
          <div className='flex flex-col justify-center gap-8 animate-slide-up'>
            <h1 className='h1-bold text-orange-700'>
              À propos d'Evently : Unir les communautés à travers l'Afrique et
              au-delà
            </h1>
            <p className='p-regular-20 md:p-regular-24 text-gray-700'>
              Evently est votre plateforme pour organiser, découvrir et célébrer
              des événements qui rassemblent les gens. Avec une communauté
              mondiale de plus de 3 168 mentors et organisateurs, nous donnons
              vie à des expériences mémorables. Notre mission est de simplifier
              la planification d'événements et de tisser des liens culturels
              vibrants, inspirés par l'énergie de l'Afrique.
            </p>
            <Button
              size='lg'
              asChild
              className='button w-full sm:w-fit bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-transform duration-300'
            >
              <Link href='/sign-in'>Rejoignez notre communauté</Link>
            </Button>
          </div>

          <div className='relative animate-scale-in'>
            <Image
              src='/assets/images/about-african.png'
              alt="À propos d'Evently"
              width={1000}
              height={1000}
              className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-lg shadow-lg'
            />
            <div className='absolute inset-0 bg-orange-500 opacity-10 rounded-lg' />
          </div>
        </div>
      </section>

      {/* Section Mission & Vision */}
      <section className='wrapper my-12 flex flex-col gap-10 md:gap-14 animate-fade-in'>
        <h2 className='h2-bold text-orange-700'>Notre mission et vision</h2>
        <p className='p-regular-20 text-gray-700'>
          Chez Evently, nous célébrons la puissance des événements pour
          renforcer les communautés et partager la joie. Inspirés par la
          richesse culturelle africaine, nous offrons des outils pour simplifier
          la création, la promotion et la gestion d'événements. Que ce soit un
          atelier, une conférence ou une fête traditionnelle, Evently vous
          accompagne à chaque étape avec une touche d'africtude.
        </p>
        <Button
          size='lg'
          asChild
          className='button w-full sm:w-fit bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-transform duration-300'
        >
          <Link href='/#events'>Explorer les événements</Link>
        </Button>
      </section>

      {/* Section Équipe */}
      <section className='wrapper my-12 flex flex-col gap-10 md:gap-14 animate-fade-in'>
        <h2 className='h2-bold text-orange-700'>Rencontrez notre équipe</h2>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              name: 'Aisha Diallo',
              role: 'Fondatrice & PDG',
              description:
                'Aisha dirige Evently avec une passion pour connecter les communautés africaines à travers des événements innovants.',
              image: '/assets/images/team-aisha.png',
            },
            {
              name: 'Kwame Mensah',
              role: 'Directeur Technologique',
              description:
                'Kwame façonne la vision technologique, rendant la plateforme Evently fluide et accessible.',
              image: '/assets/images/team-kwame.png',
            },
            {
              name: 'Fatima Sow',
              role: 'Responsable Communauté',
              description:
                'Fatima anime notre communauté mondiale, inspirant des événements vibrants et inclusifs.',
              image: '/assets/images/team-fatima.png',
            },
          ].map((member, index) => (
            <div
              key={member.name}
              className='flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg border-t-4 border-orange-500 hover:scale-105 transition-transform duration-300 animate-slide-up'
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className='rounded-full object-cover border-4 border-orange-300'
              />
              <h3 className='h3-bold text-gray-800'>{member.name}</h3>
              <p className='p-regular-16 text-orange-600'>{member.role}</p>
              <p className='p-regular-14 text-gray-600 text-center'>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
