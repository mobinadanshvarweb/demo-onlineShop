import { InputProps } from "../types/type";

const Input: React.FC<InputProps> = ({
  type,
  placeHolder,
  onchange,
  classname,
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      onChange={onchange}
      className={`rounded w-full !p-2 shadow bg-white/45 ${classname}`}
    />
  );
};

export default Input;
