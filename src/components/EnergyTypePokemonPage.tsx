import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  const fetchPokemonDetails = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon details');
      }
      const data = await response.json();
      return {
        name: data.name,
        hp: data.stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
        attack: data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
        defense: data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
        specialAttack: data.stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat,
        specialDefense: data.stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat,
        speed: data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat
      };
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const updatedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const details = await fetchPokemonDetails(pokemon.url);
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
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {pokemonList.map((pokemon: any) => (
              <div key={pokemon.name} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-full bg-gray-200 group-hover:opacity-75">
                  <img
                    src={pokemon.url} 
                    alt={pokemon.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{pokemon.name.toUpperCase()}</h3>
                    <p>HP: {pokemon.hp}</p>
                    <p>Attack: {pokemon.attack}</p>
                    <p>Defense: {pokemon.defense}</p>
                    <p>Special Attack: {pokemon.specialAttack}</p>
                    <p>Special Defense: {pokemon.specialDefense}</p>
                    <p>Speed: {pokemon.speed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EnergyTypePokemonPage;


