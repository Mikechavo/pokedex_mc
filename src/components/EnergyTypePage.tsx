import energys from './HomePage'; // Adjust the path to match the actual location of the file

function EnergyTypePage() {
  // const { energyType } = useParams(); // Commented out as it's not currently used
  // const history = useHistory(); // Removed as it's not currently used

  const handleEnergyClick = (energyName: string) => {
    // Uncomment this line if you decide to use useHistory
    // history.push(`/energy/${energyName}`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pokemon Energy Types</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array.isArray(energys) && energys.map((energy) => (
            <div key={energy.id} className="group relative" onClick={() => handleEnergyClick(energy.name)}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-full bg-gray-200 group-hover:opacity-75">
                <img
                  src={energy.imageSrc}
                  alt={energy.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
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

export default EnergyTypePage;




// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function EnergyTypePokemonPage() {
//   const { energyType } = useParams();
//   const [pokemonList, setPokemonList] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const normalizedEnergyType = energyType.toLowerCase();

//   useEffect(() => {
//     const fetchPokemonOfType = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`https://pokeapi.co/api/v2/type/${normalizedEnergyType}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch Pokémon data');
//         }
//         const data = await response.json();
//         const pokemonOfType = data.pokemon.map((pokemon: any) => pokemon.pokemon);
//         setPokemonList(pokemonOfType);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching Pokémon data');
//         setLoading(false);
//       }
//     };

//     fetchPokemonOfType();
//   }, [normalizedEnergyType]);

//   const fetchPokemonDetails = async (pokemonName: string) => {
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch Pokémon details');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching Pokémon details:', error);
//       return null;
//     }
//   };

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">{energyType.toUpperCase()} Pokémon</h2>
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         {!loading && !error && (
//           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {pokemonList.map((pokemon: any) => (
//               <div key={pokemon.name} className="group relative">
//                 <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-full bg-gray-200 group-hover:opacity-75">
//                   <img
//                     src={pokemon.url} // Use the URL provided by the API for the Pokémon sprite
//                     alt={pokemon.name}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm text-gray-700">{pokemon.name}</h3>
//                     <p>HP: {pokemon.stats.hp}</p>
//                     <p>Attack: {pokemon.stats.attack}</p>
//                     <p>Defense: {pokemon.stats.defense}</p>
//                     <p>Special Attack: {pokemon.stats.specialAttack}</p>
//                     <p>Special Defense: {pokemon.stats.specialDefense}</p>
//                     <p>Speed: {pokemon.stats.speed}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default EnergyTypePokemonPage;

