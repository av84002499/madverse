import React from "react";

type PokemonRowProps = {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
};

const PokemonRow: React.FC<PokemonRowProps> = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>{pokemon.id}: {pokemon.name} - {pokemon.types.join(", ")}</p>
    </div>
  );
};

export default PokemonRow;
