import HeaderProducts from "../../components/header/headerProducts";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import {  useScroll, useTransform } from "framer-motion";

function header() {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "end end"]
  });

  const imageStyle = useTransform(scrollYProgress, [0, 0.5, 1], [-800, 0, 1400]);
  return (
    <div ref={targetRef} className="w-full h-screen">
      <HeaderProducts imageStyle={imageStyle} />
      <HeaderProducts imageStyle={imageStyle} />
      <HeaderProducts imageStyle={imageStyle} />
    </div>
  );
}

export default header;
