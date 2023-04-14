import "../styles/globals.css";
import "../styles/slide.css";
import { Providers } from "@/App/provider";
import Nevbar from "../../components/nevbar";
import Basket from "../../components/basket/basket";
import Menu from "../../components/menu";
import SearchPanel from "../../components/searchPanel";
import ProductDetails from "../../components/productDetails/productDetails";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <div className="hidden lg:flex">
        <Nevbar />
      </div>

      <div className="flex lg:hidden w-full fixed z-50 bottom-2 justify-center">
        <Menu />
      </div>
      <SearchPanel />
      <ProductDetails />
      <Basket />
      <Component {...pageProps} />
    </Providers>
  );
}
