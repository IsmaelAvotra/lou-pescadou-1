import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/App/Features/Card/basketSlice";

function productCard() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBuy = (e) => {
    e.stopPropagation();
    dispatch(addToBasket({title: "title", description: "description", price: "30"}))
  }

  return (
    <div
      className="flex flex-col h-full w-full justify-center items-center bg-[#0B2549] rounded-[20px]"
      onClick={() => router.push(`/Product/dfgdfg`)}
    >
      <div className="w-full h-full">
        <img src="/assets/productImg.png" className="w-full" alt="" />
      </div>
      <div className="w-[90%] mt-36 h-[40%] md:h-[35%] rounded-[20px] backdrop-blur-xl absolute bg-[#ffffff49] overflow-y-auto">
        <div className="flex justify-between px-4 items-center w-full mt-6">
          <h1 className="text-white font-black text-2xl md:text-2xl">
            Black Cropple
          </h1>
          <h1 className="text-white font-black text-xl md:text-2xl">30£</h1>
        </div>
        <div className="px-4 mt-4 text-white ">
          <p>this is a product’s description just to make it long enough</p>
        </div>
      </div>
      <button
        className="w-[90%] border-gray-300 border-[1px] text-white font-bold rounded-[15px] mb-7 py-2"
        onClick={(e) => handleBuy(e)}
      >
        Purcheas
      </button>
    </div>
  );
}

export default productCard;
