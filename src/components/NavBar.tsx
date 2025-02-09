import { useState } from "react";
import { Link } from "react-router";
import navLinks from "../data/nav-links";

const NavBar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(0);
  return (
    <ul className="flex justify-center items-center gap-6 relative">
      {navLinks.map((navLink) => (
        <li
          key={navLink.id}
          className="relative group"
          onMouseEnter={() => setActiveSubMenu(navLink.id)}
        >
          <Link
            className="flex flex-col items-center group capitalize"
            to={navLink.path}
          >
            {navLink.name}
            <span className="w-0 group-hover:w-full h-[0.7px] bg-black transition-all duration-300 ease-in-out"></span>
          </Link>

          {navLink.subMenu && activeSubMenu === navLink.id && (
            <ul
              onMouseLeave={() => setActiveSubMenu(0)}
              className="absolute left-0 top-full 
              mt-2 bg-white flex flex-col shadow-lg rounded-md p-2 w-48 transition-all duration-300 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 z-50"
            >
              {navLink.subMenu.map((subItem) => (
                <Link
                  to={`/category/${subItem.name.toLowerCase()}`}
                  key={subItem.id}
                  className="hover:bg-gray-200 rounded-md p-2 transition w-full"
                >
                  {subItem.name}
                </Link>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
