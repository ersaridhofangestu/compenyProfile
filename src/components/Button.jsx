import React from "react";

const Button = ({name}) => {
  return (
    <div className="py-[.5rem] w-full bg-blue-700 text-white text-center font-semibold rounded">
      {name}
    </div>
  );
};

export default Button;
