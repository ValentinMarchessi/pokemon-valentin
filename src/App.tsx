import { useEffect, useState } from "react";
import "./App.scss";
import Button from "./components/atom/Button";
import Header from "./components/organism/Header";
import Pokeform from "./components/organism/Pokeform";
import Table from "./components/organism/Table";

type PokemonRow = [name: string, img: string, att: number, def: number, actions: JSX.Element | JSX.Element[]];

const mock: PokemonRow = [
    "Ivysaur",
    "none",
    65,
    38,
  <div style={{display: "flex", gap: 10, justifyContent: "space-around"}}>
    <Button icon="delete"/>
    <Button icon="edit"/>
  </div>,
];

function App() {
  const tableHeaders = [<th>Nombre</th>, <th>Imágen</th>, <th>Ataque</th>, <th>Defensa</th>, <th style={{width: "10%"}}>Acciones</th>];

  const [tableRows, setTableRows] = useState<PokemonRow[]>([]);

  useEffect(() => {
    setTableRows(t => [...t, mock]);
  },[setTableRows])

  return (
      <div className="App">
          <Header />
          <Table headers={tableHeaders} rows={tableRows} />
          <Pokeform/>
      </div>
  );
}

export default App;
