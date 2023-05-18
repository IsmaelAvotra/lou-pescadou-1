import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";

function loading() {
  const { isLoading } = useSelector((state) => state.loading);
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);
  return (
    isLoading && (
      <div className="w-screen h-screen fixed z-50 flex justify-center bg-[#fff9] backdrop-blur-3xl items-center">
        <lottie-player
          autoplay
          ref={ref}
          loop
          style={{width: "400px"}}
          mode="normal"
          src="/assets/anime/nGGJsdeP4J.json"
        ></lottie-player>
      </div>
    )
  );
}

export default loading;
