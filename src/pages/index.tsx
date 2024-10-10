import { useState } from "react";
import { trpc } from "../utils/trpc";
import PokemonRow from "../components/PokemonRow";

const Home = () => {
  const [pokemonName, setPokemonName] = useState("");
  const { data: pokemon, refetch } = trpc.pokemon.getPokemon.useQuery(pokemonName, { enabled: false });

  const handleSubmit = () => {
    refetch();
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokemon Name"
      />
      <button onClick={handleSubmit}>Fetch Pokemon</button>
      {pokemon && <PokemonRow pokemon={pokemon} />}
    </div>
  );
};

export default Home;
