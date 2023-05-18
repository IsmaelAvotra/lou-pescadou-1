import Header from "../../components/header/header";
import MostSold from "../../components/producsSection/ProducsSection";
import Histoire from "../../components/producsSection/popularProducts";
import Footer from "../../components/layout/footer";
import { showLoading } from "@/App/Features/loading/loadingSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import LogoSection from "./../../components/mobile/inc/LogoSection";
import Locations from "../../components/locations/Locations";

export default function Home() {
  const [isPhone, setIsPhone] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const pc = matchMedia("(min-width:991px)");
    if (pc.matches) {
      setIsPhone(false);
    }
    setTimeout(() => {
      dispatch(showLoading({ toggled: false }));
    }, 2000);
  }, []);

  return (
    <>
      {/* {isPhone?(
      <Mobile/>
    ):(
      <> */}
      <img
        src="/assets/bg.png"
        className="md:absolute h-[102vh]  -top-5 w-screen sm:h-[390%] fixed z-0"
        alt=""
      />

      <iframe
        className="fixed h-screen w-screen"
        src="/bubbles-css/index.html"
      />

      <div className="w-full overflow-hidden">
        <Header isPhone={isPhone} />
        <LogoSection />
        <Histoire isPhone={isPhone} />
        <MostSold
          title={"Le plus populaire"}
          titleClasses="text-white text-center py-5 mt-[250px]"
          cardClass="glass"
          isPhone={isPhone}
        />
        <MostSold
          title={""}
          titleClasses=""
          cardClass="glass"
          isPhone={isPhone}
        />
        <Locations />
        <Footer />
      </div>
      {/* </>
    )} */}
    </>
  );
}
