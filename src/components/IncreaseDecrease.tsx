import { PiMinus, PiPlus } from "react-icons/pi";

const IncreaseDecrease = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="cursor-pointer bg-neutral-300 text-neutral-700 !p-2 rounded-full hover:bg-neutral-400 hover:scale-105 transition-all duration-300">
        <PiMinus />
      </button>

      <span className="text-xl font-semibold text-neutral-800">2</span>

      <button className="cursor-pointer bg-neutral-300 text-neutral-700 !p-2 rounded-full hover:bg-neutral-400 hover:scale-105 transition-all duration-300">
        <PiPlus />
      </button>
    </div>
  );
};

export default IncreaseDecrease;
