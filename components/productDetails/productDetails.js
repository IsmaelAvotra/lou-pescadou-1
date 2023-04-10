import {
  openProductDetails,
  addQuantity,
  subQuantity,
} from "@/App/Features/productDetails/productDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchProductsDetails } from "@/App/Features/productDetails/productDetailsSlice";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function productDetails() {
  const dispatch = useDispatch();
  const opened = useSelector((state) => state.productDetails.opened);
  const quantity = useSelector((state) => state.productDetails.quantity);
  const id = useSelector((state) => state.productDetails.id);
  const details = useSelector((state) => state.productDetails.details);

  const handleClose = () => {
    dispatch(openProductDetails({ toggled: false }));
  };

  useEffect(() => {
    if(opened) {
      dispatch(fetchProductsDetails(id));
      console.log(details);
    }
  }, [opened]);

  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          onClick={() => handleClose()}
          transition={{ duration: 0.5 }}
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          exit={{ y: 750 }}
          className="fixed bg-transparent w-screen h-screen z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center flex-col w-full absolute rounded-t-[20px] h-[96%] bottom-0 backdrop-blur-2xl bg-[#0b2549b0]"
          >
            <div
              onClick={() => {
                dispatch(openProductDetails({ toggled: false }));
              }}
              className="w-2/6 h-2 mt-3 self-center rounded-full bg-white"
            ></div>
            <h1 className="self-start px-5 pt-5 text-white font-bold text-4xl">
              {details.strDrink}
            </h1>
            <p className="text-[#ffff] px-5 font-light self-start pt-5 text-lg">
              {details.strInstructions}
            </p>
            <p className="text-3xl font-black self-start px-5 pt-5 text-left text-[#ffff]">
              30£
            </p>
            <div className="w-full selft start flex gap-x-1 px-5 pt-5">
              <AiFillStar className="text-white" size={30} />
              <AiOutlineStar className="text-white" size={30} />
              <AiOutlineStar className="text-white" size={30} />
              <AiOutlineStar className="text-white" size={30} />
              <AiOutlineStar className="text-white" size={30} />
            </div>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="w-[86%] h-msx mt-5 md:black flex md:justify-center md:items-center"
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1300: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <img src={details.strDrinkThumb} className="rounded-[30px]" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/productImg.png" alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-between w-5/6 mt-5 items-center">
              <div className="flex w-10 font-black pb-2 rounded-[10px] text-3xl h-10 text-black justify-center items-center bg-white">
                <p onClick={() => dispatch(subQuantity())}>-</p>
              </div>
              <div className="flex w-32 rounded-full text-3xl h-10 text-white justify-center items-center bg-transparent border-white border-[1px]">
                <p>{quantity}</p>
              </div>
              <div className="flex w-10 font-black pb-2 rounded-[10px] text-3xl h-10 text-black justify-center items-center bg-white">
                <p onClick={() => dispatch(addQuantity())}>+</p>
              </div>
            </div>
            <button className="w-5/6 border-gray-300 text-white py-3 mt-5 rounded-[10px] border-[1px]">
              Add to card
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default productDetails;
