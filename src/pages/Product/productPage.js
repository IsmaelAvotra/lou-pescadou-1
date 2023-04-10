import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function productPage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-5/6 h-4/6 md:h-full"
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img src="/assets/productImg.png" className="w-full shadow-2xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/productImg.png" className="w-full shadow-2xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/productImg.png" className="w-full shadow-2xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/productImg.png" className="w-full shadow-2xl" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/productImg.png" className="w-full shadow-2xl" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default productPage;
