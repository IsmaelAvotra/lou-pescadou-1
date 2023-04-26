import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Categories from "../categories/categories";
import { btnAnimation, heroDescriptionAnimation, heroImageAnimation, heroTextAnimation } from "../motion-animations";



function headerProducts({imageStyle}) {
  const heroProducts=[
    {id:1, text:'Plats Cuisinée', image:'Plats-Cuisinée.png', desc:'Des plats frais et savoureux pour une expérience culinaire inoubliable.'},
    {id:2, text:'Epicerie', image:'Epicerie-cat.png', desc:'Une épicerie fine sélectionnée avec soin pour des créations culinaires réussies.'},
    {id:3, text:'Composition de fromage', image:'Composition-fromage.png', desc:'Des mélanges de fromages frais et affinés pour des saveurs uniques.'},
    {id:4, text:'Produits Frais', image:'Produits-Frais.png', desc:'Des produits locaux de saison, frais et cueillis à la main pour une alimentation saine et délicieuse.'},
  ];
  const [animatedFish, setAnimatedFish] = useState(heroProducts[0]);
  const changeAnimatedFish=()=>{
    if(animatedFish.image!=heroProducts[heroProducts.length - 1].image){
      let index= heroProducts.findIndex(p => p.image==animatedFish.image);
      setAnimatedFish(heroProducts[index + 1]);
    }else{
      setAnimatedFish(heroProducts[0]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(changeAnimatedFish, 10000);
    return () => clearInterval(intervalId);
  }, [animatedFish]);

  return (
    <div className="w-full h-full flex justify-center items-center relative container sm:flex-col-reverse lg:flex-row flex-col sm:mt-44 md:mt-1">
      <div className="text-white head-pro">
        <motion.h1 animate={heroTextAnimation} className="text-5xl xl:text-7xl mb-6 lg:text-6xl">{animatedFish.text}</motion.h1>
        <motion.p animate={heroDescriptionAnimation} className="text-4xl w-[80%] max-w-full mb-6">{animatedFish.desc}</motion.p>
        <motion.a animate={btnAnimation} className="custom-btn" href={`/categories/${animatedFish.id}`}>Découvrir</motion.a>
      </div>
      <motion.img animate={heroImageAnimation} src={`/assets/${animatedFish.image}`} alt="categorie image" />
    </div>
  );
}

export default headerProducts;