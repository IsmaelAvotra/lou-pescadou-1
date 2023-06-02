import { useDispatch, useSelector } from "react-redux";
import { openBasket } from "@/App/Features/Card/basketSlice";
import { openSearchPanel } from "@/App/Features/searchPanel/searchPanelSlice";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

function nevbar() {
  const dispatch = useDispatch();
  const basketLenght = useSelector((state) => state.basket.Products.length);

  return (
    <div className="h-30 z-50 fixed backdrop-blur-3xl top-0 w-full">
      <div className="h-10 bg-[#0b0960] flex items-center justify-between text-white px-10">
        <p className="font-sans text-sm">
          ! Livraison a domicile poissons frais partout en France en 24H
        </p>
        <div className="flex font-sans">
          <a href="#" className="text-white text-sm">
            <i className="fa-solid fa-user mr-2"></i>
            mon compte
          </a>
          <a href="#" className="ml-5 text-white text-sm">
            <i className="fa-solid fa-box mr-2"></i>
            suivre ma commande
          </a>
        </div>
      </div>

      <div className="relative h-20 z-50 flex text-white justify-evenly bg-[#fff] items-center w-full custom-header">
        <Link
          href="/"
          className="drop-shadow-2xl text-2xl font-semibold flex justify-between items-center text-[#79c8f5]"
        >
          Accueil
        </Link>
        <Link
          href="/#histoire"
          className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]"
        >
          Notre histoire
        </Link>
        <a
          href="/#locations"
          className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]"
        >
          Locations
        </a>
        <Link
          href="/"
          className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]"
        >
          <div className="w-40">
            <img src="/assets/logo.png" className="w-full" />
          </div>
        </Link>
        <Link
          href="#"
          className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]"
        >
          Quoi de neuf
        </Link>
        <Link
          href="/Login"
          className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5]"
        >
          Connexion
        </Link>
        <Link
          href="/Signup"
          className="drop-shadow-2xl text-2xl font-semibold text-[#79c8f5] "
        >
          S'inscrire
        </Link>
        <div className="flex justify-evenly items-center w-[10%] absolute right-0">
          <div
            className="h-3/6 text-[#79c8f5] cursor-pointer relative"
            onClick={() => dispatch(openBasket({ toggled: true }))}
          >
            <i
              className="fa-solid fa-cart-shopping"
              style={{ fontSize: "30px" }}
            ></i>
            {basketLenght > 0 && (
              <div className="rounded-full w-5 h-5 bg-[#f07e86] text-white text-xs flex justify-center items-center absolute -top-2 -right-3">
                <p>{basketLenght}</p>
              </div>
            )}
          </div>
          <BiSearch
            onClick={() => dispatch(openSearchPanel({ toggled: true }))}
            size={30}
            color="#79c8f5"
            style={{ minWidth: "50px" }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default nevbar;
