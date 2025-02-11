import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">صفحه موردنظر یافت نشد!</p>
      <Link
        to="/"
        className="mt-4 !px-4 !py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFound;
