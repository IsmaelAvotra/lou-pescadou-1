import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillBasket3Fill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { switchScreen } from "@/App/Features/manu/menuSlice";
import { Screens } from "@/enums/screensEnum";
import { openBasket } from "@/App/Features/Card/basketSlice";
import { FaUserAlt } from "react-icons/fa";
import { openSearchPanel } from "@/App/Features/searchPanel/searchPanelSlice";

function menu() {
  const dispatch = useDispatch();
  let screenSelected = useSelector((state) => state.menu.screen);
  const basketLenght = useSelector((state) => state.basket.Products.length);

  const handleScreenDwitch = (screen) => {
    dispatch(switchScreen({ screen: screen }));
    console.log(screen);
    switch (screen) {
      case Screens.HOME:
        dispatch(openBasket({ toggled: false }));
        dispatch(openSearchPanel({ toggled: false }));
        console.log(screen);
        break;
      case Screens.SEARCH:
        dispatch(openSearchPanel({ toggled: true }));
        dispatch(openBasket({ toggled: false }));
        break;
      case Screens.BASKET:
        dispatch(openBasket({ toggled: true }));
        dispatch(openSearchPanel({ toggled: false }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[95%] rounded-[20px] bg-[#0b254925] flex justify-center items-center h-20 backdrop-blur-3xl">
      <div className="w-[80%] flex justify-between items-center h-full">
        <img src="/assets/home.png"
          onClick={() => handleScreenDwitch("home")}
          size={35}
          className={
            screenSelected == Screens.HOME ? "opacity-1" : "opacity-75"
          }
        />
        <img src="/assets/search.png"
          onClick={() => handleScreenDwitch("search")}
          size={35}
          className={
            screenSelected == Screens.SEARCH ? "opacity-1" : "opacity-75"
          }
        />
        <div className="relative" onClick={() => handleScreenDwitch("basket")}>
          <img src="/assets/basket_menu.png"
            size={35}
            className={
              screenSelected == Screens.BASKET ? "opacity-1" : "opacity-75"
            }
          />
          {basketLenght > 0 && (
            <div className="rounded-full w-5 h-5 bg-black text-white flex justify-center items-center absolute top-0 right-0">
              <p>{basketLenght}</p>
            </div>
          )}
        </div>
        <img src="/assets/recent.png"
          onClick={() => handleScreenDwitch("search")}
          size={35}
          className={
            screenSelected == Screens.SEARCH ? "opacity-1" : "opacity-75"
          }
        />
        <img src="/assets/profile.png"
          onClick={() => handleScreenDwitch("userProfile")}
          size={35}
          className={
            screenSelected == Screens.USER_PROFILE
              ? "opacity-1" : "opacity-75"
          }
        />

      </div>
    </div>
  );
}

export default menu;
