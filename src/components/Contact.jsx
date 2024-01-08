import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Input from "./Input";
import Button from "./Button";
const Contact = ({className}) => {
  return (
    <div className={`w-[100%] p-[1rem] ${className}`}>
      <div className="max-w-[1240px] mx-auto lg:grid lg:grid-cols-2 gap-20">
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl font-semibold">Get in touch</h3>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            cupiditate praesentium totam blanditiis autem repellat ratione
            reiciendis nostrum ad, ea fuga, voluptatem dignissimos voluptatibus
            in quasi voluptate, maxime dolore!
          </p>
          <p>7.42 evergreen terrace</p>
          <p>springfield, OR 1234</p>
          <div>
            <div className="flex gap-2 items-center my-3">
              <FaPhone />
              <p>+62 123-4567-8910</p>
            </div>
            <div className="flex gap-2 items-center my-3">
              <MdEmail />
              <p>support@exaple.com</p>
            </div>
            <p className="mt-10">
              Looking for careers?
              <span className="mx-2 text-blue-700 font-semibold">
                view all job openings
              </span>
            </p>
          </div>
        </div>
        <div className="my-10">
          <form className="flex flex-col gap-3">
            <Input type={"text"} placeholder={"Full name"} />
            <Input type={"email"} placeholder={"Email"} />
            <Input type={"tel"} placeholder={"Phone"} />
            <Input.Area />
            <div className="grid grid-cols-3 items-center">
              <input type="checkbox" className="lg:col-span-2" />
              <p className="text-sm">
                By checking this box, you agree to the{" "}
                <span className="text-blue-700 font-semibold mx-2">
                  privacy policy
                </span>
                and
                <span className="text-blue-700 font-semibold mx-2">
                  cooking policy
                </span>
              </p>
            </div>
            <Button name={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
