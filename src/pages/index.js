import Header from "../../components/header/header";
import MostSold from "../../components/producsSection/ProducsSection";


export default function Home() {
  return (
    <>
      <img
        src="/assets/bg.png"
        className="md:absolute h-screen sm:h-max fixed z-0"
        alt=""
      />
      <div className="w-full h-screen">
        <Header />
        <MostSold title="Most sold this week" />
        <MostSold title="Most popular" />
        
      </div>
    </>
  );
}
