import Header from "../../components/header/header";
import MostSold from "../../components/producsSection/ProducsSection";
import PopularProducts from "../../components/producsSection/popularProducts";
import Canvas from "../../components/bublles/canvas";
import { fetchProductsData } from "@/App/Features/Products/produtsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <img
        src="/assets/bg.png"
        className="md:absolute h-screen -top-5 w-screen sm:h-max fixed z-0"
        alt=""
      />
      <iframe
        className="fixed h-screen w-screen"
        src="/bubbles-css/index.html"
      />

      <div className="w-full relative h-screen z-10">
        <Header />
        <PopularProducts/>
        <MostSold title="Most sold this week" />
        <MostSold title="Most popular" />
      </div>
    </>
  );
}
