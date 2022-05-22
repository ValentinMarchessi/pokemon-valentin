import { Pokemon } from "../src/utils/interfaces/pokemon.interface";

export const Ivisaur: Pokemon = {
  name: "Ivysaur",
  image: "https://www.gamehiker.com/wiki/images/8/86/Ivysaur.png",
  attack: 65,
  defense: 38,
};

export const Pikachu: Pokemon = {
  name: "Pikachu",
  image:
    "https://vignette.wikia.nocookie.net/doblaje/images/e/ea/Pikachu_DP.png/revision/latest?cb=20161002183304&path-prefix=es",
  attack: 45,
  defense: 14,
};

export const Charizard: Pokemon = {
  name: "Charizard",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png",
  attack: 70,
  defense: 64,
};

export const Raichu: Pokemon = {
  name: "Raichu",
  image: "https://static.pokemonpets.com/images/monsters-images-300-300/26-Raichu.webp",
  attack: 50,
  defense: 79,
};

export const Bulbasaur: Pokemon = {
  name: "Bulbasaur",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  attack: 32,
  defense: 45,
};

export const Ditto: Pokemon = {
  name: "Ditto",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
  attack: 23,
  defense: 89,
};

export const Blastoise: Pokemon = {
  name: "Blastoise",
  image:
    "https://static.wikia.nocookie.net/pokemon/images/0/02/009Blastoise.png/revision/latest/scale-to-width-down/350?cb=20200731133731",
  attack: 88,
  defense: 91,
};

export const Ekans: Pokemon = {
  name: "Ekans",
  image:
    "https://static.wikia.nocookie.net/pokemon/images/f/fa/023Ekans.png/revision/latest/scale-to-width-down/350?cb=20140328192338",
  attack: 58,
  defense: 79,
};

export const pokemons: Pokemon[] = [
  Ivisaur,
  Pikachu,
  Charizard,
  Raichu,
  Bulbasaur,
  Ditto,
  Blastoise,
  Ekans,
];
