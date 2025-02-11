import navLinks from "../data/nav-links";
import MiniNavBar from "./MiniNavBar";
import { PiInstagramLogo } from "react-icons/pi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { PiPhoneLight } from "react-icons/pi";
const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center !py-10 !px-20 ">
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <div>
          <img
            src="https://www.accessorize.com/on/demandware.static/-/Library-Sites-accessorize-content-global/default/dw95665514/global/logo.svg"
            alt="Accessorize"
            width="163"
            height="17"
          />
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="border-b border-dashed">لینک های مفید</p>

            <ul className="flex flex-col text-amber-950 gap-3">
              {navLinks.map((link) => {
                return (
                  <MiniNavBar
                    icon={<>{link.name}</>}
                    src={link.path}
                    key={link.id}
                  />
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-end justify-between">
            <div className="flex gap-3">
              <PiPhoneLight />
              <PiInstagramLogo />
              <PiTelegramLogoLight />
            </div>
            <div className="">
              <img
                className="w-12 h-12 object-contain"
                src="/img/enamad.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="gap-2 cursor-default flex justify-center items-center text-xs font-mono font-stretch-ultra-expanded">
            <a
              className="underline"
              target="_blank"
              href="https://github.com/mobinadanshvarweb"
            >
              {" "}
              mowin{" "}
            </a>
            Made with 💕 by
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
