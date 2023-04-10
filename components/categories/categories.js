import React from "react";

function categories() {
  return (
    <div className="w-5/6 flex flex-col md:flex-row gap-x-20 text-sm md:text-xl justify-end items-center gap-y-10 text-white">
      <div className="w-full flex justify-between items-center">
        <div className="w-[45%] rounded-[10px] font-bold text-center justify-center py-5 relative flex bg-[#0b254993]">
          <img className="absolute -top-5 -left-5" src="/assets/produit_frais.png" alt="" />
          <p>Produits Frais</p>
        </div>
        <div className="w-[45%] rounded-[10px] font-bold text-center justify-center py-5 relative flex bg-[#0b254993]">
          <img className="absolute -top-5 -left-5" src="/assets/plat_cuisine.png" alt="" />
          <p>Plats Cuisinée</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-[45%] rounded-[10px] font-bold text-center justify-center py-5 relative flex bg-[#0b254993]">
          <img className="absolute -top-5 -left-5" src="/assets/epicerie.png" alt="" />
          <p>Epicerie</p>
        </div>
        <div className="w-[45%] rounded-[10px] font-bold text-center justify-center py-5 relative flex bg-[#0b254993]">
          <img className="absolute -top-7 -left-5" src="/assets/composition_fromage.png" alt="" />
          <p className="px-5 md:px-0">Composition de fromage</p>
        </div>
      </div>
    </div>
  );
}

export default categories;
