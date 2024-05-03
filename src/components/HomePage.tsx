import { Link } from 'react-router-dom';

const energys = [
 {
   id: 1,
   name: 'Bug',
   imageSrc: 'src/assets/Bug.webp',
   imageAlt: "Bug Type.",
 },
 {
   id: 2,
   name: 'Dark',
   imageSrc: 'src/assets/dark.webp',
   imageAlt: "Dark Type.",
 },
 {
   id: 3,
   name: 'Dragon',
   imageSrc: 'src/assets/dragon.webp',
   imageAlt: "Dragon Type.",
 },
 {
   id: 4,
   name: 'Electric',
   imageSrc: 'src/assets/Electric.webp',
   imageAlt: "Electric Type.",
 },
 {
   id: 5,
   name: 'Fairy',
   imageSrc: 'src/assets/Fairy.webp',
   imageAlt: "Fairy Type.",
 },
 {
   id: 6,
   name: 'Fighting',
   imageSrc: 'src/assets/Fighting.webp',
   imageAlt: "Fighting Type.",
 },
 {
   id: 7,
   name: 'Fire',
   imageSrc: 'src/assets/Fire.webp',
   imageAlt: "Fire Type.",
 },
 {
   id: 8,
   name: 'Flying',
   imageSrc: 'src/assets/Flying.webp',
   imageAlt: "Flying Type.",
 },
 {
   id: 9,
   name: 'Ghost',
   imageSrc: 'src/assets/Ghost.webp',
   imageAlt: "Ghost Type.",
 },
 {
   id: 10,
   name: 'Grass',
   imageSrc: 'src/assets/Grass.webp',
   imageAlt: "Grass Type.",
 },
 {
   id: 11,
   name: 'Ground',
   imageSrc: 'src/assets/Ground.webp',
   imageAlt: "Ground Type.",
 },
 {
   id: 12,
   name: 'Ice',
   imageSrc: 'src/assets/Ice.webp',
   imageAlt: "Ice Type.",
 },
 {
   id: 13,
   name: 'Normal',
   imageSrc: 'src/assets/Normal.webp',
   imageAlt: "Normal Type.",
 },
 {
   id: 14,
   name: 'Poison',
   imageSrc: 'src/assets/Poison.webp',
   imageAlt: "Poison Type.",
 },
 {
   id: 15,
   name: 'Psychic',
   imageSrc: 'src/assets/Psychic.webp',
   imageAlt: "Psychic Type.",
 },
 {
   id: 16,
   name: 'Rock',
   imageSrc: 'src/assets/Rock.webp',
   imageAlt: "Rock Type.",
 },
 {
   id: 17,
   name: 'Steel',
   imageSrc: 'src/assets/Steel.webp',
   imageAlt: "Steel Type.",
 },
 {
   id: 18,
   name: 'Water',
   imageSrc: 'src/assets/Water.webp',
   imageAlt: "Water Type.",
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
              {/* Use Link component for navigation */}
              <Link to={`/energy/${energy.name}`}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-full bg-gray-200 group-hover:opacity-75">
                  <img
                    src={energy.imageSrc}
                    alt={energy.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </Link>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{energy.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 