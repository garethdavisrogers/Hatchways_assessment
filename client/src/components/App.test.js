import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
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
  it("renders a search by name input", async () => {
    const { getByRole } = await render(<App />, container);
    let re = new RegExp("search-by-name", "i");
    const searchByNameInput = await getByRole(re);
    expect(searchByNameInput).toBeTruthy();
  });
  it("renders a search by tag input", async () => {
    const { getByRole } = await render(<App />, container);
    let re = new RegExp("search-by-tag", "i");
    const searchByTagInput = await getByRole(re);
    expect(searchByTagInput).toBeTruthy();
  });
});
