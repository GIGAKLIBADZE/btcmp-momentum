import FilterMiddle from "../images/filter-medium.png";
import Person from "../images/icon-person.png";
import Comment from "../images/icon-comment.png";
import axios from "axios";
import { useEffect, useState } from "react";

const AddedTasks: React.FC = () => {
  return (
    <section className="mt-[7.9rem] grid grid-cols-[repeat(4,38.1rem)] gap-x-[5rem]">
      <div>
        <div className="task-type-title bg-[#f7bc30]">დასაწყისები</div>
        <section>
          <div className="p-[2rem] rounded-[15px] bg-transparent border-1 border-[#f7bc30] mt-[3rem]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[1rem]">
                <div
                  className="w-[8.6rem] h-[2.6rem] bg-transparent rounded-[4px] flex items-center justify-center gap-[0.6rem]
                            border-[0.5px] border-[#ffbe0b]"
                >
                  <img src={FilterMiddle} alt="Filter" />
                  <span className="text-[1.2rem] font-medium leading-[1.5] text-[#ffbe0b]">
                    საშუალო
                  </span>
                </div>
                <div
                  className="w-[8.8rem] h-[2.4rem] rounded-[15px] bg-[#ff66a8] 
                            text-[1.2rem] font-normal leading-normal text-white flex items-center justify-center"
                >
                  დიზაინი
                </div>
              </div>
              <p className="text-[1.2rem] font-normal leading-normal text-[#212529]">
                22 იანვ, 2022
              </p>
            </div>
            <div className="w-[32rem]">
              <h4 className="text-[1.5rem] font-medium leading-normal text-[#212529] mt-[2.8rem]">
                Redberry-ს საიტის ლენდინგის დიზაინი
              </h4>
              <p className="text-[1.4rem] font-normal leading-normal text-[#343a40] mt-[1.2rem]">
                შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს,
                ნავიგაციას.
              </p>
            </div>
            <div
              className="flex justify-between items-center mt-[2.8rem] text-[1.4rem] font-normal leading-normal 
                      text-[#212529]"
            >
              <img src={Person} alt="Person" />
              <div className="flex items-center gap-[0.5rem]">
                <img src={Comment} alt="Comment" />
                <span className="text-[1.4rem] font-normal leading-normal text-[#212529]">
                  8
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="task-type-title bg-[#fb5607]">პროგრესში</div>
        <section></section>
      </div>
      <div>
        <div className="task-type-title bg-[#ff006e]">მზად ტესტირებისთვის</div>
        <section></section>
      </div>
      <div>
        <div className="task-type-title bg-[#3a86ff]">დასრულებული</div>
        <section></section>
      </div>
    </section>
  );
};

export default AddedTasks;
