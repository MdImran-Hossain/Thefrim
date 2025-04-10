import React from "react";
import CommonHead from "./commonCommponet/CommonHead";
import Slider from "react-slick";
import Google from "../assets/patner/goggle.png";
import FireFox from "../assets/patner/fire.png"
import Safari from "../assets/patner/safari.png"
import Window from "../assets/patner/win.png"
const Patner = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots:true,
        centerPadding: "50px",
        slidesToShow: 4,
        speed: 500,
        autoplay:true,
        autoplaySpeed:1000,
        arrows:true
      };
  return (
    <>
      <section className="py-[100px]">
        <div className="container">
          <div className="flex justify-center">
            <CommonHead headingContent={"Our "} HlastContent={"Partner"} />
          </div>
          <div className="pt-[50px]">
            <div className="slider-container">
              <Slider {...settings}>
                <div className=" slider">
                    <picture>
                        <img src={Google} alt={Google} />
                    </picture>
                </div>
                <div className=" slider">
                    <picture>
                        <img src={FireFox} alt={Google} />
                    </picture>
                </div>
                <div className=" slider">
                    <picture>
                        <img src={Window} alt={Google} />
                    </picture>
                </div>
                <div className=" slider">
                    <picture>
                        <img src={Safari} alt={Google} />
                    </picture>
                </div>
                <div className=" slider">
                    <picture>
                        <img src={Google} alt={Google} />
                    </picture>
                </div>
                <div className=" slider">
                    <picture>
                        <img src={FireFox} alt={Google} />
                    </picture>
                </div>
                
                
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patner;
