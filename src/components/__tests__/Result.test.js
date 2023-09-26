import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Result from "../Result";

describe("Result Component", () => {
  it("should renders result text and start again button", () => {
    const mockOnClick = jest.fn();
    const resultText = "You are more of an Introvert.";

    render(<Result result={resultText} onClick={mockOnClick} />);

    const resultElement = screen.getByText(resultText);
    expect(resultElement).toBeInTheDocument();

    const button = screen.getByText("Start Again");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "flex justify-center text-white bg-blue hover:bg-light-blue px-4 py-2 rounded-md w-auto m-auto font-medium"
    );

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
