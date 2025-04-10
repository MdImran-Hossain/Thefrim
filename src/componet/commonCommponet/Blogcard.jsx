import React from 'react'
import Button from './Button'
import { MdOutlineWatchLater } from 'react-icons/md'
const Blogcard = ({BlogImg,Title,Sumary,ManImg,Name,Date,Btn}) => {
  return (
    <>
      <div className="blogs w-[340px] flex flex-col justify-center items-center pb-[30px]  bg-white_color rounded-[15px] hover:shadow-xl duration-500 ">
                <picture>
                  <img src={BlogImg} alt="" />
                </picture>
                <div className="p-[21px]">
                  <h5 className="text-[24px] font-Nunito font-bold text-font_color">
                    {Title}
                  </h5>
                  <p className="text-[17px] font-Lora font-normal pt-2 pb-7 text-font_color ">
                    {Sumary}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <picture>
                        <img src={ManImg} alt="" />
                      </picture>
                      <h4 className="text-[14px] font-Nunito font-normal text-font_color">
                        {Name}
                      </h4>
                    </div>
                    <p className="text-[10px] font-Nunito font-normal text-[#B0B0B0] flex items-center gap-[6px] justify-center">
                      <span className='text-[15px]'>
                      <MdOutlineWatchLater />
                      </span>{" "}
                     {Date}
                    </p>
                  </div>
                </div>
                <Button
                  buttonContent={Btn}
                  buttonDesing={
                    "after:bg-font_color border-none after:rounded text-white_color hover:bg-button_color"
                  }
                />
              </div>
    </>
  )
}

export default Blogcard;
