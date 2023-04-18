import MostSold from "../../producsSection/ProducsSection";
import Navigation from "./Navigation";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import CarouselFadeExample from "./Carousel";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import LogoSection from "./../inc/LogoSection";
import Bubbles2 from "../inc/Bubbles2";
const Home = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 30, { duration: 4 });

    return animation.stop;
  }, []);

  return (
    
    <div className="container pb-[100px]" style={{marginTop:"80px"}}>
      <div className="row">
        <div className="">
          <LogoSection />
        </div>
        <div className="container">
          <div className="row">
            <CarouselFadeExample />
            <div className="d-flex justify-content-center">
              <div className="">
                <button className="btn btn-light">Découvrir</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col align-self-end">
              <div className="text-end title">
                <motion.h2 className="d-inline">{rounded}</motion.h2>£
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
      <MostSold title={"Le plus populaire"} titleClasses="text-white text-center md:text-left md:indent-20" cardClasss='glass p-2'/>
      <MostSold title={"Le plus populaire"} titleClasses="text-white text-center md:text-left md:indent-20" cardClasss='glass p-2'/>
      <MostSold title={"Le plus populaire"} titleClasses="text-white text-center md:text-left md:indent-20" cardClasss='glass p-2'/>
      <div className="bg-pes"></div>
      <Bubbles2/>
    </div>
  );
};

export default Home;
