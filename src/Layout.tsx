import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="w-full flex flex-col  bg-[#FAF8F0]">
      <Header />
      <div className="flex-1 flex  justify-center items-center !my-8 md:!px-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
