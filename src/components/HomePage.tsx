import { Link } from 'react-router-dom';
import bug from '../assets/Bug.webp'
import dark from '../assets/dark.webp'
import dragon from '../assets/dragon.webp'
import electric from '../assets/Electric.webp'
import fairy from '../assets/Fairy.webp'
import fighting from '../assets/Fighting.webp'
import fire from '../assets/Fire.webp'
import flying from '../assets/Flying.webp'
import ghost from '../assets/Ghost.webp'
import grass from '../assets/Grass.webp'
import ground from '../assets/Ground.webp'
import ice from '../assets/Ice.webp'
import normal from '../assets/Normal.webp'
import poison from '../assets/Poison.webp'
import psychic from '../assets/Psychic.webp'
import rock from '../assets/Rock.webp'
import steel from '../assets/Steel.webp'
import water from '../assets/Water.webp'

const energys = [
 {
   id: 1,
   name: 'Bug',
   imageSrc: bug,
   imageAlt: "Bug Type.",
 },
 {
   id: 2,
   name: 'Dark',
   imageSrc: dark,
   imageAlt: "Dark Type.",
 },
 {
   id: 3,
   name: 'Dragon',
   imageSrc: dragon,
   imageAlt: "Dragon Type.",
 },
 {
   id: 4,
   name: 'Electric',
   imageSrc: electric,
   imageAlt: "Electric Type.",
 },
 {
   id: 5,
   name: 'Fairy',
   imageSrc: fairy,
   imageAlt: "Fairy Type.",
 },
 {
   id: 6,
   name: 'Fighting',
   imageSrc: fighting,
   imageAlt: "Fighting Type.",
 },
 {
   id: 7,
   name: 'Fire',
   imageSrc: fire,
   imageAlt: "Fire Type.",
 },
 {
   id: 8,
   name: 'Flying',
   imageSrc: flying,
   imageAlt: "Flying Type.",
 },
 {
   id: 9,
   name: 'Ghost',
   imageSrc: ghost,
   imageAlt: "Ghost Type.",
 },
 {
   id: 10,
   name: 'Grass',
   imageSrc: grass,
   imageAlt: "Grass Type.",
 },
 {
   id: 11,
   name: 'Ground',
   imageSrc: ground,
   imageAlt: "Ground Type.",
 },
 {
   id: 12,
   name: 'Ice',
   imageSrc: ice,
   imageAlt: "Ice Type.",
 },
 {
   id: 13,
   name: 'Normal',
   imageSrc: normal,
   imageAlt: "Normal Type.",
 },
 {
   id: 14,
   name: 'Poison',
   imageSrc: poison,
   imageAlt: "Poison Type.",
 },
 {
   id: 15,
   name: 'Psychic',
   imageSrc: psychic,
   imageAlt: "Psychic Type.",
 },
 {
   id: 16,
   name: 'Rock',
   imageSrc: rock,
   imageAlt: "Rock Type.",
 },
 {
   id: 17,
   name: 'Steel',
   imageSrc: steel,
   imageAlt: "Steel Type.",
 },
 {
   id: 18,
   name: 'Water',
   imageSrc: water,
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
            <div key={energy.id} className="group relative flex flex-col items-center">
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
              <div className="mt-4">
                <h3 className="text-sm text-gray-700 text-center font-bold">{energy.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}
 