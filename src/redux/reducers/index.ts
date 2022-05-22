import { formInit } from "../../utils/init";
import { PokeformI } from "../../utils/interfaces/forms.interface"
import { Pokemon } from "../../utils/interfaces/pokemon.interface";
import { Actions } from "../actions";

export interface RootState {
  lastAction?: Actions["pokemon"]["type"];
  pokemons: Pokemon[];
  form: PokeformI
  search: string;
}

const initialState: RootState = {
  pokemons: [],
  form: formInit,
  search: "",
};

export default function rootReducer(state = initialState, action: Actions["pokemon"]): RootState {
  switch (action.type) {
    case "GET": {
      return { ...state, pokemons: action.payload as Pokemon[], lastAction: action.type };
    }
    case "POST": {
      return { ...state, form: action.payload as PokeformI, lastAction: action.type };
    }
    case "PUT": {
      return { ...state, form: action.payload, lastAction: action.type };
    }
    case "DELETE": {
      return state;
    }
    case "SEARCH": {
      return { ...state, search: action.payload, lastAction: action.type };
    }
    case "RESET_FORM": {
      return { ...state, form: action.payload, lastAction: action.type };
    }
    case "SET_FORM": {
      return { ...state, form: action.payload, lastAction: action.type };
    }
    default: {
      return state;
    }
  }
}