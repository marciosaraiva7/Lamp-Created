import React from "react";
import Carousel from "react-elastic-carousel";
import { portifolio } from "./portifolio";
import Container from './styles.js';

const CarrouselPortifolio = () => {
  const items = portifolio;
  return (
    <Container>
      <Carousel
        className="carousel"
        disableArrowsOnEnd={true}
        itemsToShow={3}
        itemsToScroll={2}
      >
        {items.map((item) => (
          <div key={item.id}>
            {item.title} <img src={item.img} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarrouselPortifolio;
