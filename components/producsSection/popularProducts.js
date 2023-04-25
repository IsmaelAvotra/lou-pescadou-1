import React, { useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useState } from 'react';


const PopularProducts = () => {
  const ref = useRef(null);
  const [scrolling, setScrolling] = useState(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  useEffect(()=>{
    const isVisible = scrollYProgress > 0 && scrollYProgress < 1;
    console.log('Element is visible:', isVisible);
    window.onscroll=(e)=>setScrolling(e)
  }, [scrolling])

  return (
    <div className="lg:h-screen lg:px-10 py-10 relative z-10" ref={ref}>
      <img src={`/assets/popular.png`} className='hidden lg:block w-full absolute -top-[30%] md:-top-[10%] lg:-top-[30%] left-0 -z-10' id='histoire'/>
      <img src={`/assets/popular-mobile.png`} className='lg:hidden w-full absolute -top-[30%] md:-top-[50%] left-0 -z-10'/>
      <div className='py-4 text-[#000c6e] w-full text-center'>
        <h3 className='text-2xl w-[80%] md:text-5xl m-auto my-5'>Notre <span className='text-[#79c8f5]'>histoire</span></h3>
        <p className='text-lg text-justify md:text-center  lg:text-3xl xl:text-4xl w-[60%] m-auto'>
          Plongez dans notre sélection de poissons frais en ligne !
          Lou Pescadou vous propose une sélection exceptionnelle de poissons frais et de fruits de mer de qualité supérieure, livrés directement chez vous. 
          Notre processus de commande en ligne est simple et rapide. Vous pouvez facilement parcourir notre sélection de produits frais, 
          ajouter des articles à votre panier, et passer votre commande en quelques clics seulement. 
          Nous offrons également une livraison rapide et fiable pour assurer la fraîcheur de nos produits.
        <a href='/histoire' className='underline text-[#79c8f5] text-2xl'>Voir Plus.</a>
        </p>
      </div>
    </div>
  )
}

export default PopularProducts
