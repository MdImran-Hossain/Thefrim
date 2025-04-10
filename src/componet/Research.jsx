import React from 'react'
import CommonHead from './commonCommponet/CommonHead'
import Paragraf from './commonCommponet/Paragraf'
import Button from './commonCommponet/Button'
import Pic from '../assets/reseach.png'
const Research = () => {
  return (
    <>
      <section className='p-[100px] bg-white_color '>
        <div className="container">
            <div className='flex justify-center items-center flex-col'>
                <CommonHead  headingContent={"Our Research & Case "} HlastContent={"Studies"}/>
                <Paragraf ParagrafContent={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"} ParagrafDesing={"max-w-[864px] text-center"}/>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-[30px] font-bold font-Nunito text-font_color'>Lorem Ipsum is simply</h3>
                    <Paragraf ParagrafContent={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."} ParagrafDesing={"max-w-[500px] pt-[13px]"}/>
                    <Button buttonContent={"Read More"}/>
                </div>
                <div>
                    <div className=' relative after:absolute after:contents-[""] after:w-[149px] after:h-[149px] after:rounded-full after:bg-button_color after:top-[80%] after:right-[82%] z-10 after:-z-10 after:opacity-30'>
                        <picture>
                            <img src={Pic} alt={Pic} className='border-solid border-[8px] border-white_color shadow-md rounded-[25px]' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Research
