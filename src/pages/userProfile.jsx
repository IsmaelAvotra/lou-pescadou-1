import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AiFillEdit } from "react-icons/ai";
import { logOut } from "@/App/Features/auth/authSlice";
import { switchScreen } from "@/App/Features/manu/menuSlice";
import { SlBasketLoaded } from "react-icons/sl";
import { showLoading } from "@/App/Features/loading/loadingSlice";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";

function userProfile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userData, setUserData] = useState({})

  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(switchScreen({ screen: "home" }));
    dispatch(logOut());
    router.push("/");
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")).user)
    setTimeout(() => {
      dispatch(showLoading({ toggled: false }));
    }, 2000);
  }, []);

  return (
    <>
      <img
        src="/assets/bg-product-page.png"
        className="fixed h-screen md:w-full z-10"
        alt=""
      />
      <div className="w-full h-screen relative z-10 gap-5 flex flex-col justify-start">
        <div className="w-screen relative h-[20%] bg-[#fff0] flex justify-center items-center rounded-b-xl backdrop-blur-3xl">
          <img
            src="assets/user.png"
            className="w-2/6 absolute  -bottom-6"
            alt=""
          />
          <p className="absolute -bottom-16 text-white text-4xl">{userData.name}</p>
        </div>
        <div className="flex h-[15%] px-3 w-full justify-between items-center mt-12">
          <div className="w-[48%] rounded-xl h-full gap-2 flex justify-center items-center flex-col backdrop-blur-3xl bg-[#0b2549c4]">
            <AiFillEdit size={40} color="white" />
            <p className="text-[#fff] text-1xl">Modifier profile</p>
          </div>
          <div className="w-[48%] rounded-xl h-full gap-2 flex justify-center items-center flex-col backdrop-blur-3xl bg-[#0b2549c4]">
            <SlBasketLoaded size={40} color="white" />
            <p className="text-[#fff] text-2xl">mes commandes</p>
          </div>
        </div>
        <div className="flex h-[15%] px-3 w-full mt-10 justify-between items-center">
          <div className="w-[48%] rounded-xl h-full gap-2 flex justify-center items-center flex-col backdrop-blur-3xl bg-[#0b2549c4]">
            <AiFillEdit size={40} color="white" />
            <p className="text-[#fff] text-1xl">Modifier profile</p>
          </div>
          <div className="w-[48%] rounded-xl h-full gap-2 flex justify-center items-center flex-col backdrop-blur-3xl bg-[#0b2549c4]">
            <SlBasketLoaded size={40} color="white" />
            <p className="text-[#fff] text-2xl">mes commandes</p>
          </div>
        </div>
        <div className="flex h-[8%] px-3 w-full justify-between items-start mt-10">
          <div
            onClick={() => {
              handleLogOut();
            }}
            className="w-full rounded-xl h-full gap-2 flex justify-center items-center backdrop-blur-3xl bg-[#0b2549c4]"
          >
            <MdOutlineLogout size={40} color="white" />
            <p className="text-[#fff] text-1xl">Log out</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default userProfile;
