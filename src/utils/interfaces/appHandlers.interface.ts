import { PokeformI } from "./forms.interface";

export interface AppHandlers {
  form: {
    set: React.Dispatch<React.SetStateAction<PokeformI>>;
    submit: () => Promise<void>;
    reset: (hidden: boolean) => () => void;
  };
  pokemon: {
    delete: (id: number) => Promise<void>
  }
}
