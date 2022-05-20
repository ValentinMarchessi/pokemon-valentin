import style from "./style.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    text?: string;
}

export default function Button(props: Props) {
    const { icon, text } = props;
    return (
        <button className={style.button} {...props}>
            {icon && (
                <span id={style.icon} className="material-icons">
                    {icon}
                </span>
            )}
            {text && <span>{text}</span>}
        </button>
    );
}
