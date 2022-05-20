import styles from "./style.module.scss";

import Button from "../../atom/Button";
import Searchbar from "../../molecule/Searchbar";
import React from "react";

interface Props {
  toggleForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header({ toggleForm }: Props) {
  return (
    <section id={styles.header}>
      <h1>Listado de Pókemon</h1>
      <div id={styles["search-and-add"]}>
        <Searchbar name="pokemon" />
        <Button icon="add" text="Nuevo" onClick={toggleForm} />
      </div>
    </section>
  );
}
