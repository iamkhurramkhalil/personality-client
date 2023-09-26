import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppButton from "../AppButton";

describe("AppButton Component", () => {
  it("should renders button with default text and attributes", () => {
    const mockOnClick = jest.fn();
    render(<AppButton onClick={mockOnClick} />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute("disabled");
    expect(button).toHaveClass("border border-blue-500 rounded-md text-blue w-5/12 py-2 font-medium");

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should renders button with custom text and attributes", () => {
    const mockOnClick = jest.fn();
    render(
      <AppButton
        buttonText="Start Test"
        onClick={mockOnClick}
        disabled={false}
        className="custom-class"
      />
    );

    const button = screen.getByText("Start Test");
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute("disabled");
    expect(button).toHaveClass("custom-class");

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
