import { Carousel } from "flowbite-react";

function HeroCarousel() {
  return (
    <div className="h-64 sm:h-80 xl:h-[500px] 2xl:h-[600px]">
      <Carousel slideInterval={5000}>
        <img
          className="w-full h-full object-cover"
          src="/slide1.jpg"
          alt="..."
        />
        <img
          className="w-full h-full object-cover"
          src="/slide3.jpg"
          alt="..."
        />
        <img
          className="w-full h-full object-cover"
          src="/slide4.jpg"
          alt="slide4"
        />
        <img
          className="w-full h-full object-cover"
          src="/slide5.jpg"
          alt="slide5"
        />
        <img
          className="w-full h-full object-cover"
          src="/slide2.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
