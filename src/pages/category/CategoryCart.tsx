import { Link } from "react-router";

const CategoryCart = ({
  name,
  price,
  id,
  category,
}: {
  price: string;
  name: string;
  id: number;
  category: string;
}) => {
  return (
    <div className="group flex min-w-52 bg-white/45 flex-col my-4 cursor-default gap-3 rounded-lg shadow-xl p-5 hover:-translate-y-0.5 transition-all duration-500">
      <div className="relative overflow-x-hidden">
        <div className="absolute group-hover:translate-x-0 transition-all duration-500 top-0 right-0 flex flex-col translate-x-100">
          <span
            title="افزودن به علاقه مندی"
            className="p-1 border-b border-white/10 bg-white/30"
          >
            ❤️
          </span>
          <span title="افزودن به سبد خرید" className="p-1 bg-white/30">
            {" "}
            🛒
          </span>
        </div>

        <img src="/img/banner.jpg" alt="" className="w-52 rounded" />
      </div>
      <div className=" py-2 flex flex-col text-xs gap-4">
        <div className="flex justify-between items-center">
          <span>{name}</span>
          <span className="py-1 px-2 rounded-2xl text-xs flex justify-center items-center bg-amber-400 text-amber-950">
            {category}
          </span>
        </div>
        <span className="flex justify-end">{price}</span>
        <Link
          to={`/category/${category.toLowerCase()}/${id}`}
          className="w-full py-1.5 cursor-pointer flex justify-center items-center rounded transition-all duration-300 text-sm hover:bg-white hover:shadow hover:text-amber-600 bg-amber-600 text-white"
        >
          جزئیات
        </Link>
      </div>
    </div>
  );
};

export default CategoryCart;
