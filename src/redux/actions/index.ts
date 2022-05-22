import axios from "axios";
import { Dispatch } from "redux";
import { formInit } from "../../utils/init";
import { PokeformI } from "../../utils/interfaces/forms.interface";
import { Pokemon } from "../../utils/interfaces/pokemon.interface";
import { APIRequest } from "../../utils/interfaces/requests.interface";
import { API_Res } from "../../utils/interfaces/response.interface";

const env = process.env;

const API_URL = env["VITE_API_URL"];
const AUTHOR_ID = env["VITE_AUTHOR_ID"];

const URLs = {
  GET: () => `${API_URL}/pokemons/?idAuthor=${AUTHOR_ID}`,
  POST: () => `${API_URL}/pokemons/?idAuthor=${AUTHOR_ID}`,
  PUT: (id: number) => `${API_URL}/pokemons/${id}`,
  DEL: (id: number) => `${API_URL}/pokemons/${id}`,
};

export interface Actions {
  pokemon: {
    type: "GET" | "POST" | "PUT" | "DELETE" | "SEARCH" | "RESET_FORM" | "SET_FORM";
    payload?: any;
  };
}

export const PokemonActions = {
  GET: () => async (dispatch: (arg0: { type: string; payload: Pokemon[] }) => void) => {
    const response = await axios.get<API_Res["Pokemons"][]>(URLs.GET());
    const pokemons: Pokemon[] = response.data.map(
      (entry) =>
        ({
          id: entry.id,
          name: entry.name,
          attack: entry.attack,
          defense: entry.defense,
          image: entry.image,
        } as Pokemon)
    );
    console.log("Triggered GET action.", response);
    dispatch({ type: "GET", payload: pokemons });
  },
  POST:
    (p: PokeformI["fields"]) =>
    async (dispatch: (arg0: { type: string; payload: PokeformI }) => void) => {
      await axios.post<APIRequest["Pokemon"]>(URLs.POST(), {
        ...p,
        hp: 100,
        idAuthor: AUTHOR_ID,
        type: "normal",
      });
      dispatch({ type: "POST", payload: formInit });
    },
  PUT:
    (p: PokeformI["fields"]) => async (dispatch: Dispatch<{ type: "PUT"; payload: PokeformI }>) => {
      p.id && (await axios.put(URLs.PUT(p.id), p));
      dispatch({ type: "PUT", payload: formInit });
    },
  DELETE: (id: number) => async (dispatch: Dispatch<{ type: string }>) => {
    await axios.delete(URLs.DEL(id));
    dispatch({ type: "DELETE" });
  },
  SEARCH: (name: string) => (dispatch: Dispatch<{ type: string; payload: string }>) => {
    dispatch({ type: "SEARCH", payload: name });
  },
  RESET_FORM:
    (status: "shown" | "hidden") => (dispatch: Dispatch<{ type: string; payload: PokeformI }>) => {
      dispatch({ type: "RESET_FORM", payload: { ...formInit, hidden: status === "hidden" } });
    },
  SET_FORM: (form: PokeformI) => (dispatch: Dispatch<{ type: string; payload: PokeformI }>) => {
    dispatch({ type: "SET_FORM", payload: form });
  },
};
