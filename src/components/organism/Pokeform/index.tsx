import styles from "./style.module.scss";
import Range from "../../atom/Range";
import Input from "../../atom/Input";
import Button from "../../atom/Button";
import React, { FormEvent, useContext } from "react";
import { AppHandlers } from "../../../utils/interfaces/appHandlers.interface";
import { FormContext } from "../../../App";
import { PokeformI } from "../../../utils/interfaces/forms.interface";
import { formInit } from "../../../utils/init";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  formProps: React.FormHTMLAttributes<HTMLFormElement>;
  appHandlers?: AppHandlers;
}

export default function Pokeform({formProps, appHandlers}: Props) {
  const { req,fields } = useContext(FormContext);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.currentTarget;
    appHandlers?.form.set((f) => ({
      ...f,
      fields: {
        ...f.fields,
        [name]: value
      }
    }));
  };

  const heading: Record<typeof req, string> = {
    "POST": "Nuevo",
    "PUT": "Editar"
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await appHandlers?.form.submit()
  }

  function handleReset() {
    appHandlers?.form.set(formInit)
  }


  return (
    <form className={!formProps.hidden ? styles.pokemon : undefined} onReset={handleReset} onSubmit={handleSubmit} {...formProps}>
      <h2>{heading[req]} Pokemon</h2>
      <div id={styles.fields}>
        <Input name="name" label="Nombre:" defaultValue={fields.name} onChange={onChange} />
        <Range
          name="attack"
          label="Ataque:"
          value={fields.attack}
          onChange={onChange}
          min={0}
          max={100}
          step={1}
        />
        <Input
          name="image"
          label="Imágen:"
          defaultValue={fields.image}
          onChange={onChange}
          placeholder="URL"
        />
        <Range
          name="defense"
          label="Defensa:"
          value={fields.defense}
          onChange={onChange}
          min={0}
          max={100}
          step={1}
        />
      </div>
      <div id={styles.buttons}>
        <Button icon="save" text="Guardar" name="save" type="submit" />
        <Button icon="cancel" text="Cancelar" name="cancel" type="reset" />
      </div>
    </form>
  );
}
