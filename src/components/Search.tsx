import { useState, useEffect } from 'react';


export default function Search() {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string>('pikachu');
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon list');
        }
        const data = await response.json();
        const pokemonNames = data.results.map((pokemon: any) => pokemon.name);
        setPokemonList(pokemonNames);
      } catch (error) {
        setError('Error fetching Pokémon list');
      }
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon data');
        }
        const data = await response.json();
        setPokemonData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching Pokémon data');
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [selectedPokemon]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPokemon(event.target.value);
  };

  return (
    <>
     
     <div className="flex justify-center items-center h-screen">
  <div className="bg-white p-8 rounded-lg shadow-md w-80">
    <h1 className="text-2xl font-bold mb-4">Pokémon Information</h1>
    <select
      className="w-full border rounded-md px-4 py-2 mb-4"
      value={selectedPokemon}
      onChange={handleSelectChange}
    >
      {pokemonList.map((pokemon) => (
        <option key={pokemon} value={pokemon}>
          {pokemon}
        </option>
      ))}
    </select>
    {loading && <p>Loading...</p>}
    {error && <p className="text-red-500">{error}</p>}
    {pokemonData && (
      <div>
        <h2 className="text-xl font-bold mb-2">{pokemonData.name}</h2>
        <img
          className="w-full h-auto mb-2"
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
        />
        <p className="mb-2">Height: {pokemonData.height}</p>
        <p className="mb-2">Weight: {pokemonData.weight}</p>
      </div>
    )}
  </div>
</div>

    </>
  );
}
