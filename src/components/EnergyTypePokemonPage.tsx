import { Sidebar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

function EnergyTypePokemonPage() {
  const { energyType } = useParams();
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const normalizedEnergyType = energyType.toLowerCase();


  useEffect(() => {
    const fetchPokemonOfType = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/type/${normalizedEnergyType}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon data');
        }
        const data = await response.json();
        const pokemonOfType = data.pokemon.map((pokemon: any) => ({
          name: pokemon.pokemon.name,
          url: pokemon.pokemon.url
        }));
        setPokemonList(pokemonOfType);
        setLoading(false);
      } catch (error) {
        setError('Error fetching Pokémon data');
        setLoading(false);
      }
    };

    fetchPokemonOfType();
  }, [normalizedEnergyType]);

  const fetchPokemonData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon data');
      }
      const data = await response.json();
      const spriteUrl = data.sprites.front_default; // Extract sprite URL
      return {
        name: data.name,
        spriteUrl, // Include sprite URL in the returned data
        hp: data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
        attack: data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
        defense: data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
        specialAttack: data.stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat,
        specialDefense: data.stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat,
        speed: data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
        height: data.height, // Include height
        weight: data.weight // Include weight
      };
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      return null;
    }
  };
  

  useEffect(() => {
    const fetchDetails = async () => {
      const updatedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const details = await fetchPokemonData(pokemon.url);
          return { ...pokemon, ...details };
        })
      );
      setPokemonList(updatedPokemonList);
    };

    if (pokemonList.length > 0) {
      fetchDetails();
    }
  }, [pokemonList]);

  return (
    
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{energyType.toUpperCase()} Pokémon</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pokemonList.map((pokemon: any) => (
              <div key={pokemon.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={pokemon.spriteUrl} // Use sprite URL
                    alt={pokemon.name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{pokemon.name.toUpperCase()}</h3>
                  <div className="flex items-center mt-3">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">HP: {pokemon.hp}</p>
                      <p className="text-sm text-gray-600">Attack: {pokemon.attack}</p>
                      <p className="text-sm text-gray-600">Defense: {pokemon.defense}</p>
                      <p className="text-sm text-gray-600">Special Attack: {pokemon.specialAttack}</p>
                      <p className="text-sm text-gray-600">Special Defense: {pokemon.specialDefense}</p>
                      <p className="text-sm text-gray-600">Speed: {pokemon.speed}</p>
                      <p className="text-sm text-gray-600">Height: {pokemon.height}</p>
                      <p className="text-sm text-gray-600">Weight: {pokemon.weight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EnergyTypePokemonPage;


