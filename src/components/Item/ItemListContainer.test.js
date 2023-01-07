import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ItemListContainer from "./ItemListContainer";

test("render content", () => {
  const component = render(<ItemListContainer />);
  console.log(component);
});
