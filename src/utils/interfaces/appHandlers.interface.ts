import { ChangeEventHandler, FormEventHandler } from "react";
import { PokeformI } from "./forms.interface";

export interface AppHandlers {
  form: {
    set: React.Dispatch<React.SetStateAction<PokeformI>>;
    submit: () => Promise<void>;
    reset: (hidden: boolean) => () => void;
    validate: (form: HTMLFormElement) => void;
  };
  pokemon: {
    delete: (id: number) => Promise<void>
  }
  search: {
    get: () => string;
    onSubmit: FormEventHandler<HTMLFormElement>
    onChange: ChangeEventHandler<HTMLInputElement>
  }
}
