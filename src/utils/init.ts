import { PokeformI } from "./interfaces/forms.interface";

export const formInit: PokeformI = {
  hidden: true,
  req: "POST",
  fields: {
    name: "",
    image: "",
    attack: 0,
    defense: 0,
  },
};