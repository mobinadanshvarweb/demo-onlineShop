import { Link } from "react-router";
import { formatNumber } from "../../util/formatNumber";

const CategoryCart = ({
  name,
  price,
  id,
  category,
  src,
}: {
  price: number;
  name: string;
  id: string;
  category: string;
  src: string;
}) => {
  return (
    <div className="group flex min-w-52 bg-white/45 flex-col !my-4 cursor-default gap-3 shadow-xl !p-5">
      <div className="relative overflow-hidden">
        <div className="absolute group-hover:translate-x-0 transition-all duration-500 top-0 right-0 flex flex-col translate-x-100">
          <span
            title="افزودن به علاقه مندی"
            className="p-1 border-b border-white/10 bg-white/30"
          >
            ❤️
          </span>
          <span title="افزودن به سبد خرید" className="!p-1 bg-white/30">
            {" "}
            🛒
          </span>
        </div>

        <img
          src={src}
          alt=""
          className="w-52 h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className=" !py-2 flex flex-col text-xs gap-4">
        <div className="flex justify-between items-center">
          <span>{name}</span>
          <span className="!py-1 !px-2 rounded-2xl text-xs flex justify-center items-center bg-amber-400 text-amber-950">
            {category}
          </span>
        </div>
        <span className="flex justify-end">{formatNumber(price)} تومان</span>
        <Link
          to={`/categories/${category}/${id}`}
          className="w-full !py-1.5 cursor-pointer flex justify-center items-center rounded transition-all duration-300 text-sm hover:bg-white hover:shadow hover:text-amber-600 bg-amber-600 text-white"
        >
          جزئیات
        </Link>
      </div>
    </div>
  );
};

export default CategoryCart;
