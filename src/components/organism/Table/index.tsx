import { CSSProperties } from "react";
import styles from "./style.module.scss";

export interface TableHeader {
  text: string;
  style: CSSProperties;
}

export interface Props {
  headers: (TableHeader | string)[];
  rows: any[][];
}

export default function Table({ headers, rows }: Props) {
  function renderHeaders(): JSX.Element {
    const th_arr: JSX.Element[] = headers.map((h, i) => {
      if (typeof h === "string")
        return (
          <th role="columnheader" key={`${h}${i}`}>
            {h}
          </th>
        );
      return (
        <th role="columnheader" key={`${h.text}${i}`} style={h.style}>
          {h.text}
        </th>
      );
    });

    return <tr role="row">{th_arr}</tr>;
  }

  return (
    <table id={styles["pokemon-table"]}>
      <thead>{renderHeaders()}</thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} role="row">
            {row.map((e, i) => (
              <td role="cell" key={i}>
                {e}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
