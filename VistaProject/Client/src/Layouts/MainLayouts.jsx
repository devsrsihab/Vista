import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const MainLayouts = () => {
  return (
    <>
      <div className="main w-4/5 mx-auto ">
        <div className="header">
          <Navbar />
        </div>
        <div className="outlet my-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayouts;
