import "../styles/mobile.css";
import "../styles/globals.css";
import "../styles/slide.css";
import "../styles/components.css";
import { Providers } from "@/App/provider";
import Nevbar from "../../components/layout/nevbar";
import Loading from "../../components/Loading/loading";
import Basket from "../../components/basket/basket";
import Menu from "../../components/layout/menu";
import SearchPanel from "../../components/layout/searchPanel";
import ProductDetails from "../../components/productDetails/productDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Loading />
      <ToastContainer />
      <div className="hidden lg:flex">
        <Nevbar />
      </div>
      <div className="flex lg:hidden w-full fixed z-40 bottom-2 justify-center">
        <Menu />
      </div>
      <SearchPanel />
      <ProductDetails />
      <Basket />
      <Component {...pageProps} />
    </Providers>
  );
}
