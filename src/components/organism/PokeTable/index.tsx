import styles from "./styles.module.scss";
import { Pokemon } from "../../../utils/interfaces/pokemon.interface";
import Button from "../../atom/Button";
import Table, { TableHeader } from "../../molecule/Table";
import { useDispatch } from "react-redux";
import { PokemonActions } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";

export default function PokemonTable() {
  const {pokemons, search} = useSelector<RootState, RootState>((s) => s);
  const dispatch = useDispatch();
  const tableHeaders: (TableHeader | string)[] = [
    "Nombre",
    "Imágen",
    "Ataque",
    "Defensa",
    { text: "Acciones", style: { width: "10%" } },
  ];

  const handlers = {
    delete: (p: Pokemon) => async() => p.id && await PokemonActions.DELETE(p.id)(dispatch),
    edit: (p: Pokemon) => () => PokemonActions.SET_FORM({
      hidden: false,
      req: "PUT",
      fields: p,
      errors: {
        image: "",
        name: "",
      }
    })(dispatch),
  };

  const searchResults = pokemons.filter((p) => p.name.startsWith(search));

  function mapPokemonsToTableRows() {
    return searchResults.map((pokemon) => ({
      name: pokemon.name,
      image: <img id={styles.pokemon} src={pokemon.image} alt={pokemon.name} />,
      attack: pokemon.attack,
      defese: pokemon.defense,
      actions: (
        <div style={{ display: "flex", gap: 10 }}>
          <Button id={styles.action} icon="delete_forever" onClick={handlers.delete(pokemon)} />
          <Button id={styles.action} icon="edit" onClick={handlers.edit(pokemon)} />
        </div>
      ),
    }));
  }

  const fallback = search && !searchResults.length ? "No search results" : "Loading...";

  return searchResults.length ? <Table headers={tableHeaders} rows={mapPokemonsToTableRows()} /> : <h2>{fallback}</h2>;
}
