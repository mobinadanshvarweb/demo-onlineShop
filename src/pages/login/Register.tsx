import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "../../redux/slice/register";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(registerStart());

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        dispatch(registerSuccess(data.user)); // فرض بر این است که `data.user` در پاسخ وجود دارد
        navigate("/"); // بعد از ثبت‌نام موفق به صفحه لاگین هدایت می‌شود
      } else {
        dispatch(registerFailure("ثبت‌نام ناموفق بود"));
      }
    } catch (error) {
      dispatch(registerFailure("خطا در برقراری ارتباط با سرور"));
    }
  };

  return (
    <div className="w-[80%] flex flex-col justify-center items-center !gap-6 ">
      <h1 className="font-bold text-6xl">Register</h1>

      <form onSubmit={handleRegister} className="w-full flex gap-4 flex-col">
        <input
          type="text"
          name="name"
          placeholder="نام"
          className="rounded w-full !p-2 shadow bg-white/45"
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          className="rounded w-full !p-2 shadow bg-white/45"
        />
        <input
          type="password"
          name="password"
          placeholder="پسورد"
          className="rounded w-full !p-2 shadow bg-white/45"
        />
        <button
          type="submit"
          className="flex justify-center items-center cursor-pointer !w-full bg-[#5594A3] rounded !py-3"
        >
          ثبت‌نام
        </button>
      </form>

      <Link to="/user/login">قبلا ثبت‌نام کرده‌اید؟ وارد شوید</Link>
    </div>
  );
};

export default Register;
