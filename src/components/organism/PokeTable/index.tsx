import React, { ButtonHTMLAttributes, MouseEventHandler, ReactEventHandler } from "react";
import { Pokemon } from "../../../utils/interfaces/pokemon.interface";
import Button from "../../atom/Button";
import Table, { TableHeader } from "../../molecule/Table";

interface Props {
    pokemons: Pokemon[];
}

export default function PokemonTable({ pokemons }: Props) {
    const tableHeaders: (TableHeader | string)[] = [
      "Nombre",
      "Imágen",
      "Ataque",
      "Defensa",
      { text: "Acciones", style: { width: "10%" } },
  ];
  
  const handlers = {
    delete: (p: Pokemon) => (event: React.MouseEvent<HTMLButtonElement>) => {
      alert(`Deleting ${p.name}`);
    },
    edit: (p: Pokemon) => (event: React.MouseEvent<HTMLButtonElement>) => {
      alert(`Editing ${p.name}`);
    },
  };

  function mapPokemonsToTableRows() {
    return pokemons.map((pokemon) => ({
      ...pokemon,
      actions: (
        <div style={{ display: "flex", gap: 10 }}>
          <Button icon="delete" onClick={handlers.delete(pokemon)} />
          <Button icon="edit" onClick={handlers.edit(pokemon)} />
        </div>
      ),
    }));
  }

  return <Table headers={tableHeaders} rows={mapPokemonsToTableRows()} />;
}