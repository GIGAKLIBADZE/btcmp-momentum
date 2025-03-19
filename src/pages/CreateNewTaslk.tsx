import Medium from "../images/filter-medium.png";

const CreateNewTask: React.FC = () => {
  return (
    <div className="mt-[4rem]">
      <h2 className="text-[3.4rem] font-semibold leading-normal text-[#212529]">
        შექმენი ახალი დავალება
      </h2>
      <div
        className="w-[168.4rem] pt-[6.5rem] pr-[36.8rem] pb-[21.6rem] pl-[5.5rem] rounded-[4px]
                  border-[0.3px] border-[#ddd2ff] bg-[rgba(251,249,255,0.65)] mt-[2.5rem]"
      >
        <div>
          <div>
            <label>სათაური*</label>
            <input />
          </div>
          <div>
            <label>დეპარტამენტი*</label>
            <select name="departments" id="departments">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="description">აღწერა</label>
            <textarea id="description" name="description"></textarea>
          </div>
          <div>
            <label htmlFor="responsible-employee"></label>
            <select id="employee" name="employee">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <div>
              <label htmlFor="priority">პრიორიტეტი*</label>
              <select id="priority" name="priority">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <img src={Medium} alt="Medium" />
            </div>
            <div>
              <label htmlFor="status">სტატუსი</label>
              <select id="status" name="status">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="date">დედლაინი</label>
            <input id="date" name="date" type="date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTask;
