import React, { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import styles from "./style.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function Range(props: Props) {
  const [value, setValue] = useState<number>(Number(props?.value));
  const range = useRef<HTMLInputElement>(null);
  const [val, min, max] = [Number(value), Number(props.min), Number(props.max)];

  useEffect(() => setValue(Number(props.value)), [props.value]);

  const handle = {
    change: (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(Number(e.target.value));
      props.onChange?.(e);
    },
  };
  const bgSize = useMemo(() => `${((val - min) * 100) / (max - min)}% 100%`, [val, min, max]);

  const rangeStyle: CSSProperties = {
    backgroundSize: bgSize,
  };

  return (
    <div id={styles.range}>
      <label htmlFor={props.name}>{props.label}</label>
      <div id={styles.rangeWrapper}>
        <span>{props.min}</span>
        <input
          style={rangeStyle}
          ref={range}
          type="range"
          value={value}
          onChange={handle.change}
          {...props}
        ></input>
        <span>{props.max}</span>
      </div>
    </div>
  );
}
