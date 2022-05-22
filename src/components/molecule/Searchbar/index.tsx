import { FormEventHandler } from "react";
import style from "./style.module.scss";

interface Props {
  name: string;
  onSearch: FormEventHandler<HTMLFormElement>;
}

export default function Searchbar({ name, onSearch }: Props) {
  return (
    <form role="searchbox" id={style.searchbar} onSubmit={onSearch} onBlur={onSearch}>
      <span className="material-icons">search</span>
      <input role="search" name={name} type="text" placeholder="Buscar"></input>
    </form>
  );
}
