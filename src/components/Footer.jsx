import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Input from "./Input";
import Button from "./Button";
const Footer = () => {
  return (
    <div className="w-[100%] p-[1rem] bg-slate-950">
      <div className="max-w-[1240px] mx-auto">
        <div className="py-7 grid grid-cols-2 lg:grid-cols-6 gap-10 text-slate-400">
          <div className="hidden lg:block">
            <h4 className="mb-3 font-semibold text-white">solutions</h4>
            <p>marketing</p>
            <p>analytics</p>
            <p>commerce</p>
            <p>insights</p>
          </div>
          <div className="hidden lg:block">
            <h4 className="mb-3 font-semibold text-white">support</h4>
            <p>pricing</p>
            <p>documentation</p>
            <p>guides</p>
            <p>API status</p>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="mb-3 font-semibold text-white">compeny</h4>
            <p>about</p>
            <p>blog</p>
            <p>jops</p>
            <p>press</p>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="mb-3 font-semibold text-white">legal</h4>
            <p>claim</p>
            <p>privacy</p>
            <p>cookies</p>
            <p>terms</p>
          </div>
          <div className="text-center lg:text-left col-span-2 text-white lg:flex flex-col gap-2">
            <p className="font-semibold">Subscribe to newsletter</p>
            <p className="text-sm text-slate-400">
              The latter news, and resources sent to you inbox weekly
            </p>
            <div className="block lg:grid lg:grid-cols-3">
              <Input
                className={"col-span-2 my-1 lg:my-0"}
                type={"email"}
                placeholder={"Enter your email"}
              />
              <Button name={"Subscribe"} />
            </div>
          </div>
        </div>
        <div className="text-slate-400 pt-5 border-t">
          <div className="flex justify-between">
            <p className="lg:flex items-center gap-2 hidden">
              <FaRegCopyright />
              Worldflow Inc, All rignt reserved
            </p>
            <div className="flex mx-auto lg:mx-0 gap-3">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
