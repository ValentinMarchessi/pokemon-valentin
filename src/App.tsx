import { createContext, useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { PokemonActions } from "./redux/actions";
import Header from "./components/organism/Header";
import Pokeform from "./components/organism/Pokeform";
import PokemonTable from "./components/organism/PokeTable";
import { formInit } from "./utils/init";
import { PokeformI } from "./utils/interfaces/forms.interface";
import { RootState } from "./redux/reducers";

export const FormContext = createContext<PokeformI>(formInit);

function App() {
  const dispatch = useDispatch();
  const { lastAction } = useSelector<RootState, RootState>((s) => s);

  useEffect(() => {
    let refreshActions: typeof lastAction[] = ["POST", "PUT"];
    (async () => {
      if (!lastAction) await PokemonActions.GET()(dispatch);
      if (refreshActions.includes(lastAction)) {
        await PokemonActions.GET()(dispatch);
      }
    })();
  }, [lastAction]);

  return (
    <div className="App">
      <Header />
      <PokemonTable />
      <Pokeform />
    </div>
  );
}

export default App;
