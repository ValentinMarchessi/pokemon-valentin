import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function Input({ name, label, ...props }: Props) {
  
  return (
    <div className={styles.field}>
      <label id={label} htmlFor={name}>
        {label}
      </label>
      <div id={styles.container}>
        <input
          id={name}
          aria-labelledby={label}
          name={name}
          type="text"
          {...props}
          placeholder={props.placeholder}
        ></input>
        {props.required && <span id={styles.error}>This field is required</span>}
      </div>
    </div>
  );
}
