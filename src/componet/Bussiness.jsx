import React from 'react'
import Bus from '../assets/bussiness.png'
import CommonHead from './commonCommponet/CommonHead'
import Paragraf from './commonCommponet/Paragraf'
import Button from './commonCommponet/Button'
const Bussiness = () => {
  return (
    <>
     <section className='p-[100px] bg-white_color'>
        <div className="container">
            <div className='flex justify-between items-center '>
                <div className='max-w-[650px]'>
                    <picture>
                        <img src={Bus} alt={Bus} />
                    </picture>
                </div>
                <div className='pl-[160px]'>
                    <CommonHead  headingContent={'Perfect Solution for Your '} HlastContent={'Bussiness'}/>
                    <Paragraf  ParagrafContent={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"} ParagrafDesing={"max-w-[500px]"}/>
                    <Button buttonContent={"Read More"}/>
                </div>
            </div>
        </div>
    </section> 
    </>
  )
}

export default Bussiness
