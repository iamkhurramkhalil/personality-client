import React from "react";

function AppButton({buttonText='Submit',onClick,disabled=false,className='border border-blue-500 rounded-md text-blue w-5/12 py-2 font-medium'}) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}

export default AppButton;
