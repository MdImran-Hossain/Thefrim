import React from 'react'

const Paragraf = ({ParagrafContent, ParagrafDesing}) => {
  return (
    <>
      <p className={`${ParagrafDesing} font-normal font-Lora text-[18px] text-font_color leading-[176%] max-w-[400px] py-[30px]`}> {ParagrafContent}</p>
    </>
  )
}

export default Paragraf
