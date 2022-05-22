import styles from "./style.module.scss";
import Range from "../../atom/Range";
import Input from "../../atom/Input";
import Button from "../../atom/Button";
import React, { FormEvent, useEffect, useState } from "react";
import { PokeformI } from "../../../utils/interfaces/forms.interface";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { PokemonActions } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function Pokeform() {
  const store = useSelector<RootState,RootState>(s => s)
  const [form, setForm] = useState<PokeformI>(store.form);
  const dispatch = useDispatch();

  useEffect(() => setForm(store.form), [store.form])

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.currentTarget;
    setForm((f) => ({
      ...f,
      fields: {
        ...f.fields,
        [name]: value
      }
    }));
  };

  const heading: Record<typeof form.req, string> = {
    "POST": "Nuevo",
    "PUT": "Editar"
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await PokemonActions[form.req](form.fields)(dispatch);
  }

  async function handleReset() {
    await PokemonActions.RESET_FORM("hidden")(dispatch);
  }

  return (
    <form
      className={!form.hidden ? styles.pokemon : undefined}
      onReset={handleReset}
      onSubmit={handleSubmit}
      hidden={form.hidden}
    >
      <h2>{heading[form.req]} Pokemon</h2>
      <div id={styles.fields}>
        <Input
          name="name"
          label="Nombre:"
          defaultValue={form.fields.name}
          onChange={onChange}
          required={!form.fields.name}
        />
        <Range
          name="attack"
          label="Ataque:"
          value={form.fields.attack}
          onChange={onChange}
          min={0}
          max={100}
          step={1}
        />
        <Input
          name="image"
          label="Imágen:"
          defaultValue={form.fields.image}
          onChange={onChange}
          placeholder="URL"
          required={!form.fields.image}
        />
        <Range
          name="defense"
          label="Defensa:"
          value={form.fields.defense}
          onChange={onChange}
          min={0}
          max={100}
          step={1}
        />
      </div>
      <div id={styles.buttons}>
        <Button
          icon="save"
          text="Guardar"
          name="save"
          type="submit"
          disabled={!(form.fields.name && form.fields.image)}
        />
        <Button icon="cancel" text="Cancelar" name="cancel" type="reset" />
      </div>
    </form>
  );
}
