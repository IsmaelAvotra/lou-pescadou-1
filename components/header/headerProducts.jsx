import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Categories from "../categories/categories";
import { btnAnimation, heroDescriptionAnimation, heroImageAnimation, heroTextAnimation } from "../motion-animations";

function headerProducts({isPhone}) {
  const heroProducts=[
    {id:1, text:'Plats Cuisinée', image:'Plats-Cuisinée.png', desc:'Des plats frais et savoureux pour une expérience culinaire inoubliable.'},
    {id:2, text:'Epicerie', image:'Epicerie-cat.png', desc:'Une épicerie fine sélectionnée avec soin pour des créations culinaires réussies.'},
    {id:3, text:'Composition de fromage', image:'Composition-fromage.png', desc:'Des mélanges de fromages frais et affinés pour des saveurs uniques.'},
    {id:4, text:'Produits Frais', image:'Produits-Frais.png', desc:'Des produits locaux de saison, frais et cueillis à la main pour une alimentation saine et délicieuse.'},
  ];
  const [animatedFish, setAnimatedFish] = useState(heroProducts[0]);
  const changeAnimatedFish=()=>{
    if(animatedFish.image!=heroProducts[heroProducts.length - 1].image){
      let index = heroProducts.findIndex(p => p.image==animatedFish.image);
      setAnimatedFish(heroProducts[index + 1]);
    }else{
      setAnimatedFish(heroProducts[0]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(changeAnimatedFish, 20000);
    return () => clearInterval(intervalId);
  }, [animatedFish]);

  return (
    <div className="w-full h-screen mt-20 flex justify-center items-center relative container flex-col-reverse lg:flex-row md:flex-col md:mt-1">
      <div className="text-white gap-12 w-full mr-4 md:block flex justify-center items-center flex-col z-30">
        <motion.h1 style={isPhone ? {textAlign: "center"} : {textAlign: "left"}} animate={heroTextAnimation} className="md:text-7xl text-5xl xl:text-7xl md:mb-16 lg:text-6xl">{animatedFish.text}</motion.h1>
        <motion.p style={isPhone ? {textAlign: "center"} : {textAlign: "left"}} className="md:text-5xl text-3xl w-[80%] max-w-full md:mb-16">{animatedFish.desc}</motion.p>
        <motion.a style={isPhone ? {textAlign: "center"} : {textAlign: "left"}} className="custom-btn" href={`/categories/${animatedFish.id}`}>Découvrir</motion.a>
      </div>
      <motion.img animate={heroImageAnimation} className="w-5/6 mt-24" src={`/assets/${animatedFish.image}`} alt="categorie image" />
    </div>
  );
}

export default headerProducts;