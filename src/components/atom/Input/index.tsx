import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export default function Input({ name, label, ...props }: Props) {


    return (
        <div className={styles.field}>
            <label htmlFor={name}>{label}</label>
            <input name={name} type="text" {...props} placeholder={props.placeholder}></input>
        </div>
    );
}