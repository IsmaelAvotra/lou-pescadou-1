import { useDispatch, useSelector } from "react-redux";
import { openBasket } from "@/App/Features/Card/basketSlice";
import { openSearchPanel } from "@/App/Features/searchPanel/searchPanelSlice";
import { BiSearch } from "react-icons/bi";

function nevbar() {
  const dispatch = useDispatch();
  const basketLenght = useSelector((state) => state.basket.Products.length);

  return (
    <div className="h-20 z-50 flex text-white justify-center bg-[#0b254938] items-center w-full fixed backdrop-blur-3xl top-0 gap-x-20">
      <a href="#" className="drop-shadow-2xl ml-48 text-2xl font-semibold">
        Home
      </a>
      <a href="#" className="drop-shadow-2xl text-2xl font-semibold">
        Why us
      </a>
      <div className="w-40 -top-28 bg-[#ffffff8e] rounded-full h-40"></div>
      <a href="#" className="drop-shadow-2xl text-2xl font-semibold">
        Features
      </a>
      <a href="#" className="drop-shadow-2xl text-2xl font-semibold">
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
        size={40}
      />
    </div>
  );
}

export default nevbar;
