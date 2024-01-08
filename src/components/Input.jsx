import React from "react";
const Input = ({ type, placeholder, className }) => {
  return (
    <input
      className={`block p-[.5rem] w-full rounded border placeholder:text-slate-400 text-black font-semibold  focus:outline-blue-700
      focus:placeholder:text-blue-700 focus:text-blue-700 ${className}`}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default Input;

const Area = () => {
  return (
    <textarea
      className="block p-[.5rem] w-full rounded border placeholder:text-slate-400 text-black font-semibold  focus:outline-blue-700
    focus:placeholder:text-blue-700 focus:text-blue-700"
      name="message"
      placeholder="Massage"
      cols="30"
      rows="5"
    >
    </textarea>
    
  );
};

Input.Area = Area;
