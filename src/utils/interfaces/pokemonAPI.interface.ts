import { PokeformI } from "./forms.interface";
import { Pokemon } from "./pokemon.interface";

export type PokemonAPI = {
  data: Pokemon[];
  GET: (id?: number) => Promise<void>;
  POST: (p: PokeformI["fields"]) => Promise<void>;
  PUT: (p: PokeformI["fields"]) => Promise<void>;
  DELETE: (id: number) => Promise<void>;
};
