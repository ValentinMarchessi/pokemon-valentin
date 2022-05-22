import { createContext, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/organism/Header";
import Pokeform from "./components/organism/Pokeform";
import PokemonTable from "./components/organism/PokeTable";
import { usePokemonAPI } from "./utils/hooks/usePokemonAPI";
import { formInit } from "./utils/init";
import { AppHandlers } from "./utils/interfaces/appHandlers.interface";
import { PokeformI } from "./utils/interfaces/forms.interface";

export const FormContext = createContext<PokeformI>(formInit);

function App() {
  const PokemonAPI = usePokemonAPI();
  const [form, setForm] = useState<PokeformI>(formInit);

  useEffect(() => {
    (async () => {
      await PokemonAPI.GET();
    })();
  }, []);

  useEffect(() => {}, [PokemonAPI.data]);

  const handlers: AppHandlers = {
    form: {
      set: setForm,
      submit: async () => {
        await PokemonAPI[form.req](form.fields);
        await PokemonAPI.GET();
      },
      reset:
        (hidden = true) =>
        () =>
          setForm({ ...formInit, hidden }),
    },
    pokemon: {
      delete: async (id: number) => {
        await PokemonAPI.DELETE(id);
        await PokemonAPI.GET();
      },
    },
  };

  return (
    <div className="App">
      <FormContext.Provider value={form}>
        <Header toggleForm={handlers.form.reset(false)} />
        <PokemonTable pokemons={PokemonAPI.data} appHandlers={handlers} />
        <Pokeform formProps={{ hidden: form.hidden }} appHandlers={handlers} />
      </FormContext.Provider>
    </div>
  );
}

export default App;
