import { PiHeartLight, PiInstagramLogo } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import { CiShoppingBasket } from "react-icons/ci";
import NavBar from "./NavBar";
import MiniNavBar from "./MiniNavBar";
const Header = () => {
  return (
    <div className="w-full   flex justify-center items-center !py-3 md:!px-5 ">
      <div className=" w-full h-full flex flex-col gap-5 pt-4 ">
        <div className="w-full flex flex-col justify-center items-center gap-10 md:gap-2   md:!px-10">
          <MiniNavBar
            icon={
              <img
                src="https://www.accessorize.com/on/demandware.static/-/Library-Sites-accessorize-content-global/default/dw95665514/global/logo.svg"
                alt="Accessorize"
                width="163"
                height="17"
              />
            }
            src="/"
          />

          <div className="w-full flex justify-center gap-6 md:justify-between">
            <a
              href="https://www.instagram.com/__mowin__"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <PiInstagramLogo size={20} />
            </a>
            <div className="flex justify-center gap-6 md:gap-2 md:justify-between  items-center">
              <MiniNavBar icon={<PiHeartLight size={20} />} src="wishlist" />
              <MiniNavBar icon={<CiShoppingBasket size={20} />} src="/cart" />
              <MiniNavBar icon={<PiUserLight size={20} />} src="/user" />
            </div>
          </div>
          <div className="  w-full">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
