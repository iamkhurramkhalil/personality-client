import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Question from "../Question";

describe("Question Component", () => {
  const mockOnSelectOption = jest.fn();

  const question = {
    text: "I feel recharged after spending time alone.",
    options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
  };

  it("should renders question text and options", () => {
    render(
      <Question
        question={question}
        selectedOption={null}
        onSelectOption={mockOnSelectOption}
      />
    );

    const questionText = screen.getByText(question.text);
    expect(questionText).toBeInTheDocument();

    const optionLabels = question.options.map((option) =>
      screen.getByText(option)
    );
    optionLabels.forEach((label) => expect(label).toBeInTheDocument());

    const radioInputs = screen.getAllByRole("radio");
    expect(radioInputs).toHaveLength(question.options.length);

    radioInputs.forEach((input, index) => {
      fireEvent.click(input);
      expect(mockOnSelectOption).toHaveBeenCalledWith(question.options[index]);
    });
  });

  it("should marks the selected option as checked", () => {
    const selectedOption = "Agree";

    render(
      <Question
        question={question}
        selectedOption={selectedOption}
        onSelectOption={mockOnSelectOption}
      />
    );

    const checkedInput = screen.getByRole("radio", { name: selectedOption });
    expect(checkedInput).toBeChecked();
  });
});
