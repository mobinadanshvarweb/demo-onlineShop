import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F0]">
      <Header />
      <div className="flex-1 my-8 px-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
