import React from "react";

function categories() {
  return (
    <div className="w-5/6 flex flex-row flex-wrap lg:flex-nowrap md:flex-row gap-x-5 lg:gap-x-20 text-sm md:text-xl justify-center items-center gap-y-10 text-white mb-5 cat">
        <div className="w-[45%] lg:w-[20%] h-[50px] md:h-20 rounded-[10px] font-bold text-center justify-center md:py-5 relative flex items-center justify-center bg-[#0b254993]">
          <img className="absolute -left-2 -top-2 md:-top-8 w-[16%]" src="/assets/produit_frais.png" alt="" />
          <p>Produits Frais</p>
        </div>
        <div className="w-[45%] lg:w-[20%] h-[50px] md:h-20 rounded-[10px] font-bold text-center justify-center md:py-5 relative flex items-center justify-center bg-[#0b254993]">
          <img className="absolute -left-2 -top-2 md:-top-8 w-[20%]" src="/assets/plat_cuisine.png" alt="" />
          <p>Plats Cuisinée</p>
        </div>
        <div className="w-[45%] lg:w-[20%] h-[50px] md:h-20 rounded-[10px] font-bold text-center justify-center md:py-5 relative flex items-center justify-center bg-[#0b254993]">
          <img className="absolute -top-5 md:-top-10 -left-5 md:-left-10 w-[30%]" src="/assets/epicerie.png" alt="" />
          <p>Epicerie</p>
        </div>
        <div className="w-[45%] lg:w-[20%] h-[50px] md:h-20 rounded-[10px] font-bold text-center justify-center md:py-5 relative flex items-center justify-center bg-[#0b254993]">
          <img className="absolute -top-5 md:-top-10 -left-5 md:-left-10 w-[30%]" src="/assets/composition_fromage.png" alt="" />
          <p className="px-5 md:px-0">Composition de fromage</p>
        </div>
    </div>
  );
}

export default categories;
