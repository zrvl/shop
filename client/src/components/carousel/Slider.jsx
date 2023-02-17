import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider from "./slider.module.scss";
import slide1 from "../../../src/images/phone.jpg";
import slide2 from "../../../src/images/phone1.jpg";
import slide3 from "../../../src/images/refreg.jpg";
import slide4 from "../../../src/images/dplm.jpg";
import slide5 from "../../../src/images/bgImg.jpeg";
import slide6 from "../../../src/images/bg1.jpg";
import slide7 from "../../../src/images/bg2.jpg";

const Slider = () => {
  return (
    <Carousel className={slider.slider} fade>
      <Carousel.Item>
        <div className={slider.slider__item}>
          <div
            className={slider.slider__item__img}
            style={{ backgroundImage: `url(${slide1})` }}
          ></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={slider.slider__item}>
          <div
            className={slider.slider__item__img}
            style={{ backgroundImage: `url(${slide2})` }}
          ></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={slider.slider__item}>
          <div
            className={slider.slider__item__img}
            style={{ backgroundImage: `url(${slide3})` }}
          ></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={slider.slider__item}>
          <div
            className={slider.slider__item__img}
            style={{ backgroundImage: `url(${slide4})` }}
          ></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={slider.slider__item}>
          <div
            className={slider.slider__item__img}
            style={{ backgroundImage: `url(${slide5})` }}
          ></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={slider.slider__item}>
          <div
            className={slider.slider__item__img}
            style={{ backgroundImage: `url(${slide6})` }}
          ></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={slider.slider__item}>
          <div
            className={slider.slider__item__img}
            style={{ backgroundImage: `url(${slide7})` }}
          ></div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
