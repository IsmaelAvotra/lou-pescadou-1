import React from 'react';
import MostSold from "./ProducsSection";
import Categories from "../../components/categories/categories";

const PopularProducts = () => {
    return (
      <div className="lg:h-screen lg:px-10 py-10 lg:py-16 relative">
        <img src={`/assets/popular.png`} className='hidden lg:block w-full absolute -top-[30%] md:-top-[50%] left-0 -z-10'/>
        <img src={`/assets/popular-mobile.png`} className='lg:hidden w-full absolute -top-[30%] md:-top-[50%] left-0 -z-10'/>
        <div className='py-5 text-[#000c6e] w-full text-center'>
          <div className="flex py-3 md:py-10 justify-center items-center w-full">
            <Categories />
          </div>
          <h3 className='text-2xl w-[80%] md:text-5xl pb-5 md:pb-10 m-auto'>Votre poissonnerie en ligne de <span className='text-[#79c8f5]'>Crustaces</span></h3>
          <p className='text-lg text-justify md:text-center md:text-2xl w-[60%] m-auto font-sans'>
            Passez commande en quelques clics!
            votre poisson est achete la vielle ou le jour de l'envoi de votre colis.
            reservez votre poisson en 24/48h! <a href='#' className='underline'>Comment ca marche?</a>
          </p>
        </div>
        <MostSold title={"Les plus vendus cette semaine"} titleClasses="text-center text-[#0b0960]" cardClasss='bg-[#6281aca1] backdrop-blur-2xl shadow-md p-4' />
      </div>
    )
}

export default PopularProducts