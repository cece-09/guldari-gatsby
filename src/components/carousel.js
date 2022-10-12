import { useState, useEffect, useRef } from "react";
import React from "react";
import {
  carousel,
  viewport,
  container,
  image,
  button,
} from "./styles/carousel.module.css";
import slide1 from "../images/slides/slide1.jpg";
import slide2 from "../images/slides/slide2.jpg";
import slide3 from "../images/slides/slide3.jpg";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";

const slides = [slide1, slide2, slide3];

export const Carousel = () => {
  const totalSlideNum = slides.length; // total slide num

  const [currSlide, setCurrSlide] = useState(0); // initailize first slide
  const carouselRef = useRef(null);

  useEffect(() => {
    carouselRef.current.style.transform = `translateX(${currSlide * -100}%)`;
  });

  // button onclick functions
  const nextSlide = () => {
    // is the last slide, go to first
    if (currSlide === totalSlideNum - 1) {
      setCurrSlide(0);
    } else {
      setCurrSlide(currSlide + 1);
    }
  };
  const prevSlide = () => {
    // is the first slide, go to last
    if (currSlide === 0) {
      setCurrSlide(totalSlideNum - 1);
    } else {
      setCurrSlide(currSlide - 1);
    }
  };

  const Image = ({ src }) => {
    const bg = {
      backgroundImage: `url(${src})`,
    };

    return <div className={image} style={bg}><div></div></div>;
  };
  
  return (
    <div className={carousel}>
      <button onClick={prevSlide} className={button}>
        <AiOutlineLeft />
      </button>
      <div className={viewport}>
        <div className={container} ref={carouselRef}>
          {slides.map((img, i) => {
            return <Image key={i} src={img} />;
          })}
        </div>
      </div>
      <button onClick={nextSlide} className={button}>
        <AiOutlineRight />
      </button>
    </div>
  );
};
