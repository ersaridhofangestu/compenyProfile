import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <header className="fixed w-[100%] bg-slate-950 text-white selection:bg-none selection:text-blue-900 border-b-2 z-50">
      <nav className="max-w-[1240px] mx-auto flex justify-between items-center p-[1rem]">
        <div>
          <img
            src={Logo}
            alt="logo website"
            className="h-10 cursor-pointer order-1"
          />
        </div>
        <div
          className={`
          ${toggle ? "left-0" : "left-[-100%]"}
           absolute top-0 right-0 bottom-0 flex flex-col w-[100%] bg-slate-950 h-screen pt-[25vh] text-[28px] gap-16 items-center xl:relative xl:flex-row xl:w-auto xl:bg-none xl:pt-0 xl:left-0 xl:text-base xl:duration-0 xl:h-auto transition-all duration-300 order-2`}
        >
          <Link to="/">HOME</Link>
          <Link to="/">PRICING</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">CONTACT</Link>
        </div>
        <div onClick={handleToggle} className="xl:hidden z-50">
          {toggle ? <FaXmark size={50} /> : <IoMenu size={50} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
