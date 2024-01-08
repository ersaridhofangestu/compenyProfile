import React from "react";
import {
  FaAccusoft,
  FaDatabase,
  FaFacebook,
  FaGithub,
  FaStarOfLife,
  FaTwitter,
} from "react-icons/fa";
import Input from "./Input";
import Button from "./Button";
function Hero() {
  return (
    <div className="bg-slate-950 text-white w-[100%] p-[1rem]">
      <div className="h-[100vh] max-w-[1240px] mx-auto pt-16 grid items-center lg:pt-24 xl:pt-16  lg:grid-cols-3">
        <div className="py-20 md:flex md:flex-col md:justify-center lg:block lg:col-span-2 lg:pr-40">
          <h2 className="text-4xl font-bold">Data to enrich your</h2>
          <p className="text-4xl font-semibold text-blue-700">
            online Business
          </p>
          <p className="py-6 text-sm font-thin text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
            harum distinctio corrupti placeat corporis doloremque recusandae nam
            laboriosam. Assumenda quia repellat ipsam nesciunt, at quam
            laboriosam esse praesentium? Ipsa numquam autem blanditiis soluta,
            reprehenderit repellendus itaque est eum ducimus esse?
          </p>
          <p className="uppercase">Used by</p>
          <div className="flex gap-3 mt-3">
            <div className="flex items-center gap-1 text-sm font-thin text-slate-300">
              <FaDatabase />
              Staxx
            </div>
            <div className="flex items-center gap-1 text-sm font-thin text-slate-300">
              <FaStarOfLife />
              Star al
            </div>
            <div className="flex items-center gap-1 text-sm font-thin text-slate-300">
              <FaAccusoft />
              Acccusoft
            </div>
          </div>
        </div>
        <div className=" bg-white p-[1rem] h-[30rem] text-slate-400 rounded lg:block hidden">
          <p className="capitalize">sign in with</p>
          <div className="flex py-3">
            <FaFacebook className="w-[35%] h-10 border p-2" />
            <FaTwitter className="w-[35%] h-10 border p-2" />
            <FaGithub className="w-[35%] h-10 border p-2" />
          </div>
          <div className="mt-8 w-full h-[0.1rem] bg-slate-200" />
          <p className="relative -mt-9 text-center w-10 mx-auto py-5 bg-white">
            OR
          </p>
          <form action="" className="py-2 flex flex-col gap-3">
            <Input type={"text"} placeholder={"Name"} />
            <Input type={"email"} placeholder={"Email"} />
            <Input type={"password"} placeholder={"Password"} />
            <Button name="Create your account" />
            <p className="mt-10">
              by sign up, your agree to our
              <span className="text-blue-700 mx-1">data policy</span>and
              <span className="text-blue-700 mx-1">Cookies policy</span>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
