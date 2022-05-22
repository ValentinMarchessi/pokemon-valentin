import { CSSProperties, Key, useInsertionEffect, useMemo, useState } from "react";
import { paginate } from "../../../utils/helpers/paginate";
import styles from "./style.module.scss";

export interface TableHeader {
  text: string;
  style: CSSProperties;
}

export interface Props<T> {
  headers: (TableHeader | string)[];
  rows: T[];
  rowsPerPage?: number;
}

export default function Table<T extends Record<any, any>>({ headers, rows, rowsPerPage }: Props<T>) {
  const pages = paginate(rows, rowsPerPage || 5);
  const lastPage = pages.length - 1;
  const [page, setPage] = useState(0);

  const pageHanlders = {
    prev: () => setPage((p) => (p > 0 ? p - 1 : p)),
    next: () => setPage((p) => (p < lastPage ? p + 1 : p)),
  };

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

  
  function renderRows() {
    return pages[page]?.map((row: any,k: Key) => {
      const rowCells = [];
      for (const i in row) {
        rowCells.push(<td key={i}>{row[i]}</td>);
      }
      return <tr role="row" key={k}>{rowCells}</tr>;
    }) || <h1>Loading</h1>;
  }

  return (
    <>
    <table id={styles["pokemon-table"]}>
      <thead>{renderHeaders()}</thead>
      <tbody>{renderRows()}</tbody>
      </table>
      <div>
        <button onClick={pageHanlders.prev}>Prev</button>
        <span>
          {page+1}/{lastPage+1}
        </span>
        <button onClick={pageHanlders.next}>Next</button> 
      </div>
    </>
  );
}
