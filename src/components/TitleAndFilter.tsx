import Arrow from "../images/arrow-filter.png";

const TitleAndFilter: React.FC = () => {
  return (
    <div className="relative mt-[7.1rem]">
      <h2 className="text-[3.4rem] font-semibold leading-normal text-[#212529]">
        დავალებების გვერდი
      </h2>
      <section
        className="flex items-center justify-between gap-[4.5rem] w-[68.8rem] h-[4.4rem] rounded-[10px] px-[1.8rem] bg-transparent
                  text-[1.6rem] font-normal leading-normal text-[#0d0f10] border-1 border-[#dee2e6] mt-[5.2rem]"
      >
        <div className="filter-container">
          <span>დეპარტამენტი</span>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="filter-container">
          <span>პრიორიტეტი</span>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="filter-container">
          <span>თანამშრომელი</span>
          <img src={Arrow} alt="arrow" />
        </div>
      </section>
      <div
        className="w-[68.8rem] rounded-[10px] pt-[4rem] px-[3rem] pb-[2rem] bg-white border-1 border-[#8338ec]
                  mt-[1.2rem] top-auto absolute"
      >
        <section className="flex flex-col gap-[2.2rem]">
          <div className="flex items-center">
            <input type="checkbox" className="custom-check" />
            <span className="departament-filter-text">
              მარკეტინგის დეპარტამენტი
            </span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="custom-check" />
            <span className="departament-filter-text">
              დიზაინის დეპარტამენტი
            </span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="custom-check" />
            <span className="departament-filter-text">
              ლოჯისტიკის დეპარტამენტი
            </span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="custom-check" />
            <span className="departament-filter-text">IT დეპარტამენტი</span>
          </div>
        </section>
        <div className="flex justify-end">
          <div
            className="self-end w-[15.5rem] h-[3.5rem] rounded-[20px] bg-[#8338ec]
                    text-[1.6rem] font-normal leading-normal text-white mt-[2.7rem] flex items-center justify-center"
          >
            არჩევა
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleAndFilter;
