import { RootState } from "../src/redux/reducers";

export const mockStore: RootState = {
    form: {
        hidden: true,
        req: "POST",
        fields: {
            name: "",
            image: "",
            attack: 0,
            defense: 0,
        },
        errors: {
            name: "",
            image: "",
        },
    },
    pokemons: [],
    search: ""
};
