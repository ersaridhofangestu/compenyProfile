import React from "react";
import { useState } from "react";
const Input = ({ type, placeholder }) => {
  return (
    <input
      className="block p-[.5rem] w-full rounded border placeholder:text-slate-400 text-black font-semibold  focus:outline-blue-700
      focus:placeholder:text-blue-700 focus:text-blue-700"
      type={type}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default Input;

