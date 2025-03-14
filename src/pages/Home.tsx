import TitleAndFilter from "../components/TitleAndFilter";
import AddedTasks from "../components/AddedTasks";

const Home: React.FC = () => {
  return (
    <div>
      <TitleAndFilter />
      <AddedTasks />
    </div>
  );
};

export default Home;
