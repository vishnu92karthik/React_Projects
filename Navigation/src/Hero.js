import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import i6 from './images/i6.jpg'
import i7 from './images/i7.jpg'
import i2 from './images/i2.jpg'


import './Hero.css';
const Hero = () => {
    return (
        <div className="silde">
            <Slider autoplay={true} autoplaySpeed={3000} dots={true} infinite initialSlide={1}>
          <div>
              <img src={i6} alt="" style={{width:"100%" , height:"50vh"}} />
          </div>
          <div>
              <img src={i7} alt="" style={{width:"100%" , height:"50vh"}}/>
          </div>
          <div>
              <img src={i2} alt="" style={{width:"100%" , height:"50vh"}}/>
          </div>
         
            </Slider>
        </div>
    ) 
}

export default Hero
