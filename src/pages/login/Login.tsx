import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../redux/slice/login";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // تعریف state برای ذخیره مقادیر ایمیل و پسورد
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // برای ذخیره خطاها

  // مدیریت تغییرات در فیلدهای ایمیل و پسورد
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, // استفاده از state
          password, // استفاده از state
        }),
      });

      const data = await response.json();

      if (data.user) {
        dispatch(loginSuccess({ user: data.user, token: data.token }));
        navigate("/", { replace: true }); // ریدایرکت به صفحه اصلی
      } else {
        dispatch(loginFailure("ورود ناموفق بود"));
        setError("ورود ناموفق بود");
      }
    } catch (error) {
      dispatch(loginFailure("خطا در برقراری ارتباط با سرور"));
      setError("خطا در برقراری ارتباط با سرور");
    }
  };

  return (
    <div className="w-[90%] flex justify-center items-center gap-4 flex-col">
      <h1 className="font-bold text-6xl">Login</h1>

      <form onSubmit={handleLogin} className="w-full flex gap-4 flex-col">
        <input
          type="email"
          placeholder="ایمیل"
          value={email} // مقادیر از state
          onChange={handleEmailChange} // هنگام تغییر، مقدار جدید در state ذخیره می‌شود
          className="rounded w-full !p-2 shadow bg-white/45"
        />
        <input
          type="password"
          placeholder="پسورد"
          value={password} // مقادیر از state
          onChange={handlePasswordChange} // هنگام تغییر، مقدار جدید در state ذخیره می‌شود
          className="rounded w-full !p-2 shadow bg-white/45"
        />
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* نمایش پیام خطا */}
        <button
          type="submit"
          className="flex justify-center items-center cursor-pointer !w-full bg-[#5594A3] rounded !py-3"
        >
          ورود
        </button>
      </form>
      <Link to="/user/register">حساب کاربری ندارید؟</Link>
    </div>
  );
};

export default Login;
