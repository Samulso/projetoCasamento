import React, { useState } from "react";

const GalleryCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const nextSlide = () => {
    setDirection("next");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setDirection("");
    }, 50);
  };

  const prevSlide = () => {
    setDirection("prev");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setDirection("");
    }, 50);
  };

  const getPrevIndex = () => {
    return (currentIndex - 1 + images.length) % images.length;
  };

  const getNextIndex = () => {
    return (currentIndex + 1) % images.length;
  };

  const goToSlide = (index) => {
    if (index > currentIndex) {
      setDirection("next");
    } else if (index < currentIndex) {
      setDirection("prev");
    }
    setTimeout(() => {
      setCurrentIndex(index);
      setDirection("");
    }, 50);
  };

  return (
    <div className="item-preparo">
      {title && <h1 className="title">{title}</h1>}

      <div className="carousel">
        {/* Imagem da esquerda */}
        <div onClick={prevSlide} className={`imagem-anterior ${direction}`}>
          <img
            src={images[getPrevIndex()].url}
            alt={images[getPrevIndex()].alt}
            className="carousel-img"
          />
        </div>

        {/* Imagem central */}
        <div className={`imagem-central ${direction}`}>
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="carousel-img"
          />
        </div>

        {/* Imagem da direita */}
        <div onClick={nextSlide} className={`imagem-posterior ${direction}`}>
          <img
            src={images[getNextIndex()].url}
            alt={images[getNextIndex()].alt}
            className="carousel-img"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
