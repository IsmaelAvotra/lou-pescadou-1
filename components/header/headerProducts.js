import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function headerProducts({imageStyle}) {
  const images=['fish.png', 'fish-1.png', 'fish-2.png', 'fish-3.png'];
  const [animatedFish, setAnimatedFish] = useState(images[0]);
  // useEffect(() => {
  //   console.log(imageStyle);
  // }, [imageStyle]);


  const changeAnimatedFish=()=>{
    if(animatedFish!=images[images.length - 1]){
      let index= images.findIndex(img => img==animatedFish);
      setAnimatedFish(images[index + 1]);
    }else{
      setAnimatedFish(images[0]);
    }
  }
  setInterval(changeAnimatedFish, 5000)

  const animate={
    x:[-2000, -50, 2000],
    y:[500, -100, -300],
    rotate:[0, -15, 10],
    transition:{
      duration:5,
      repeat:Infinity
    },
  }
  

  
  return (
    <div className="w-full h-full flex justify-center items-center flex-col relative  overflow-hidden">
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
      <div className="w-5/6 h-2/6 flex justify-center items-start">
        {images.map(image=>(
          <motion.img
          key={image}
            transition={{ duration: 2 }}
            src={`/assets/${image}`}
            className="5/6 md:w-3/6 absolute"
            alt=""
            animate={image==animatedFish? animate : {}}
            style={{x:2000, y:500}}
          />
        ))}
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
