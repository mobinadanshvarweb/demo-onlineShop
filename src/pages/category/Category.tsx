import { Link } from "react-router";
import navLinks from "../../data/nav-links";
import CategoryList from "./CategoryList";

const Category = () => {
  return (
    <div>
      <h1>
        <div className="flex w-full  gap-3 justify-center items-center">
          {navLinks[1].subMenu?.map((navlink) => {
            return (
              <Link
                to={`/category/${navlink.name.toLowerCase()}`}
                className="px-4 py-2 text-sm rounded-3xl shadow transition-all duration-300 hover:bg-white hover:text-amber-500 hover:-translate-y-0.5 bg-amber-600 text-white"
                key={navlink.id}
              >
                {navlink.name}
              </Link>
            );
          })}
        </div>
      </h1>
      <CategoryList />
    </div>
  );
};

export default Category;
