import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, deleteFromBasket } from "@/App/Features/Card/basketSlice";
import { openProductDetails } from "@/App/Features/productDetails/productDetailsSlice";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function productCard({ title, id, photoUrl, description }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector((state) => state.basket.Products);

  const handleDelete = (id) => {
    dispatch(deleteFromBasket({ id: id }));
  };

  const handleBuy = (e) => {
    e.stopPropagation();
    if (products.filter((product) => product.id === id).length > 0) {
      return;
    }

    dispatch(
      addToBasket({
        title: title,
        description: description,
        price: "30",
        id: id,
        photoUrl: photoUrl,
      })
    );
  };

  const handleProductPage = (e) => {
    let phoneMidea = matchMedia("(max-width: 767px)");

    if (phoneMidea.matches) {
      return dispatch(openProductDetails({ toggled: true, id: id }));
    }
    router.push(`/Product/${id}`);
  };

  return (
    <div className="flex flex-col md:h-[95%] h-5/6 w-5/6 md:w-full justify-center items-center bg-[#6281aca1] backdrop-blur-2xl shadow-2xl rounded-[20px]">
      <div className="w-full h-[20%] md:h-[50%] flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-3/6 text-white font-bold text-xl md:text-3xl flex justify-start px-5 items-start">
            <h1>30£</h1>
          </div>
          <div className="w-3/6 flex justify-end items-cente px-5">
            <div
              onClick={(e) => handleBuy(e)}
              className="w-12 h-12 md:w-20 md:h-20 flex border-white border-[1px] rounded-full justify-center items-center"
            >
              {products.filter((product) => product.id === id).length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, rotateY: 500 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  ecit={{ opacity: 0, rotateY: 500 }}
                  transition={{ duration: 2 }}
                >
                  <AiOutlineClose
                    onClick={() => handleDelete(id)}
                    className="text-white font-thin"
                    size={25}
                  />
                </motion.div>
              ) : (
                <motion.img
                  initial={{ opacity: 0, rotateY: 500 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  ecit={{ opacity: 0, rotateY: 500 }}
                  transition={{ duration: 2 }}
                  src="/assets/shoppingbag.png"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <img src="/assets/fish.png" className="w-5/6" alt="" />
        </div>
        <div className="w-full px-5 flex justify-between items-center">
          <div className="w-4/6 py-2 md:py-6 font-bold text-xl border-white border-[1px] flex justify-center items-center text-white rounded-full ">
            <p>{title}</p>
          </div>
          <div
            onClick={(e) => handleProductPage(e)}
            className="w-12 h-12 md:w-20 md:h-20 border-white border-[1px] flex justify-center items-center text-white rounded-full "
          >
            <img src="/assets/go_to_product.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default productCard;
