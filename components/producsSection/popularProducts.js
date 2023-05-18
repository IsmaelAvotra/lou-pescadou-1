import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { leftFadeIn, rightFadeIn } from "../motion-animations";

const PopularProducts = ({ isPhone }) => {
  const paragraphRef = useRef(null);
  const headerRef = useRef(null);
  const isParagraphInView = useInView(paragraphRef);
  const isHeaderInView = useInView(headerRef);

  return (
    <div className="lg:h-screen lg:px-10 mt-32 py-10 relative z-10">
      <img
        src={`/assets/popular.png`}
        className="hidden lg:block w-full absolute -top-[30%] md:-top-[10%] lg:-top-[30%] left-0 -z-10"
        id="histoire"
      />
      <img
        src={`/assets/popular-mobile.png`}
        className="lg:hidden w-full absolute -top-[10%] md:-top-[50%] left-0 -z-10"
      />
      <div className="py-4 text-[#000c6e] w-full text-center">
        <motion.h3
          className="text-2xl w-[80%] md:text-5xl m-auto lg:my-5 my-0"
          ref={headerRef}
          animate={isHeaderInView && !isPhone ? leftFadeIn : {}}
        >
          Notre <span className="text-[#79c8f5]">histoire</span>
        </motion.h3>
        <motion.p
          className="text-lg text-justify md:text-center  lg:text-3xl xl:text-4xl w-[60%] m-auto"
          ref={paragraphRef}
          animate={isParagraphInView && !isPhone ? rightFadeIn : {}}
        >
          Plongez dans notre sélection de poissons frais en ligne ! Lou Pescadou
          vous propose une sélection exceptionnelle de poissons frais et de
          fruits de mer de qualité supérieure, livrés directement chez vous.
          Notre processus de commande en ligne est simple et rapide. Vous pouvez
          facilement parcourir notre sélection de produits frais, ajouter des
          articles à votre panier, et passer votre commande en quelques clics
          seulement. Nous offrons également une livraison rapide et fiable pour
          assurer la fraîcheur de nos produits.
          <a href="/histoire" className="underline text-[#79c8f5] text-2xl">
            Voir Plus.
          </a>
        </motion.p>
        <div className="flex justify-center w-full h-96 bg-[#000] md:mt-44 mt-20">
          <video src="" ></video>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
