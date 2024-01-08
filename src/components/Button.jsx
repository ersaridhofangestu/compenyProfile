import React from "react";

const Button = ({ name }) => {
  return (
    <div className="py-[.5rem] w-full bg-blue-700 text-white text-center font-semibold rounded hover:bg-blue-800 active:bg-blue-900">
      {name}
    </div>
  );
};

export default Button;
