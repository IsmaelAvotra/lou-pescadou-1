import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

function headerProducts({imageStyle}) {

  useEffect(() => {
    console.log(imageStyle);
  }, [imageStyle]);
  
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-5/6 h-3/6 flex justify-start items-center">
        <motion.h1
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: 800 }}
          className="text-white opacity-50 text-8xl font-black"
        >
          lou pescadou
        </motion.h1>
      </div>
      <div className="w-5/6 h-2/6 rotate-12 flex justify-center items-start">
        <motion.img
          transition={{ duration: 2 }}
          src="/assets/fish.png"
          className="5/6 md:w-3/6"
          alt=""
        />
      </div>
      <div className="w-5/6 h-1/6 flex justify-end items-start">
        <motion.h2
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: 800 }}
          className="text-white opacity-50 text-7xl font-black"
        >
          30£
        </motion.h2>
      </div>
    </div>
  );
}

export default headerProducts;
