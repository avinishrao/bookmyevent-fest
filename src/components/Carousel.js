import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
  dots: true,
  infinite: true,
  speed: 0.1,
  // slidesToShow: 1.35,
  slidesToShow:1,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 2200
};



// "width": "100%", "height": "100%", "display": "flex","position": "relative","transition": "all 0.2s ease","margin": "0px -10px"

// style={{"transform": "translateX(-1011px)","left": "auto"}}
export default function Carousel() {
  return (
    <div className="carousel-container">
      <Slider {...settings} >
        <div >
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1702972896237_frides.jpg" alt="Slide 1" style={{objectFit: "contain" , borderRadius: "0.5rem"}}></img>
        </div>
        <div>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1703669272395_lolladesktop.jpg" alt="Slide 2" style={{objectFit: "contain" , borderRadius: "0.5rem"}}></img>
        </div>
        <div>
          <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1702972896237_frides.jpg" alt="Slide 3" style={{objectFit: "contain", borderRadius: "0.5rem"}}></img>
        </div>
      </Slider>
    </div>
  )
}
