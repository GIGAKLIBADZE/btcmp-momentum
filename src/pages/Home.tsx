import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="w-[60px] h-[60px] bg-black">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
