import React from 'react'
import CommonHead from './commonCommponet/CommonHead'
import Paragraf from './commonCommponet/Paragraf'
import choseimg from '../assets/chose.png'
import { GrAnnounce } from 'react-icons/gr'
import Button from './commonCommponet/Button'
const Chose = () => {
  const ChoseBtn=[
    {
      id:1,
      content:'Market Research'
    },
    {
      id:2,
      content:'Branding'
    },
    {
      id:3,
      content:'Reporting'
    },
    {
      id:4,
      content:'Data Analysis'
    }
  ]
  return (
    <>
      <section className='p-[90px] bg-secend_bgcolor'>
        <div className="container">
            <div className='flex justify-center items-center '>
                <div className='text-center'>
                     <CommonHead headingContent={"Reason to Choose "} HlastContent={"us"}/>
                     <Paragraf ParagrafContent={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"} ParagrafDesing={'max-w-[800px]'}/>
                </div>
            </div>
            <div className='flex justify-between  items-center'>
            {
              ChoseBtn.map((ChoseBtn)=>{
                return(
                  <div key={ChoseBtn.id}>
                    <button className='w-[180px] h-[48px] flex justify-center items-center bg-white_color rounded-xl text-[18px] font-Nunito font-normal text-[#C4C4C4] relative botton shadow-lg'>{ChoseBtn.content}</button>
                  </div>
                )
              })
            }
            </div>
            <div className='flex justify-center gap-14 items-center bg-white_color px-[41px] py-[67px] mt-[60px] rounded-xl'>
              <div className='w-full h-full border-[10px] border-white_color shadow-2xl rounded-2xl'>
                <picture>
                  <img src={choseimg} alt=""  />
                </picture>
              </div>
              <div className='flex justify-center items-start gap-3'>
                <span className='w-16 h-16 bg-button_color rounded-full flex justify-center items-center text-[31px] text-white_color' ><GrAnnounce />
                </span>
                <div>
                  <CommonHead  HlastContent={'Branding'} SpanDesing={'text-[30px]'}/>
                  <p className='w-[500px] text-[18px] font-Lora font-normal text-font_color leading-[176%] tracking-wider pt-4 pb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                  <Button buttonContent={'Read More'} buttonDesing={'bg-button_color after:bg-black  border-black'}/>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Chose
