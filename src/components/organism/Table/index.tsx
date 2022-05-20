import Button from "../../atom/Button";
import styles from "./style.module.scss";

interface Props {
  headers: JSX.Element[];
  rows: any[][];
}

export default function Table({ headers, rows }: Props) {
  return (
    <table id={styles["pokemon-table"]}>
      <thead>
          <tr>
              {headers}
          </tr>
      </thead>
      <tbody>
          {rows.map((row, i) => (
              <tr key={i}>
                  {row.map((e,i) => (
                      <td key={i}>{e}</td>
                  ))}
              </tr>
          ))}
      </tbody>
      </table>
  );
}
