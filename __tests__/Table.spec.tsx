import { render } from "@testing-library/react";

import Table, { TableHeader, Props } from "../src/components/organism/Table";

describe("<Table/>", () => {
  function renderTable() {
    const initial = {
      headers: ["1", "2", { text: "3", style: { width: "20%" } }] as (TableHeader | string)[],
      rows: [
        ["a", "b", "c"],
        ["A", "B", "C"],
        ["C", "B", "A"],
        ["c", "b", "a"],
      ],
    };
    return render(<Table headers={initial.headers} rows={initial.rows} />);
  }

  it("Renders the component.", () => expect(renderTable()).toBeTruthy());
  it("Has 5 rows", async () => {
    const { findAllByRole } = renderTable()
    const rows = await findAllByRole("row")
    expect(rows.length).toBe(5);
  })
  it("Has 12 cells", async () => {
    const { findAllByRole } = renderTable();
    const cells = await findAllByRole("cell");
    expect(cells.length).toBe(12);
  })
  it("Last header must have a width of 20%", async () => {
    const { findAllByRole } = renderTable();
    const headers = await findAllByRole("columnheader");
    expect(headers.at(-1)).toHaveAttribute("style")
    expect(headers.at(-1)?.style).toMatchObject({ width: "20%" });
  } )
});
