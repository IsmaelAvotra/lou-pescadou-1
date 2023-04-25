import ProductCard from "./productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { fetchProductsData } from "@/App/Features/Products/produtsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function mostSold({ title, cardClass, titleClasses }) {
  const products = useSelector((state) => state.products.productsData);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  return (
    <div className="w-full h-[40%] mt-5 flex items-start flex-col">
      <h1 className={`w-full md:text-5xl text-2xl z-30 ${titleClasses} tracking-widest`}>
        {title}
      </h1>

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
                    <ProductCard title={drink.strDrink} id={drink.idDrink} photoUrl={drink.strDrinkThumb} description={drink.strInstructions} cardClass={cardClass} />
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
