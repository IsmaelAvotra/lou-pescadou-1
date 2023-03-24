import { useDispatch, useSelector } from "react-redux";
import { openBasket } from "@/App/Features/Card/basketSlice";

function nevbar() {
  const dispatch = useDispatch();
  const opened = useSelector((state) => state.basket.opened);
  const basketLenght = useSelector((state) => state.basket.Products.length);

  return (
    <div className="h-20 z-50 flex text-white justify-center bg-[#0b254938] items-center w-full fixed backdrop-blur-3xl top-0 gap-x-20">
      <a href="#" className="drop-shadow-2xl text-2xl font-semibold">
        Home
      </a>
      <a href="#" className="drop-shadow-2xl text-2xl font-semibold">
        Why us
      </a>
      <div className="w-1/6"></div>
      <a href="#" className="drop-shadow-2xl text-2xl font-semibold">
        Features
      </a>
      <a href="#" className="drop-shadow-2xl text-2xl font-semibold">
        What's new
      </a>
      <div className="h-3/6 relative" onClick={() => dispatch(openBasket(!opened))}>
        <img
          src="/assets/basket.png"
          className="h-full"
          alt=""
          
        />
        <div className="rounded-full w-5 h-5 bg-black text-white flex justify-center items-center absolute top-0 right-0">
          <p>{basketLenght}</p>
        </div>
      </div>
    </div>
  );
}

export default nevbar;
