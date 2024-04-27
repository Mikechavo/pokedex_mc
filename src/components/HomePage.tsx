const energys = [
 {
   id: 1,
   name: 'Bug',
   href: '#',
   imageSrc: 'src/assets/Bug.webp',
   imageAlt: "Bug Type.",
 },
 {
   id: 1,
   name: 'Dark',
   href: '#',
   imageSrc: 'src/assets/dark.webp',
   imageAlt: "Dark Type.",
 },
 // More products...
]

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pokemon Energy Types</h2>
 
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {energys.map((energy) => (
            <div key={energy.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-full bg-gray-200 group-hover:opacity-75">
                <img
                  src={energy.imageSrc}
                  alt={energy.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={energy.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {energy.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
 }
 