import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cart";
import { RootState } from "../redux/store";

const AddToCartButton = ({
  name,
  price,
  src,
  id,
}: {
  name: string;
  price: string;
  src: string;
  id: number;
}) => {
  const isAdded = useSelector((state: RootState) =>
    state.cart.data.find((item) => item.id === id)
  );
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const dataCart = {
      name,
      price,
      src,
      id,
      count: 1,
      isAdded: true,
    };
    dispatch(addToCart(dataCart));
  };

  return (
    <button
      disabled={isAdded?.isAdded}
      onClick={handleAddToCart}
      className={`w-fit relative overflow-hidden cursor-pointer flex items-center justify-center !px-4 !py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-lg transition-all duration-[2s] ease-linear transform hover:bg-white`}
    >
      <span
        className={`transition-all ease-in-out duration-500 ${
          isAdded ? "translate-x-[120%]" : "translate-x-0"
        }`}
      >
        افزودن به سبد خرید
      </span>
      <span
        className={`absolute transition-all duration-[2s]  ease-[cubic-bezier(0.55,0.61,3.36,5)] ${
          isAdded ? "left-[100%]" : "left-[-100%]"
        }`}
      >
        <PiShoppingCartSimpleFill size={30} />
      </span>
      <span
        className={`text-sm w-full  absolute transition-all duration-[2s]  ease-[cubic-bezier(0.55,0.61,8.36,5)] ${
          isAdded ? "left-[50%] translate-x-[-50%]" : "left-[-200%]"
        }`}
      >
        به سبد خرید اضافه شد
      </span>
    </button>
  );
};

export default AddToCartButton;
