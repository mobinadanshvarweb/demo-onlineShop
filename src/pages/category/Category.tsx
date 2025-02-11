import CategoryList from "./CategoryList";
import NavbarLink from "../nav-bar/NavBarLink";
import { NavbarItem, SubMenuItem } from "../../types/type";
import useNavbar from "../../hooks/useNavBar";

const Category = () => {
  const { data } = useNavbar();
  console.log(data);

  return (
    <div>
      <h1>
        <div className="flex w-full gap-3 justify-center items-center">
          {data?.map((item: NavbarItem) =>
            item.subMenu?.map((subItem: SubMenuItem) => (
              <NavbarLink key={subItem.title} title={subItem.title} />
            ))
          )}
        </div>
      </h1>
      <CategoryList />
    </div>
  );
};

export default Category;
