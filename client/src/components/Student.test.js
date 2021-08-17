import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Student from "./Student";

describe("Student Component", () => {
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
  const dummyData = {
    firstName: "dummy",
    lastName: "dummys",
    email: "email@email.com",
    pic: "https://res.cloudinary.com/garethssites/image/upload/v1618883283/help-me-out/chnvvnoemkptryurgwtl.png",
    company: "dummyCorp",
    skill: "driving",
    grades: ["100", "90", "0"],
    tags: [],
  };
  it("renders a div with the role student-component", async () => {
    const { getByText } = render(<Student student={dummyData} />, container);
    const dummyEmail = getByText(/email@email.com/i);
    expect(dummyEmail).toBeTruthy();
  });
  it("shows test scores on clicking plus button", async () => {
    const onClick = jest.fn();
    const { getByRole } = await render(
      <Student student={dummyData} onClick={onClick} />,
      container
    );
    userEvent.click(screen.getByTestId("expand-button"));
    let tests = await screen.findAllByText(/Test/i);
    expect(tests.length).toBeGreaterThan(0);
    tests = null;
    userEvent.click(screen.getByTestId("contract-button"));
    tests = screen.findByText(/Test/i);
    expect(tests.length).toBeUndefined();
  });
});
