import { useState } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const AddToCartButton = () => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`w-fit relative overflow-hidden cursor-pointer flex items-center justify-center px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-lg transition-all duration-[2s] ease-linear transform`}
    >
      <span
        className={`transition-all ease-in-out duration-500 ${
          added ? "translate-x-[120%]" : "translate-x-0"
        }`}
      >
        افزودن به سبد خرید
      </span>
      <span
        className={`absolute transition-all duration-[2s]  ease-[cubic-bezier(0.55,0.61,3.36,5)] ${
          added ? "left-[100%]" : "left-[-100%]"
        }`}
      >
        <PiShoppingCartSimpleFill size={30} />
      </span>
      <span
        className={`text-sm w-full  absolute transition-all duration-[2s]  ease-[cubic-bezier(0.55,0.61,8.36,5)] ${
          added ? "left-[50%] translate-x-[-50%]" : "left-[-200%]"
        }`}
      >
        به سبد خرید اضافه شد
      </span>
    </button>
  );
};

export default AddToCartButton;
