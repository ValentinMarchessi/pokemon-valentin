import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export default function Range(props: Props) {
    const [value, setValue] = useState<number>(50);
    const range = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (range.current) {
            const { value, min: minStr, max: maxStr } = range.current;
            const [val, min, max] = [Number(value), Number(minStr), Number(maxStr)];
            range.current.style.backgroundSize = `${val - (min * 100) / (max - min)}% 100%`;
        }
    }, [range.current, range.current?.value]);

    const handleDrag = {
        capture: (e: React.ChangeEvent<HTMLInputElement>): void => {
            setValue(_ => Number(e.target.value));
            const { min: minStr, max: maxStr } = e.currentTarget;
            const [min, max] = [Number(minStr), Number(maxStr)];
            e.target.style.backgroundSize = `${value - (min * 100) / (max - min)}% 100%`;
            props.onChange?.(e);
        },
    };

    return (
        <div id={styles.range}>
            <label htmlFor={props.name}>{props.label}</label>
            <div id={styles.rangeWrapper}>
                <span>{props.min}</span>
                <input ref={range} type="range" value={value} {...props} onChange={handleDrag.capture}></input>
                <span>{props.max}</span>
            </div>
        </div>
    );
}
