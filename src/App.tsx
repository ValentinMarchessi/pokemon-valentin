import { createContext, useContext, useEffect, useState } from "react";
import { Ivisaur } from "../__mocks__/pokemons";
import "./App.scss";
import Header from "./components/organism/Header";
import Pokeform from "./components/organism/Pokeform";
import PokemonTable from "./components/organism/PokeTable";
import { Pokemon } from "./utils/interfaces/pokemon.interface";

interface ContextI{
  pokemons: Pokemon[]
}

function App() {
  const Context = createContext<ContextI>({ pokemons: [] });
  const [hidden, setPokeform] = useState<boolean>(true);
  const pokemons = [Ivisaur];
  return (
    <div className="App">
      <Context.Provider value={{pokemons: pokemons}}>
        <Header toggleForm={() => setPokeform(s => !s)} />
        <PokemonTable pokemons={pokemons} />
        <Pokeform hidden={hidden} />
      </Context.Provider>
    </div>
  );
}

export default App;
