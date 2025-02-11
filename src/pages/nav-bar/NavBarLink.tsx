import { Link } from "react-router";

const NavbarLink = ({ title }: { title: string }) => (
  <Link
    to={`/categories/${title}`}
    className="w-full md:w-fit flex justify-center items-center !px-4 !py-2 md:text-sm rounded-3xl shadow transition-all duration-300 hover:bg-white hover:text-amber-500 hover:-translate-y-0.5 bg-amber-600 text-white"
  >
    {title}
  </Link>
);
export default NavbarLink;
