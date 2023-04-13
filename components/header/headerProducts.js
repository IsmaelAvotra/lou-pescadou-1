import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function headerProducts({imageStyle}) {
  const heroProducts=[
    {id:1, name:'Fish 1', image:'fish.png', price:10},
    {id:2, name:'Fish 2', image:'fish-1.png', price:126},
    {id:3, name:'Fish 3', image:'fish-2.png', price:31},
    {id:4, name:'Fish 4', image:'fish-3.png', price:31},
  ];
  const [animatedFish, setAnimatedFish] = useState(heroProducts[0]);


  const changeAnimatedFish=()=>{
    if(animatedFish.image!=heroProducts[heroProducts.length - 1].image){
      let index= heroProducts.findIndex(p => p.image==animatedFish.image);
      setAnimatedFish(heroProducts[index + 1]);
    }else{
      setAnimatedFish(heroProducts[0]);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(changeAnimatedFish, 10000);
    return () => clearInterval(intervalId);
  }, [animatedFish]);

  const { scrollY } = useScroll()
  const sx = useTransform(
    scrollY,
    [0, 100],
    [0, 10],
    { clamp: false }
  )

  const fishAnimation={
    x:[-2000, -60, -60, -60, 2000],
    y:[500, -100, -100, -100, -300],
    display:'block',
    rotate:[0, -13, -15, -13, 10],
    transition:{
      duration:10,
      repeat:1,
    },
  }

  const priceAnimation={
    x:[2000, 200, 200, 200, -2000],
    y:[100,  100, 100],
    display:'flex',
    transition:{
      duration:10,
      repeat:1,
    },
  }

  const textAnimation={
    x:[-2000, -250, -250, -250, 2000],
    y:[-200,  -200, -200],
    display:'flex',
    transition:{
      duration:10,
      repeat:1,
    },
  }
  

  
  return (
    <div className="w-full h-full flex justify-center items-center flex-col relative  overflow-hidden" onWheel={(e)=>e.preventDefault()}>
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
      <div className="w-5/6 h-2/6 flex justify-center items-start w-1/2">
        <motion.div className="glassmorphism"></motion.div>
        {heroProducts.map(product=>(
            <>
              <motion.h2
                animate={product.image==animatedFish.image? textAnimation : {}}
                style={{x:2000, y:500, display:'none'}}
                className="fish-text"
              >
                {product.name}
              </motion.h2>
              <motion.img
                transition={{ duration: 2 }}
                src={`/assets/${product.image}`}
                className="5/6 md:w-3/6 absolute fish"
                alt=""
                animate={product.image==animatedFish.image? fishAnimation : {}}
                style={{x:2000, y:500, display:'none'}}
              />
              <motion.h3
                animate={product.image==animatedFish.image? priceAnimation : {}}
                style={{x:2000, y:500, display:'none'}}
                className="fish-price"
              >
                {product.price}
              </motion.h3>
            </>
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