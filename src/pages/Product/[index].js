import ProductPage from "../../../components/productPage/productPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function product() {
  const opened = useSelector((state) => state.basket.opened);

  return (
    <>
      <img
        src="/assets/bg-product-page.png"
        className="fixed h-screen md:w-full z-10"
        alt=""
      />
      <div className="w-full h-screen relative z-10 flex flex-col justify-center items-center">
        <div className="w-4/6 h-3/6 flex justify-between items-center">
          <div className="flex justify-center items-center w-3/6">
            <img src="/assets/productImg.png" className="w-2/6" alt="" />
            <div className="w-4/6 flex flex-col justify-center items-start pl-6 gap-y-5">
              <h1 className="text-white text-5xl font-black">lou pescadou</h1>
              <p className="text-white text-xl font-regular">
                this is a description justo to make it long enough
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-10 items-end h-full">
            <h2 className="text-white text-5xl font-bold">20£</h2>
            <button className="w-44 py-2 rounded-xl bg-blue-500 text-white font-bold">
              BAdd to card
            </button>
          </div>
        </div>
        <div className="h-3/6 w-5/6">
          <ProductPage />
        </div>
      </div>
    </>
  );
}

export default product;
