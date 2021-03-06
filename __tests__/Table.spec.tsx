import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Table, { Props } from "../src/components/molecule/Table";
import PokemonTable from "../src/components/organism/PokeTable";
import store from "../src/redux/store";
import { pokemons } from "../__mocks__/pokemons";

describe("<Table/>", () => {
  function renderTable() {
    interface User {
      name: string;
      email: string;
      age: number;
    }
    const initial: Props<User> = {
      headers: ["Name", "E-mail", { text: "Age", style: { width: "20%" } }],
      rows: [
        { name: "Jorge", email: "jorge@gmail.com", age: 20 },
        { name: "Carlos", email: "carlos@gmail.com", age: 43 },
        { name: "Pepito", email: "pepito@gmail.com", age: 64 },
        { name: "Jose", email: "jose@gmail.com", age: 34 },
      ],
    };
    return render(<Table headers={initial.headers} rows={initial.rows} />);
  }

  it("Renders the component.", () => {
    const table = renderTable();
    expect(table).toBeTruthy();
    expect(table.baseElement).toBeVisible();
  });
  it("Has 5 rows", async () => {
    const { findAllByRole } = renderTable();
    const rows = await findAllByRole("row");
    //+1 accounts for the header row, which has role "rowheader" instead of "row"
    expect(rows.length + 1).toBe(5);
  });
  it("Has 12 cells (excluding headers)", async () => {
    const { findAllByRole } = renderTable();
    const cells = await findAllByRole("cell");
    expect(cells.length).toBe(12);
  });
  it("Last header must have a width of 20%", async () => {
    const { findAllByRole } = renderTable();
    const headers = await findAllByRole("columnheader");
    expect(headers.at(-1)).toHaveAttribute("style");
    expect(headers.at(-1)?.style).toMatchObject({ width: "20%" });
  });
});

describe("Pokemon <Table/>", () => {
  const Component = (
    <Provider store={store}>
      <PokemonTable />
    </Provider>
  );

  beforeAll(async () => {
    //Loads the store with mock data, simulating a GET request from the API.
    store.dispatch({type: "GET", payload: pokemons})
  });

  function renderTable() {
    return render(Component);
  }
  it("Headers should be ['Nombre','Im??gen','Ataque','Defensa','Acciones']", async () => {
    const { findAllByRole } = renderTable();
    const headers = (await findAllByRole("columnheader")).map((h) => h.textContent);
    expect(headers).toMatchObject(["Nombre", "Im??gen", "Ataque", "Defensa", "Acciones"]);
  });
  describe("Static Prototype", () => {
    it("Contains Ivysaur", async () => {
      const { findAllByRole } = renderTable();
      const row_ivisaur = (await findAllByRole("row")).find((row) =>
        row.textContent?.includes("Ivysaur")
      );
      expect(row_ivisaur).toBeDefined();
    });
    it("Ivysaur stats should be ATK:65, DEF: 38", async () => {
      const { findAllByRole } = renderTable();
      const row_ivisaur = (await findAllByRole("row")).find((row) =>
        row.textContent?.includes("Ivysaur")
      );
      expect(row_ivisaur).toBeDefined();
      const cells: string[] = [];
      row_ivisaur?.childNodes.forEach((node) => cells.push(node.textContent || ""));
      expect(cells).toContain("65");
      expect(cells).toContain("38");
    });
  });
});
