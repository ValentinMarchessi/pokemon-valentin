import { ChangeEvent, createContext, FormEvent, useEffect, useState } from "react";
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
  const [search, setSearch] = useState<string>("");

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
      validate: (f: HTMLFormElement) => {
        const e_form = new FormData(f);
        const name = e_form.get("name");
        const image = e_form.get("image");

        const setError = (field: keyof PokeformI["errors"], error: string) =>
          setForm((f) => ({ ...f, errors: { ...f.errors, [field]: error } }));

        if (!name) setError("name", "Name is required.");
        if (!image) setError("image", "Image is required");
      }
    },
    pokemon: {
      delete: async (id: number) => {
        await PokemonAPI.DELETE(id);
        await PokemonAPI.GET();
      },
    },
    search: {
      get: () => search,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setSearch(value);
      },
      onSubmit: (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const search = form.get("pokemon");
        setSearch(search?.toString() || "");
      }
    }
  };

  const searchResults = PokemonAPI.data.filter(p => p.name.startsWith(search));

  return (
    <div className="App">
      <FormContext.Provider value={form}>
        <Header appHandlers={handlers} />
        <PokemonTable pokemons={searchResults} appHandlers={handlers} />
        <Pokeform formProps={{ hidden: form.hidden }} appHandlers={handlers} />
      </FormContext.Provider>
    </div>
  );
}

export default App;
