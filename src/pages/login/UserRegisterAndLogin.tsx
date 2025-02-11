import { Outlet } from "react-router";

const UserRegisterAndLogin = () => {
  return (
    <div className="w-full min-h-screen bg-[#CAC3BD] flex justify-end">
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <Outlet />
      </div>
      <div className="w-1/2">
        <img
          src="/img/login.jpg"
          alt=""
          className="w-full h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default UserRegisterAndLogin;
