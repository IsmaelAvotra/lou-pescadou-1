import Carousel from "react-bootstrap/Carousel";
function CarouselFadeExample() {
  return (
    <Carousel fade className="mb-3">
      <Carousel.Item className="d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <img src='/assets/fish-1.png' alt="tr" style={{ maxWidth: "70%" }} />
        </div>

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="d-flex justify-content-center  text-center">
        <div className="d-flex justify-content-center">
          <img src='/assets/fish-2.png' alt="tr" style={{ maxWidth: "70%" }} />
        </div>

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="d-flex justify-content-center text-center">
        <div className="d-flex justify-content-center">
          <img src='/assets/fish-3.png' alt="tr" style={{ maxWidth: "70%" }} />
        </div>

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
