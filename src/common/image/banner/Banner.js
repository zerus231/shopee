import React from "react";
import Img01 from "../banner/banner_shopee_55.jpg";
import Img02 from "../banner/banner_shopee_66.jpg";
import Slider from "react-slick";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider className="lst-banner banner-slider" {...settings}>
      <li>
        <a href="/" className="link-item">
          <img src={Img01} alt="Shopee Outlet 5.5" />
        </a>
      </li>
      <li>
        <a href="/" className="link-item">
          <img src={Img02} alt="Shopee Outlet 6.6" />
        </a>
      </li>
      <li>
        <a href="/" className="link-item">
          <img src={Img02} alt="Shopee Outlet 6.6" />
        </a>
      </li>
    </Slider>
  );
};

export default Banner;
