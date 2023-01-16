import React from 'react'
import Slider from 'react-slick'
import style from './Slick.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <div className={style.slider}>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
  )
}

export default Slick