import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Categories from "../../components/categories/categories";


function headerProducts({imageStyle}) {
  const heroProducts=[
    {id:1, name:'Plats Cuisinée', image:'fish.png', price:10, x:'50', y:'-400', angle:0},
    {id:2, name:'Epicerie', image:'fish-1.png', price:126, x:'50', y:'500', angle:180},
    {id:3, name:'Composition de fromage', image:'fish-2.png', price:31, x:'500', y:'50', angle:90},
    {id:4, name:'Produits Frais', image:'fish-3.png', price:31, x:'-400', y:'50', angle:270},
  ];
  const [rotate, setRotate] = useState(0);
  const [scrollAnabled, setScrollAnabled] = useState(false);


  const disableScroll = () => {   
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollLeft = 0;
  };

  const enableScroll = () => {
    document.body.style.overflow = 'initial';
    document.documentElement.style.overflow = 'initial';
  };

  useEffect(() => {
    window.addEventListener('wheel', ()=>{
      const delta = Math.sign(event.deltaY);
      if (delta > 0) {
        setRotate(rotate + 10); // down
      } else if (delta < 0) {
        setRotate(rotate - 10); // up
      }
    })

    if(!scrollAnabled){
      disableScroll()
    }

    if(rotate % 260==0 && rotate!=0){
      enableScroll()
      setScrollAnabled(true)
    }

    document.addEventListener('keyup', (e)=>{
      if(e.key=='ArrowDown'){
        const wheelEvent = new WheelEvent('wheel', {deltaY: 100});
        window.dispatchEvent(wheelEvent);
      }

      if(e.key=='ArrowUp'){
        const wheelEvent = new WheelEvent('wheel', {deltaY: -100});
        window.dispatchEvent(wheelEvent);
      }
    })

    // if(window.scrollY==0 && scrollAnabled){
    //   disableScroll()
    //   setScrollAnabled(false)
    // }
  }, [rotate]);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col relative overflow-hidden">
      <motion.div
        className="w-5/6 h-2/6 flex justify-center items-start absolute fish-container"
        style={{translateX:'-50%', rotate:rotate}}
      >
        {heroProducts.map((product, i)=>(
              <motion.img
                key={product.id}
                transition={{ duration: 2 }}
                src={`/assets/${product.image}`}
                className="absolute"
                alt=""
                style={{top:`${product.y}%`, left:`${product.x}%`, transform:`translate(-50%, -50%) rotate(${product.angle}deg)`}}
              />
        ))}
      </motion.div>
      <motion.div
        className="w-5/6 h-2/6 flex justify-center items-start absolute fish-container fish-text-container"
        style={{translateX:'-50%', rotate:-rotate}}
      >
        {heroProducts.map((product, i)=>(
              <motion.h3
                key={`text-${product.id}`}
                className="absolute fish-text"
                alt=""
                style={{top:`${product.y}%`, left:`${product.x}%`, transform:`translate(-50%, -50%) rotate(${product.angle}deg)`}}
              >
                  {product.name}
              </motion.h3>
        ))}
      </motion.div>
    </div>
  );
}

export default headerProducts;