import styles from "./style.module.scss";

import Button from "../../atom/Button";
import Searchbar from "../../molecule/Searchbar";
import { AppHandlers } from "../../../utils/interfaces/appHandlers.interface";

interface Props {
  appHandlers: AppHandlers;
}

export default function Header({ appHandlers }: Props) {
  return (
    <section id={styles.header}>
      <h1>Listado de Pókemon</h1>
      <div id={styles["search-and-add"]}>
        <Searchbar name="pokemon" onSearch={appHandlers.search.onSubmit}/>
        <Button icon="add" text="Nuevo" onClick={appHandlers.form.reset(false)} />
      </div>
    </section>
  );
}
