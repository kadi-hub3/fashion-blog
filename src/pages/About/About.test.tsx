import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import About from "./About";

test("renders correctly", () => {
  const component = render(<About />);
  component.getByText("about");
});
