import React, { MouseEventHandler } from "react";
import styles from "./styles.module.scss";
import { usePokemonAPI } from "../../../utils/hooks/usePokemonAPI";
import { Pokemon } from "../../../utils/interfaces/pokemon.interface";
import Button from "../../atom/Button";
import Table, { TableHeader } from "../../molecule/Table";
import { AppHandlers } from "../../../utils/interfaces/appHandlers.interface";

interface Props {
  pokemons: Pokemon[];
  appHandlers: AppHandlers;
}

export default function PokemonTable({ pokemons, appHandlers }: Props) {
  const tableHeaders: (TableHeader | string)[] = [
    "Nombre",
    "Imágen",
    "Ataque",
    "Defensa",
    { text: "Acciones", style: { width: "10%" } },
  ];

  const handlers = {
    delete: (p: Pokemon) => async () => await appHandlers.pokemon.delete(p.id),
    edit: (p: Pokemon) => () => {
      appHandlers.form.set({
        hidden: false,
        req: "PUT",
        fields: {
          id: p.id,
          name: p.name,
          image: p.image,
          attack: p.attack,
          defense: p.defense,
        },
      });
    },
  };

  function mapPokemonsToTableRows() {
    return pokemons.map((pokemon) => ({
      name: pokemon.name,
      image: <img id={styles.pokemon} src={pokemon.image} alt={pokemon.name} />,
      attack: pokemon.attack,
      defese: pokemon.defense,
      actions: (
        <div style={{ display: "flex", gap: 10 }}>
          <Button icon="delete" onClick={handlers.delete(pokemon)} />
          <Button icon="edit" onClick={handlers.edit(pokemon)} />
        </div>
      ),
    }));
  }

  const fallback = appHandlers.search.get() ? "No search results" : "Loading...";

  return pokemons.length ? <Table headers={tableHeaders} rows={mapPokemonsToTableRows()} /> : <h2>{fallback}</h2>;
}
