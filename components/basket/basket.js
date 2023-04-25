import { useSelector, useDispatch } from "react-redux";
import { openBasket, deleteFromBasket } from "@/App/Features/Card/basketSlice";
import { motion, AnimatePresence } from "framer-motion";
import { switchScreen } from "@/App/Features/manu/menuSlice";
import {
  addQuantity,
  subQuantity,
} from "@/App/Features/productDetails/productDetailsSlice";

function basket() {
  const opened = useSelector((state) => state.basket.opened);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.basket.Products);
  const total = useSelector((state) => state.basket.total);
  const quantity = useSelector((state) => state.productDetails.quantity);

  const handleClose = () => {
    dispatch(openBasket({ toggled: false }));
    dispatch(switchScreen({ screen: "home" }));
  };

  const handleDelete = (id) => {
    dispatch(deleteFromBasket({ id: id }));
  };

  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full bg-[#1A77CD34] fixed top-0 z-50"
          onClick={() => handleClose()}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            key="basket"
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="w-full md:w-2/6 h-screen bg-[#1A77CD66] rounded-2xl backdrop-blur-2xl"
          >
            <div className="flex justify-between p-5 items-center">
              <div className="flex justify-start gap-x-5">
                <img className="h-8 md:h-10" src="/assets/basket.png" alt="" />
                <p className="text-white text-3xl font-bold">Basket</p>
              </div>
              <img
                src="/assets/cancel.png"
                onClick={() => handleClose()}
                className="w-8 md:w-11 cursor-pointer"
                alt=""
              />
            </div>
            <div className="flex h-screen items-center flex-col pt-10 gap-y-5 overflow-y-auto">
              {products.length > 0 ? (
                products.map((product) => {
                  return (
                    <div key={product.title} className="w-[92%] flex justify-start h-32 md:h-40 border-gray-400 rounded-xl border-[1px]">
                      <img
                        className="h-full rounded-2xl"
                        src={product.photoUrl}
                        alt=""
                      />
                      <div className="flex text-white relative items-start w-full flex-col gap-y-3 p-3 md:p-4">
                        <img
                          src="/assets/cancel.png"
                          className="h-4 md:h-6 self-end absolute  cursor-pointer"
                          alt=""
                          onClick={() => handleDelete(product.id)}
                        />
                        <h1 className="ml-1 text-sm md:text-3xl font-bold">
                          {product.title}
                        </h1>
                        <p className="ml-1 pr-3 text-xs md:text-xl font-normal overflow-y-auto">
                          {product.description}
                        </p>
                        <div className="flex self-end justify-between w-full items-center">
                          <div className="flex w-7 md:w-10 font-black  rounded-[10px] text-3xl h-7 md:h-10 text-black justify-center items-center bg-white cursor-pointer">
                            <p onClick={() => dispatch(subQuantity())}>
                              <i className="fa-solid fa-minus fa-xs"></i>
                            </p>
                          </div>
                          <div className="flex w-28 md:w-32 rounded-full text-xl md:h-10 h-7 text-white justify-center items-center bg-transparent border-white border-[1px]">
                            <p>{quantity}</p>
                          </div>
                          <div className="flex w-7 md:w-10 font-black rounded-[10px] text-3xl h-7 md:h-10 text-black justify-center items-center bg-white cursor-pointer">
                            <p onClick={() => dispatch(addQuantity())}>
                              <i className="fa-solid fa-plus fa-xs"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                  className="w-full h-4/6 flex flex-col justify-center items-center"
                >
                  <img src="/assets/emptyBasket.png" alt="" />
                  <p className="text-white text-xl sm:text-3xl font-bold px-20 sm:px-32 text-center">
                    Your basket is empty for now
                  </p>
                </motion.div>
              )}
              <div className="text-white w-[92%] flex justify-between items-center absolute bottom-28 font-bold text-3xl mb-3">
                <p>total</p>
                <p>{total}</p>
              </div>

              <button className="w-[92%] absolute bottom-0 text-[#0B2549] bg-[#fff] text-2xl rounded-[10px] py-3 mb-5">
                Checkout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default basket;
