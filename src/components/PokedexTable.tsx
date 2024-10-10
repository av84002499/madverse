import React from "react";
import PokemonRow from "./PokemonRow";

type PokedexTableProps = {
  pokemons: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }[];
};

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonRow key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokedexTable;
