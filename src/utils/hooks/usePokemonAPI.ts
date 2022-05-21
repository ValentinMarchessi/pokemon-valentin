import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Pokemon } from "../interfaces/pokemon.interface";
import { API_Res } from "../interfaces/response.interface";

const env = import.meta.env;

const API_URL = env["VITE_API_URL"];
const AUTHOR_ID = env["VITE_AUTHOR_ID"];

type PokemonAPI = {
  data: Pokemon[],
  GET: () => Promise<void>,
  POST: (p: Pokemon) => Promise<void>,
  PUT: (id: number) => Promise<void>,
  DELETE: (id: number) => Promise<void>,
};

export function usePokemonAPI(): PokemonAPI {
  const [data, setData] = useState<Pokemon[]>([]);

  async function GET(id?: string) {
    const response = await axios.get<API_Res["Pokemons"][]>(`${API_URL}/pokemons/${id || ""}`);
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
    setData(pokemons);
  }
  async function POST(p: Pokemon) {}
  async function DELETE(id: number) {}
  async function PUT(id: number) {}

  return { data, GET, POST, PUT, DELETE };
}
