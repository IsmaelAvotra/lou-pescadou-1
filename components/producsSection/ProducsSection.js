import ProductCard from "./productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { fetchProductsData } from "@/App/Features/Products/produtsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function mostSold({ title }) {
  const products = useSelector((state) => state.products.productsData);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  return (
    <div className="w-full h-[40%] mt-5 flex items-start flex-col">
      <h1 className="text-white font-bold md:text-5xl mb-10 text-3xl z-30 ml-8 sm:ml-40">
        {title}
      </h1>

      <Swiper
        pagination={{
          clickable: true,
        }}
        className="w-5/6 h-full md:black flex md:justify-center md:items-center"
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
                <SwiperSlide key={drink.idDrink}>
                  <ProductCard title={drink.strDrink} id={drink.idDrink} photoUrl={drink.strDrinkThumb} description={drink.strInstructions} />
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
}

export default mostSold;
