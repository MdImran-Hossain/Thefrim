import React from "react";
import CommonHead from "./commonCommponet/CommonHead";
import Paragraf from "./commonCommponet/Paragraf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import Fus from "../assets/clicnt.png"
const client = () => {
  return (
    <>
      <section className="pt-[96px] pb-[110px] bg-fist_bgcolor">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
            <div>
              <CommonHead
                headingContent={"Frustration of "}
                HlastContent={"Clients"}
              />
              <Paragraf
                ParagrafContent={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
                ParagrafDesing={"max-w-[530px]"}
              />
            </div>
            <div> 
               <ul className="flex flex-col gap-2 pl-[29px]">
                <li className="text-[18px] font-normal font-Lora text-font_color leading-[176%] max-w-[450px]">
                <span className="text-button_color  pr-[10px]"><FontAwesomeIcon icon={faQuestion} /></span>Loren rasion gravida auem is bibenua tase
                </li>
                <li className="text-[18px] font-normal font-Lora text-font_color leading-[176%] max-w-[450px]">
                <span className="text-button_color  pr-[10px]"><FontAwesomeIcon icon={faQuestion} /></span>Lorem Ipsum is simply dummy text of the.
                </li>
                <li className="text-[18px] font-normal font-Lora text-font_color leading-[176%] max-w-[450px]">
                <span className="text-button_color  pr-[10px]"><FontAwesomeIcon icon={faQuestion} /></span>Printing and typesetting industry. Lorem Ipsum
                </li>
                <li className="text-[18px] font-normal font-Lora text-font_color leading-[176%] max-w-[450px]">
                <span className="text-button_color pr-[10px]"><FontAwesomeIcon icon={faQuestion} /></span>When an unknown printer took a galley of type and <span className="pl-5">scrambled it</span>
                </li>
               </ul>
            </div>
            </div>
            <div>
                <picture>
                  <img src={Fus} alt={Fus} />
                </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default client;
