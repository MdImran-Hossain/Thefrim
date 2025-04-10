import React from 'react'

const Button=({buttonContent, buttonDesing})=>{
  return (
    <button className={`${buttonDesing} btn px-5 py-2 rounded  text-[18px] font-bold font-Nunito text-white_color border-2 border-button_color`}>
      {buttonContent}
    </button>
  )
}

export default Button
