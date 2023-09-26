import React from "react";
import AppButton from "./AppButton";

function Result({ result, onClick }) {
  return (
    <>
      <p className="font-semibold	text-light-blue text-xl text-center mb-4">
        {result}
      </p>
      <AppButton
        buttonText=" Start Again"
        className={`flex justify-center text-white bg-blue hover:bg-light-blue
        px-4 py-2 rounded-md w-auto m-auto font-medium`}
        onClick={onClick}
      />
    </>
  );
}

export default Result;
