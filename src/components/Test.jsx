import React, { useState, useEffect } from "react";
import  personalityQuestions  from "../utils/personalityQuestions.json";
import Question from "./Question";
import AppButton from "./AppButton";
import Result from "./Result";

function Test() {
  const resultArray = [
    "You are more of an Introvert.",
    "You are more of an Extrovert.",
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(personalityQuestions.length).fill(null)
  );
  const [testResult, setTestResult] = useState("start test");

  const onSelectOption = (selectedOption) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = selectedOption;
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < personalityQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const nonNullSelectedOptions = selectedOptions.filter(
        (option) => option !== null
      );
      localStorage.setItem(
        "selectedOptions",
        JSON.stringify(nonNullSelectedOptions)
      );
    } else {
      // Determine whether introvert or extrovert based on selected options
      const introvertScore = selectedOptions.reduce((score, option) => {
        if (option === "Strongly Agree" || option === "Agree") {
          return score + 1;
        }
        return score;
      }, 0);

      if (introvertScore >= 3) {
        setTestResult("You are more of an Introvert.");
        localStorage.removeItem("selectedOptions");
      } else {
        setTestResult("You are more of an Extrovert.");
        localStorage.removeItem("selectedOptions");
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleCheckAgain = () => {
    setCurrentQuestionIndex(0);
    setTestResult("continue quiz");
    setSelectedOptions(new Array(personalityQuestions.length).fill(null));
  };

  useEffect(() => {
    // Retrieve the saved question index from localStorage
    const selectedAnswers = localStorage.getItem("selectedOptions");
    const parsedSelectedAnswers = JSON.parse(selectedAnswers);
    if (parsedSelectedAnswers) {
      setCurrentQuestionIndex(parsedSelectedAnswers.length);
      setSelectedOptions(parsedSelectedAnswers);
      setTestResult("continue quiz");
    }
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-auto  bg-white shadow-md rounded-lg p-7">
          <h2 className="font-semibold text-blue	text-3xl text-center mb-3">
            Personality Test
          </h2>

          {/* Starting Test Case  */}
          {testResult === "start test" && (
            <>
              <AppButton
                buttonText=" Start Test"
                className={`flex justify-center text-white bg-blue hover:bg-light-blue
 px-4 py-2 rounded-md w-auto m-auto font-medium cursor-pointer`}
                onClick={() => setTestResult("continue quiz")}
              />
            </>
          )}

          {/* Result Test Case  */}
          {resultArray.includes(testResult) && (
            <Result result={testResult} onClick={handleCheckAgain} />
          )}

          {/* Continue Quiz Test Case  */}
          {testResult === "continue quiz" && (
            <>
              <p className="text-sm text-slate-500	">
                Question {currentQuestionIndex + 1} /{" "}
                {personalityQuestions.length}
              </p>
              <Question
                question={personalityQuestions[currentQuestionIndex]}
                onSelectOption={onSelectOption}
                selectedOption={selectedOptions[currentQuestionIndex]}
              />
              <div className="flex justify-between mt-5">
                {currentQuestionIndex !== 0 && (
                  <AppButton
                    buttonText="Previous"
                    className="border border-blue-500 rounded-md text-blue w-5/12 py-2	font-medium"
                    onClick={handlePrevious}
                  />
                )}
                <AppButton
                  buttonText={
                    currentQuestionIndex !== personalityQuestions.length - 1
                      ? "Next Question"
                      : "Get Result"
                  }
                  className={` text-white ${
                    selectedOptions[currentQuestionIndex]
                      ? "bg-blue hover:bg-light-blue"
                      : "bg-light-gray"
                  } px-4 py-2 rounded-md w-5/12 font-medium`}
                  onClick={handleNext}
                  disabled={
                    selectedOptions[currentQuestionIndex] ? false : true
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Test;
