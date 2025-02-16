import { useDispatch } from "react-redux";
import { Link } from "react-router";
import Input from "../../components/Input";
import { setLogin } from "../../redux/slice/login-slice";
import LoginButton from "./LoginButton";

const Login = () => {
  const dispatch = useDispatch();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLogin({ ["email"]: e.target.value }));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLogin({ ["password"]: e.target.value }));
  };

  return (
    <div className="w-[90%] flex justify-center items-center gap-4 flex-col">
      <h1 className="font-bold text-6xl">Login</h1>

      <form action="" className="w-full flex gap-4 flex-col">
        <Input type="email" placeHolder="ایمیل" onchange={handleEmailChange} />
        <Input
          type="password"
          placeHolder="پسورد"
          onchange={handlePasswordChange}
        />
      </form>
      <LoginButton />
      <Link to="/user/register">حساب کاربری ندارید؟</Link>
    </div>
  );
};

export default Login;
