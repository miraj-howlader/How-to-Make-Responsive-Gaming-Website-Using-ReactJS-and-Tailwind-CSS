import React from 'react'
import CoverImg from '../assets/hero/hero_cover.jpg'
import HeroPng from '../assets/hero/hero_png.png'
import { FaArrowRight } from "react-icons/fa6";

const bgImage = {
    backgroundImage: `url(${CoverImg})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:'100%',
    width:'100%'
}
const Hero = () => {
  return (
   <>
    <div style={bgImage} className=' min-h-[550px] w-full overflow-hidden'>
    <div className=' bg-primary/80 flex items-center
     min-h-[550px]'>
    <div className=' container'>
       <div className=' grid grid-cols-1 sm:grid-cols-2
        gap-8 items-center'>
       <div>
            <p className=' text-lg text-blue-800
             font-semibold'>Discover Games You will Love</p>
           <h1 className=' text-5xl font-bold text-white'>Read About Games That You Enjoy</h1>
           <button className=' mt-8 bg-gradient-to-r from-blue-400
            to-blue-800  flex gap-2 px-6 py-3 rounded-2xl
             font-semibold text-white hover:scale-105  items-center'>
            Start Exploring
           <div className=' flex'>
           <FaArrowRight className=' text-xl'/>
           </div>
           </button>
        </div>
        <div>
            <img src={HeroPng} alt="" />
        </div>
       </div>

      </div>
    </div>
      </div>
   </>
  )
}

export default Hero
