import Image from 'next/image'
import Link from 'next/link'

interface CollectionProps {
  data: any[] // Remplacer par le type Event si vous utilisez TypeScript
  emptyTitle: string
  emptyStateSubtext: string
  collectionType: string
  limit: number
  page: number
  totalPages?: number
}

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  limit,
  page,
  totalPages = 0,
}: CollectionProps) => {
  return (
    <div className='wrapper'>
      {data?.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {data.map((event) => (
            <div
              key={event.id}
              className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
            >
              <Image
                src={event.imageUrl || '/assets/images/placeholder.jpg'}
                width={400}
                height={200}
                alt={event.title}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-800 truncate'>
                  {event.title}
                </h3>
                <p className='text-sm text-gray-600'>
                  {new Date(event.date).toLocaleDateString('fr-FR', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <p className='text-sm text-gray-500 line-clamp-2'>
                  {event.description}
                </p>
                <Link
                  href={`/events/${event.id}`}
                  className='mt-3 inline-block text-blue-500 hover:text-blue-700 font-medium'
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center gap-4 py-8'>
          <Image
            src='/assets/images/no-event.svg'
            width={250}
            height={250}
            alt='Aucun événement disponible'
            className='object-contain'
          />
          <p className='text-gray-600 text-center text-lg font-medium'>
            {emptyStateSubtext}
          </p>
        </div>
      )}

      {data?.length > 0 && totalPages > 1 && (
        <div className='flex justify-center gap-4 mt-6'>
          {page > 1 && (
            <Link
              href={`?page=${page - 1}`}
              className='text-blue-500 hover:text-blue-700 font-medium'
            >
              Précédent
            </Link>
          )}
          {page < totalPages && (
            <Link
              href={`?page=${page + 1}`}
              className='text-blue-500 hover:text-blue-700 font-medium'
            >
              Suivant
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

export default Collection
