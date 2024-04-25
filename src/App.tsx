import { useState, useEffect } from 'react';


export default function App() {
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
     
      <div>
        <h1>Pokémon Information</h1>
        <select value={selectedPokemon} onChange={handleSelectChange}>
          {pokemonList.map((pokemon) => (
            <option key={pokemon} value={pokemon}>
              {pokemon}
            </option>
          ))}
        </select>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {pokemonData && (
          <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
          </div>
        )}
      </div>
    </>
  );
}


