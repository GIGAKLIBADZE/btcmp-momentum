import React from "react";
import Timer from "../images/timer.png";
import { Outlet } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <h1
            style={{ fontFamily: "Fredoka One" }}
            className="text-[3.1rem] font-normal leading-normal text-[#8338ec]"
          >
            Momentum
          </h1>
          <img src={Timer} alt="Timer" />
        </div>
        <section className="flex items-center gap-[4rem]">
          <button
            className="w-[22.5rem] h-[3.9rem] rounded-[5px] bg-transparent border-1 border-[#8338ec]
                  text-[1.6rem] text-normal text-[#212529]"
          >
            თანამშრომლის შექმნა
          </button>
          <button className="w-[26.8rem] h-[4rem] rounded-[5px] bg-[#8338ec] text-[1.6rem] font-normal leading-normal text-white">
            + შექმენი ახალი დავალება
          </button>
        </section>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
