import React from "react";
import Button from "../components/Button";
const Price = ({ className }) => {
  return (
    <div className={`w-[100%] pt-[2rem] p-[1rem] ${className}`}>
      <div className="max-w-[1240px] mx-auto">
        <div className="block lg:grid lg:grid-cols-3 items-center">
          <div className="col-span-2">
            <h3 className="text-4xl font-semibold">
              Everything you need for
              <span className="text-blue-700 block md:inline ml-2">
                $99 a month
              </span>
            </h3>
            <p className="text-sm my-2 xl:my-0">
              Includes every featir we offer pluse unlimitid projects and
              unlimited users
            </p>
          </div>
          <Button name={"get started today"} />
        </div>
        <div className="mt-20 justify-between gap-10 hidden lg:flex">
          <div className="w-1/3 flex flex-col gap-2">
            <p className="text-sm text-blue-700 font-semibold uppercase ">
              everything you need
            </p>
            <h4 className="text-3xl font-semibold">All-in-one platform</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              possimus quasi eos amet iusto rem nemo, laboriosam eaque fuga
              animi itaque alias, fugiat numquam harum impedit excepturi? Fugit
              corporis quos sint perspiciatis soluta ab sunt, tempore, facere
              commodi dolore enim!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="pb-3 border-b">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
