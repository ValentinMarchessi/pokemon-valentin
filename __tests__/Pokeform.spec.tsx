import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Pokeform from "../src/components/organism/Pokeform";
import store from "../src/redux/store";

const Component = <Provider store={store}><Pokeform/></Provider>

describe("Pokeform", () => {
    describe("Validation", () => {
        it("Name is required", async() => {
            const form = render(Component);
            const name = await form.findByLabelText("Nombre:");
            expect(name.attributes.getNamedItem("required")).toBeDefined();
        })
        it("Image is required", async() => {
            const form = render(Component);
            const image = await form.findByLabelText("Imágen:");
            expect(image.attributes.getNamedItem("required")).toBeDefined();
        })
    })
})