import ProductCard from "./productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function mostSold({ title }) {
  return (
    <div className="w-full h-full flex items-start flex-col">
        <h1 className="text-white font-bold md:text-5xl mb-10 text-3xl z-30 ml-8 sm:ml-40">
          {title}
        </h1>

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-5/6 h-4/6 md:h-3/6 md:black flex md:justify-center md:items-center"
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default mostSold;
