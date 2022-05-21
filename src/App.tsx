import { createContext, useContext, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/organism/Header";
import Pokeform from "./components/organism/Pokeform";
import PokemonTable from "./components/organism/PokeTable";
import { usePokemonAPI } from "./utils/hooks/usePokemonAPI";
import { Pokemon } from "./utils/interfaces/pokemon.interface";

interface ContextI{
  pokemons: Pokemon[]
}

function App() {
  const PokemonAPI = usePokemonAPI();
  useEffect(() => {
    (async () => {
      await PokemonAPI.GET();
    })();
  }, []);

  const Context = createContext<ContextI>({ pokemons: [] });
  const [hidden, setPokeform] = useState<boolean>(true);
  return (
    <div className="App">
      <Context.Provider value={{ pokemons: PokemonAPI.data }}>
        <Header toggleForm={() => setPokeform((s) => !s)} />
        <PokemonTable pokemons={PokemonAPI.data} />
        <Pokeform hidden={hidden} />
      </Context.Provider>
    </div>
  );
}

export default App;
