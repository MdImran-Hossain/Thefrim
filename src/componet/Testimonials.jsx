import React from "react";
import CommonHead from "./commonCommponet/CommonHead";
import Slider from "react-slick";
import Test1 from "../assets/tesmonial/test1.png";
import Test2 from '../assets/tesmonial/test2.png'
import Test3 from "../assets/tesmonial/test3.jpg";
import Test4 from '../assets/tesmonial/test4.jpg'
import Test5 from "../assets/tesmonial/test5.jpg";
import Test6 from '../assets/tesmonial/test6.jpg'
const Testimonials = () => {
  const Testim=[
    {
      id:1,
      sliderimg:Test1,
      sumary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
      sliderIName:"Jenny Wilson |",
      sliderSpan:" Digital Agency"
    },
    {
      id:2,
      sliderimg:Test2,
      sumary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
      sliderIName:"Martha Lane Fox  |",
      sliderSpan:" Digital Agency"
    },
    {
      id:3,
      sliderimg:Test3,
      sumary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
      sliderIName:"Steve Shirley |",
      sliderSpan:" Digital Agency"
    },
    {
      id:4,
      sliderimg:Test4,
      sumary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
      sliderIName:"Linus Torvalds |",
      sliderSpan:" Digital Agency"
    },
    {
      id:5,
      sliderimg:Test5,
      sumary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
      sliderIName:"Richard Stallman |",
      sliderSpan:" Digital Agency"
    },{
      id:6,
      sliderimg:Test6,
      sumary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
      sliderIName:"Linus Torvalds |",
      sliderSpan:" Digital Agency"
    },
  ]
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        // autoplay:true,
        autoplaySpeed:4000,
        speed: 500,
        arrows:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots:true,

      };
   
  return (
    <>
      <section className="pt-[100px] pb-[60px]">
        <div className="container">
          <div className="flex justify-center">
            <CommonHead headingContent={"Our "} HlastContent={"Testimonials"} />
          </div>
          <div className="pt-[50px]">
          <div className="slider-container">
      <Slider {...settings}>
        {
          Testim.map((Testim)=>{
            return(
              <div key={Testim.id}>
                <div className="slidercard ">
                <div className=" sliderImg pt-5">
                  <picture>
                    <img src={Testim.sliderimg} className="w-[146px] h-[146px] rounded-full z-10" alt="" />
                  </picture>
                </div>
               <div className="silderContent">
               <p className="text-[18px] font-Lora font-normal text-font_color leading-[176%] tracking-wide">{Testim.sumary}</p>
               <h4 className="text-[24px] font-bold font-Nunito text-[#1e1e1e] pt-7">{Testim.sliderIName} <span className="text-[18px] font-normal font-Lora text-[#1e1e1e]">{Testim.sliderSpan}</span></h4> 
               </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
