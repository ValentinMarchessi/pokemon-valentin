import style from "./style.module.scss";

interface Props {
    name: string
}

export default function Searchbar({name}: Props) {
    return (
        <div id={style.searchbar}>
            <span className="material-icons">search</span>
            <input name={name} type="text" placeholder="Buscar"></input>
        </div>
    );
}