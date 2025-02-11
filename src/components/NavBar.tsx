import { Link } from "react-router";
import useNavbar from "../hooks/useNavBar";

const NavBar = () => {
  const { data } = useNavbar();

  return (
    <ul className="flex justify-center items-center text-xs sm:gap-3  md:gap-6 relative">
      {data?.map(
        (navLink: {
          _id: string;
          title: string;
          subMenu: [];
          slug: string;
        }) => (
          <li key={navLink._id} className="relative   shrink-0 group">
            <Link
              className="flex flex-col items-center group capitalize"
              to={navLink.slug}
            >
              {navLink.title}
              <span className="w-0 group-hover:w-full h-[0.7px] bg-black transition-all duration-300 ease-in-out"></span>
            </Link>

            {navLink.subMenu && (
              <ul
                className="absolute left-0 top-full
              mt-2 bg-white flex flex-col shadow-lg rounded-md !p-2 w-48 transition-all duration-300 opacity-0 h-0 overflow-hidden scale-95 group-hover:opacity-100
                group-hover:h-fit z-50"
              >
                {navLink.subMenu?.map((subItem: { title: string }) => (
                  <Link
                    to={`/categories/${subItem.title.toLowerCase()}`}
                    key={subItem.title}
                    className="hover:bg-gray-200 rounded-md !p-2 transition w-full"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </ul>
            )}
          </li>
        )
      )}
    </ul>
  );
};

export default NavBar;
