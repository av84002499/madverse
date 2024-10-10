import { useState } from "react";
import { trpc } from "../utils/trpc";
import PokedexTable from "../components/PokedexTable";

const PokedexPage = () => {
  const [pokemonNames, setPokemonNames] = useState("");
  const { data: pokemons, refetch } = trpc.pokemon.getPokemonArray.useQuery(pokemonNames.split(","), { enabled: false });

  const handleSubmit = () => {
    refetch();
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonNames}
        onChange={(e) => setPokemonNames(e.target.value)}
        placeholder="Enter Pokemon Names (comma-separated)"
      />
      <button onClick={handleSubmit}>Fetch Pokemons</button>
      {pokemons && <PokedexTable pokemons={pokemons} />}
    </div>
  );
};

export default PokedexPage;
