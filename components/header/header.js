import HeaderProducts from "../../components/header/headerProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function header() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="w-full h-full">
      <SwiperSlide>
        <HeaderProducts />
      </SwiperSlide>
      <SwiperSlide>
        <HeaderProducts />
      </SwiperSlide>
      <SwiperSlide>
        <HeaderProducts />
      </SwiperSlide>
    </Swiper>
  );
}

export default header;
