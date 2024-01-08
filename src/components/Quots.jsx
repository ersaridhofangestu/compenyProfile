import React from "react";
import { FaDatabase } from "react-icons/fa";
const Quots = ({ className }) => {
  return (
    <div className={`w-[100%] p-[1rem] py-[4rem] ${className}`}>
      <div className="max-w-[1240px] mx-auto">
        <div className="rounded p-[2rem] py-[5rem] lg:py-[10rem] text-white bg-img">
          <div className="flex gap-1 items-center font-semibold">
            <FaDatabase />
            <p>Staxx</p>
          </div>
          <p className="font-semibold text-sm text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vel quidem illum iure voluptate excepturi in quo, voluptatibus
            inventore nam? Distinctio deserunt temporibus fugiat doloribus quasi
            voluptatem, cupiditate ea neque quisquam libero nostrum recusandae
            numquam, tempora sequi eos harum omnis architecto. Quibusdam
            blanditiis doloremque quam in ipsum, ut incidunt laboriosam.
          </p>
        </div>
        <div className="block pt-20 lg:flex gap-10">
          <div>
            <h3 className="text-4xl font-semibold">
              Frequently asked questions
            </h3>
            <p className="text-sm">can't find the answer you'r looking for?</p>
            <p className="text-sm">
              Reach out to our{" "}
              <span className="mx-2 text-blue-700">customer support</span>team.
            </p>
          </div>
          <div className=" mt-10 lg:mt-0 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">How do you make holy water?</h3>
              <p>you biol the hel out of it. lorem insum dorol sit amet</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">How do you make holy water?</h3>
              <p>you biol the hel out of it. lorem insum dorol sit amet</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">How do you make holy water?</h3>
              <p>you biol the hel out of it. lorem insum dorol sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quots;
