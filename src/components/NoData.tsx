import { VscSearchStop } from "react-icons/vsc";
import { Link } from "react-router";

const NoData = ({ src }: { src: string }) => {
  return (
    <div className="w-full my-6 flex justify-center items-center flex-col  bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 rounded-lg shadow-lg">
      <div className="bg-white p-8 rounded-full shadow-xl mb-4">
        <VscSearchStop size={60} className="text-gray-500 animate-bounce" />
      </div>
      <span className="font-extrabold text-3xl text-center text-gray-700 tracking-wide animate-pulse">
        محصولی یافت نشد
      </span>
      <p className="mt-4 text-lg text-gray-500 text-center">
        متاسفانه جستجوی شما هیچ نتیجه‌ای نداشته است.
      </p>
      <Link
        to={src}
        className="mt-6 px-6 py-2 rounded-full bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-600 transition-all duration-300"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NoData;
