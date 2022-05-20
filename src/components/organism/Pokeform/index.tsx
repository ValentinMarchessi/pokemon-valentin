import styles from "./style.module.scss";
import Range from "../../atom/Range";
import Input from "../../atom/Input";
import Button from "../../atom/Button";
import React from "react";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
    hidden?: boolean;
}

export default function Pokeform(props: Props) {
  return (
    <form className={!props.hidden ? styles.pokemon : undefined} {...props}>
      <h2>Nuevo Pokemon</h2>
      <div id={styles.fields}>
        <Input name="name" label="Nombre:" />
        <Range name="attack" label="Ataque:" min={0} max={100} step={1} />
        <Input name="image" label="imágen:" placeholder="URL" />
        <Range name="defense" label="Defensa:" min={0} max={100} step={1} />
      </div>
      <div id={styles.buttons}>
        <Button icon="save" text="Guardar" name="save" type="submit" />
        <Button icon="cancel" text="Cancelar" name="cancel" type="reset" />
      </div>
    </form>
  );
}
