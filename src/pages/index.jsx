import Header from "../../components/header/header";
import MostSold from "../../components/producsSection/ProducsSection";
import Histoire from "../../components/producsSection/popularProducts";
import Mobile from "../../components/mobile/components/Home";
import Canvas from "../../components/bublles/canvas";
import Footer from "../../components/layout/footer";
import { fetchProductsData } from "@/App/Features/Products/produtsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Locations from "../../components/locations/Locations";

export default function Home() {
  const [isPhone, setIsPhone] = useState(true);

  useEffect(()=>{
    const pc=matchMedia('(min-width:991px)')
    if(pc.matches){
      setIsPhone(false)
    }
  }, [])

  return (
    <>
    {isPhone?(
      <Mobile/>
    ):(
      <>
      <img
        src="/assets/bg.png"
        className="md:absolute h-[102vh]  -top-5 w-screen sm:h-max fixed z-0"
        alt=""
      />
      <iframe
        className="fixed h-screen w-screen"
        src="/bubbles-css/index.html"
      />

      <div className="w-full overflow-hidden">
        <Header />
        <Histoire/>
        <MostSold title={"Le plus populaire"} titleClasses="text-white text-center py-5" cardClass='glass'/>
        <MostSold title={""} titleClasses="" cardClass='glass'/>
        <Locations/>
        <Footer/>
      </div>
    </>
    )}
    </>
  );
}
