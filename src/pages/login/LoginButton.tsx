import { LoginSchema } from "../../validation/login-type";
import { handleLogin } from "../../api/login-api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router";
import { setError } from "../../redux/slice/login-slice";

const LoginButton = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.login.login.email);
  const password = useSelector(
    (state: RootState) => state.login.login.password
  );
  const error = useSelector((state: RootState) => state.login.error);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const validationResult = LoginSchema.safeParse({ email, password });
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0].message;
      dispatch(setError(errorMessage));
      return;
    }
    const data = await handleLogin(email, password);
    console.log(data, "login data");

    if (data?.success) {
      dispatch(setError(null));
      navigate("/");
    } else {
      dispatch(setError("ایمیل یا رمز عبور نادرست است"));
    }
  };

  return (
    <div className="w-full">
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="button"
        onClick={handleSubmit}
        className="flex justify-center items-center cursor-pointer !w-full bg-[#5594A3] rounded !py-3"
      >
        ورود
      </button>
    </div>
  );
};

export default LoginButton;
