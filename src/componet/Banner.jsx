import React from "react";
import Button from "./commonCommponet/Button";
import Paragraf from "./commonCommponet/Paragraf";
import bannerImg from "../assets/banner/banner.png"
const Banner = () => {
  return (
    <>
      <div className="bg-bannerBg  z-0 bg-center bg-no-repeat bg-cover relative after:absolute after:content-[''] after:w-full after:h-full after:left-0 after:top-0 after:bg-white after:opacity-[0.8] after:-z-10">
        <div className="container">
          <div className="flex justify-between align-middle relative z-0">
            <div className="py-[160px] w-[40%]">
              <h1 className="font-bold text-[48px] font-Nunito text-font_color leading-[133%] tracking-tighter">
                Get Bussiness <br />
                Solutions with TheFirm.
              </h1>
             <Paragraf ParagrafContent={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy.'}/>
              <Button buttonContent={"Get in Touch"} buttonDesing={"after:left-0"}/>
            </div>
            <div className="h-full w-[947px] absolute right-[-34px] -z-[1] shadow-xl">
              <picture>
                <img src={bannerImg} alt={bannerImg} className="w-full h-full object-cover"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
