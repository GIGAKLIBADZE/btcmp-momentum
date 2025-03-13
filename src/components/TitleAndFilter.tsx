import Arrow from "../images/arrow-filter.png";

const TitleAndFilter: React.FC = () => {
  return (
    <div className="mt-[7.1rem]">
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
    </div>
  );
};

export default TitleAndFilter;
