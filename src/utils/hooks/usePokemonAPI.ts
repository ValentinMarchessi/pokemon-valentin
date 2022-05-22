import axios from "axios";
import { useState } from "react";
import { PokeformI } from "../interfaces/forms.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { PokemonAPI } from "../interfaces/pokemonAPI.interface";
import { APIRequest } from "../interfaces/requests.interface";
import { API_Res } from "../interfaces/response.interface";

const env = import.meta.env;

const API_URL = env["VITE_API_URL"];
const AUTHOR_ID = env["VITE_AUTHOR_ID"];

export function usePokemonAPI(): PokemonAPI {
  const [data, setData] = useState<Pokemon[]>([]);

  const URLs = {
    GET: () => `${API_URL}/pokemons/?idAuthor=${AUTHOR_ID}`,
    POST: () => `${API_URL}/pokemons/?idAuthor=${AUTHOR_ID}`,
    PUT: (id: number) => `${API_URL}/pokemons/${id}`,
    DEL: (id: number) => `${API_URL}/pokemons/${id}`,
  };

  async function GET() {
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
    console.log("Getting.")
    setData(pokemons);
  }
  async function POST(p: PokeformI["fields"]) {
    await axios.post<APIRequest["Pokemon"]>(URLs.POST(), {
      ...p,
      hp: 100,
      idAuthor: AUTHOR_ID,
      type: "normal",
    });
  }
  async function DELETE(id: number) {
    await axios.delete(URLs.DEL(id));
  }
  async function PUT(p: PokeformI["fields"]) {
    p.id && (await axios.put(URLs.PUT(p.id), p));
  }

  return { data, GET, POST, PUT, DELETE } as PokemonAPI;
}
