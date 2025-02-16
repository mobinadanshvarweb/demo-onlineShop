import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { setRegister } from "../../redux/slice/register-slice";
import RegisterButton from "./RegisterButton";

const Register = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[80%] flex flex-col justify-center items-center !gap-6 ">
      <h1 className="font-bold text-6xl">Register</h1>

      <form className="w-full flex gap-4 flex-col">
        <input
          type="text"
          name="name"
          placeholder="نام"
          className="rounded w-full !p-2 shadow bg-white/45"
          onChange={(e) => {
            dispatch(setRegister({ ["name"]: e.target.value }));
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          className="rounded w-full !p-2 shadow bg-white/45"
          onChange={(e) => {
            dispatch(setRegister({ ["email"]: e.target.value }));
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="پسورد"
          className="rounded w-full !p-2 shadow bg-white/45"
          onChange={(e) => {
            dispatch(setRegister({ ["password"]: e.target.value }));
          }}
        />
        <RegisterButton />
      </form>

      <Link to="/user/login">قبلا ثبت‌نام کرده‌اید؟ وارد شوید</Link>
    </div>
  );
};

export default Register;
