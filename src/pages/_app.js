import "../styles/globals.css";
import { Providers } from "@/App/provider";
import { AnimatePresence } from "framer-motion";
import Nevbar from "../../components/nevbar";
import Basket from "../../components/basket/basket";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <AnimatePresence >
        <div className="hidden md:flex">
          <Nevbar />
        </div>
        <Basket />
        <Component {...pageProps} />
      </AnimatePresence>
    </Providers>
  );
}
