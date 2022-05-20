import styles from "./style.module.scss";

import Button from "../../atom/Button";
import Searchbar from "../../molecule/Searchbar";

export default function Header() {
  return (
    <div id={styles.header}>
      <h1>Listado de Pókemon</h1>
      <div id={styles["search-and-add"]}>
        <Searchbar name="pokemon" />
        <Button icon="add" text="Nuevo" />
      </div>
    </div>
  );
}
