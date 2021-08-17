import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Students from "./Students";

describe("Students Component", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it("renders a div by the role student-list", async () => {
    const { getByRole } = await render(<Students />, container);
    const searchByNameInput = getByRole(/student-list/i);
    expect(searchByNameInput).toBeTruthy();
  });
});
