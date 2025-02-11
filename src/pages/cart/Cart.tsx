import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NoData from "../../components/NoData";
import IncreaseDecrease from "../../components/IncreaseDecrease";
import { IoCloseOutline } from "react-icons/io5";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.data);

  return (
    <div className="w-full  ">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white/45 rounded gap-1 !p-4 justify-between items-center !py-3 !my-4 shadow"
          >
            <div className="w-full  flex">
              <IoCloseOutline />
            </div>
            <div className="w-full flex justify-between gap-4">
              <img
                //   src={item.src}
                src="/img/banner.jpg"
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1 ml-4 items-center flex justify-between">
                <div className="flex flex-col">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{item.price} تومان</p>
                </div>
                <div className="flex gap-3  flex-col">
                  <div className="flex gap-2 items-center">
                    تعداد:
                    <IncreaseDecrease />
                  </div>
                  <div className="flex items-center">
                    قیمت کل:
                    {Number(item.count) * parseFloat(item.price)} تومان
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <NoData src="/" />
      )}
    </div>
  );
};

export default Cart;
