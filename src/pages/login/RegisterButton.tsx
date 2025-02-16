import { handleRegister } from "../../api/login-api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router";
import { setError } from "../../redux/slice/register-slice";
import { RegisterSchema } from "../../validation/register-type";

const RegisterButton = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.register.register.name);
  const email = useSelector(
    (state: RootState) => state.register.register.email
  );
  const password = useSelector(
    (state: RootState) => state.register.register.password
  );
  const error = useSelector((state: RootState) => state.register.error);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const validationResult = RegisterSchema.safeParse({
      name,
      email,
      password,
    });
    console.log(validationResult);

    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0].message;
      dispatch(setError(errorMessage));
      return;
    }
    const data = await handleRegister(name, email, password);
    console.log(data, "register data");
    if (data.success) {
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
        ثبت‌نام
      </button>
    </div>
  );
};

export default RegisterButton;
