import { useSelector, useDispatch } from "react-redux";
import { openBasket } from "@/App/Features/Card/basketSlice";
import { AnimatePresence, motion } from "framer-motion";

function basket() {
  const opened = useSelector((state) => state.basket.opened);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.basket.Products);
  const total = useSelector((state) => state.basket.total);

  return (
    opened && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut" }}
        className="w-full h-full bg-[#00000034] fixed top-0 z-50"
        onClick={() => dispatch(openBasket(!opened))}
      >
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{ x: -500 }}
          transition={{ ease: "easeOut", duration: 1 }}
          onClick={(e) => e.stopPropagation()}
          className="w-5/6 sm:w-2/6 h-screen bg-[#0b254934] rounded-2xl backdrop-blur-3xl"
        >
          <div className="flex justify-between p-5 items-center">
            <div className="flex justify-start gap-x-5">
              <img className="h-8 md:h-10" src="/assets/basket.png" alt="" />
              <p className="text-white text-3xl font-bold">Basket</p>
            </div>
            <img
              src="/assets/cancel.png"
              onClick={() => dispatch(openBasket(!opened))}
              className="w-8 md:w-11"
              alt=""
            />
          </div>
          <div className="flex h-screen items-center flex-col pt-10 gap-y-5 overflow-y-auto">
            {products.map((product) => {
              return (
                <div className="w-[92%] flex justify-start h-28 md:h-40 border-gray-100 rounded-xl border-[1px]">
                  <img
                    className="h-full rounded-2xl"
                    src="/assets/productImg.png"
                    alt=""
                  />
                  <div className="flex text-white relative items-start w-full flex-col gap-y-3 p-3 md:p-4">
                    <img
                      src="/assets/cancel.png"
                      className="h-4 md:h-6 self-end absolute"
                      alt=""
                    />
                    <h1 className="ml-1 text-sm md:text-3xl font-bold">
                      {product.title}
                    </h1>
                    <p className="ml-1 pr-3 text-xs md:text-xl font-normal overflow-y-auto">
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="text-white w-[92%] flex justify-between items-center absolute bottom-28 font-bold text-3xl">
              <p>total</p>
              <p>{total}</p>
            </div>

            <button className="w-[92%] absolute bottom-0 text-white bg-[#0B2549] rounded-[10px] py-3 mb-5">
              Checkout
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
  );
}

export default basket;
