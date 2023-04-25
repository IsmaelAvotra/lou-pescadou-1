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


function mostSold({ title, cardClass, titleClasses }) {
  const products = useSelector((state) => state.products.productsData);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);
  const isContainerInView = useInView(headerRef);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  return (
    <div className="w-full h-[40%] mt-5 flex items-start flex-col">
      <motion.h1 
        className={`w-full md:text-5xl text-2xl z-30 ${titleClasses} tracking-widest`}
        ref={headerRef}
        animate={isHeaderInView ? leftFadeIn : {}}
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
        {products.drinks
          ? products.drinks.map((drink) => {
              return (
                <>
                  <SwiperSlide key={drink.idDrink}>
                    <motion.div
                      ref={containerRef}
                      animate={isContainerInView ? rightFadeIn : {}}
                    >
                      <ProductCard title={drink.strDrink} id={drink.idDrink} photoUrl={drink.strDrinkThumb} description={drink.strInstructions} cardClass={cardClass} />
                    </motion.div>
                  </SwiperSlide>
                </>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
}

export default mostSold;
