import { useDispatch, useSelector } from "react-redux";
import { openBasket } from "@/App/Features/Card/basketSlice";
import { openSearchPanel } from "@/App/Features/searchPanel/searchPanelSlice";
import { BiSearch } from "react-icons/bi";

function nevbar() {
  const dispatch = useDispatch();
  const basketLenght = useSelector((state) => state.basket.Products.length);

  return (
    <div className="h-30 z-50 fixed backdrop-blur-3xl top-0 w-full">
      <div className="h-10 bg-[#0b0960] flex items-center justify-between text-white px-10">
        <p className="font-sans text-sm">! Livraison a domicile poissons frais partout en France en 24H</p>
        <div className="flex font-sans">
          <a href="#" className="text-white text-sm">
          <i class="fa-solid fa-user mr-2"></i>
            mon compte
          </a>
          <a href="#" className="ml-5 text-white text-sm">
            <i class="fa-solid fa-box mr-2"></i>
            suivre ma commande
          </a>
        </div>
      </div>
      <div className="h-20 z-50 flex text-white justify-evenly bg-[#fff] items-center w-full px-10">
        <a href="/" className="drop-shadow-2xl text-2xl font-semibold flex justify-between items-center text-[#79c8f5]">
          <div className="w-40">
            <img src="/assets/logo-blue.png" className="w-full"/>
          </div>
          Home
        </a>
        <a href="#" className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]">
          Why us
        </a>
        <a href="#" className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]">
          Features
        </a>
        <a href="#" className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]">
          What's new
        </a>
        <div
          className="h-3/6 relative"
          onClick={() => dispatch(openBasket({ toggled: true }))}
        >
          <img src="/assets/basket.png" className="h-full" alt="" />
          {basketLenght > 0 && (
            <div className="rounded-full w-5 h-5 bg-black text-white flex justify-center items-center absolute top-0 right-0">
              <p>{basketLenght}</p>
            </div>
          )}
        </div>
        <BiSearch
          onClick={() => dispatch(openSearchPanel({ toggled: true }))}
          size={30}
          color="#000"
        />
        <div className="flex justify-center items-center">
          <a href="#" className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]">
            Login
          </a>
          <a href="#" className="drop-shadow-2xl text-2xl font-semibold ml-5 px-6 py-2 rounded-md bg-[#f07e86]">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default nevbar;
