import styles from "./style.module.scss";
import Button from "../../atom/Button";
import Searchbar from "../../molecule/Searchbar";
import { FormEvent } from "react";
import { PokemonActions } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { Pokemon } from "../../../utils/interfaces/pokemon.interface";

export default function Header() {
  const dispatch = useDispatch();

  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const pokemon: string = form.get("pokemon")?.toString() || "";
    await PokemonActions.SEARCH(pokemon)(dispatch);
  }

  return (
    <section id={styles.header}>
      <h1>Listado de Pókemon</h1>
      <div id={styles["search-and-add"]}>
        <Searchbar name="pokemon" onSearch={handleSearch} />
        <Button icon="add" text="Nuevo" onClick={async () => await PokemonActions.RESET_FORM("shown")(dispatch)} />
      </div>
    </section>
  );
}
