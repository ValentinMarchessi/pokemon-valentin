import { render } from "@testing-library/react";

import Header from "../src/components/organism/Header";

describe("<Header/>", () => {
  it("Renders the component.", () => expect(render(<Header />)).toBeTruthy())
  it("Displays a searchbar", async () => {
    const { findByRole } = render(<Header />)
    const searchbar = await findByRole("searchbox");
    expect(searchbar).toBeInTheDocument();
  });
  it("Renders a button with inner text 'Nuevo'", async () => {
    const { findByRole } = render(<Header />);
    const button = await findByRole("button");
    expect(button.textContent).toContain("Nuevo");
  })
});
