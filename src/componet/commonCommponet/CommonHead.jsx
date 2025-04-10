import React from 'react'

const CommonHead = ({headingContent,HlastContent,Hdesing, SpanDesing} ) => {
  return (

      <h2 className={` text-[44px]  font-bold font-Nunito text-font_color ${Hdesing}`}>{headingContent}<span className={`${SpanDesing} relative z-10 after:absolute after:left-0 after:bottom-4 after:w-full after:h-[3px] after:bg-button_color after:contents-[""] after:-z-10`}>{HlastContent}</span></h2>
   
  )
}

export default CommonHead
