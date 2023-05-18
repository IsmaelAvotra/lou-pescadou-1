import ProductCard from "./productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { fetchProductsData } from "@/App/Features/Products/produtsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { leftFadeIn, rightFadeIn } from "../motion-animations";
import { useInView, motion } from "framer-motion";
import { showLoading } from "@/App/Features/loading/loadingSlice";

function mostSold({ title, cardClass, titleClasses, isPhone }) {
  const { productsData, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);
  const isContainerInView = useInView(headerRef);

  useEffect(() => {
    if (loading) showLoading({ toggled: true });
  }, [loading]);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  return (
    <div className="w-full h-[40%] mt-5 flex items-start flex-col">
      <motion.h1
        className={`w-full md:text-5xl text-2xl z-30 ${titleClasses} tracking-widest`}
        ref={headerRef}
        animate={isHeaderInView && !isPhone ? leftFadeIn : {}}
      >
        {title}
      </motion.h1>

      <Swiper
        pagination={{
          clickable: true,
        }}
        className="w-5/6 h-full pt-2 pb-5 md:black flex md:justify-center md:items-center"
        breakpoints={{
          400: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
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
        {productsData
          ? productsData.map((product) => {
              return (
                <>
                  <SwiperSlide key={product._id}>
                    <motion.div
                      ref={containerRef}
                      animate={isContainerInView && !isPhone ? rightFadeIn : {}}
                    >
                      <ProductCard
                        title={product.title}
                        id={product._id}
                        description={product.description}
                        cardClass={cardClass}
                      />
                    </motion.div>
                  </SwiperSlide>
                </>
              );
            })
          : dispatch(showLoading({ toggled: true }))}
      </Swiper>
    </div>
  );
}

export default mostSold;
