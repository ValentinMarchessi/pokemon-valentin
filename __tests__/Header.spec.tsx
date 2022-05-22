import { render } from "@testing-library/react";
import Header from "../src/components/organism/Header";
import { Provider } from "react-redux";
import store from "../src/redux/store";

const Component = <Provider store={store}><Header/></Provider>

describe("<Header/>", () => {
  it("Renders the component.", () => expect(render(Component)).toBeTruthy());
  it("Displays a searchbar", async () => {
    const { findByRole } = render(Component);
    const searchbar = await findByRole("searchbox");
    expect(searchbar).toBeInTheDocument();
  });
  it("Renders a button with inner text 'Nuevo'", async () => {
    const { findByRole } = render(Component);
    const button = await findByRole("button");
    expect(button.textContent).toContain("Nuevo");
  })
});
