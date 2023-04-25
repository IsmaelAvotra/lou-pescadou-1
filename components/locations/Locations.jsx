import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { leftFadeIn, rightFadeIn } from "../motion-animations";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";


const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA_8CjHQ0JVtcFug0piLXCzcI6xaZvReso"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);
  const isContainerInView = useInView(headerRef);

  return isLoaded ? (
    <>
      <motion.h1 
        className={`w-full md:text-5xl text-2xl relative z-30 text-center text-white pt-5`}
        ref={headerRef}
        animate={isHeaderInView ? leftFadeIn : {}}
      >
        Locations
      </motion.h1>

      <motion.div
        ref={containerRef}
        animate={isContainerInView ? rightFadeIn : {}}
      >
        <GoogleMap
          mapContainerClassName='h-[400px] text-white mt-5 w-[85%] m-auto rounded-[20px]'
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          id='locations'
        >
          
          <></>
        </GoogleMap>
      </motion.div>
    </>
  ) : <></>
}

export default React.memo(Map)