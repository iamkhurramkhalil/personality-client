import React from "react";

const Question=({question,selectedOption,onSelectOption})=> {

  return (
    <div >
      <p className="font-medium	text-xl text-slate-900 mt-3 mb-3 ">
              {question.text}
            </p>

            <div className="flex flex-col">
              {question?.options.map(
                (option, index) => (
                  <label className="flex  mt-2" key={index}>
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => onSelectOption(option)}
                    />
                    <span className="text-base font-medium ml-2 ">
                      {option}
                    </span>
                  </label>
                )
              )}
            </div>

    </div>
  );
}

export default Question;
