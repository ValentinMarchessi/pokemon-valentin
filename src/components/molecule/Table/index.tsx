import { CSSProperties } from "react";
import styles from "./style.module.scss";

export interface TableHeader {
  text: string;
  style: CSSProperties;
}

export interface Props<T> {
  headers: (TableHeader | string)[];
  rows: T[];
}

export default function Table<T extends Record<any, any>>({ headers, rows }: Props<T>) {
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

    return <tr role="rowheader">{th_arr}</tr>;
  }

  function renderCells() {
    return rows.map((row,i) => {
      const rowCells = [];
      for (const i in row) {
        rowCells.push(<td>{row[i]}</td>);
      }
      return <tr role="row" key={i}>{rowCells}</tr>;
    });
  }

  return (
    <table id={styles["pokemon-table"]}>
      <thead>{renderHeaders()}</thead>
      <tbody>{renderCells()}</tbody>
    </table>
  );
}
