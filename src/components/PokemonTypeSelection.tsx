import React from "react";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => {
  const types = ["grass", "fire", "water", "electric", "flying"];

  return (
    <select value={selectedType} onChange={(e) => selectType(e.target.value)}>
      <option value="">Select Type</option>
      {types.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
};

export default PokemonTypeSelection;
