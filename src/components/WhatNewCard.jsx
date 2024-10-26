import React from 'react'
import Game2 from '../assets/game/game2.jpg'
import Game3 from '../assets/game/game3.jpg'
import { FaWindows } from 'react-icons/fa6'

const WhatNewCard = ({image,title,desc,icon}) => {
  return (
    <>
       <div className=' sm:col-span-3'>
             <div className=' grid items-center grid-cols-1 sm:grid-cols-3 gap-4'>
                 <div>
                    <img src={image} alt=""
                    className=' w-full h-[200px]
                     object-cover rounded-xl'
                     />
                 </div>
                 <div className=' sm:col-span-2'>
                    <div className=' inline-flex py-1 px-2 items-center gap-2
                     bg-gray-400/20 text-white rounded-md mb-3'>
                    {icon}
                    PC
                    </div>
                    <h1>{title}</h1>
                   <p className=' text-sm text-white/70'>{desc}</p>
                 </div>
             </div>
            </div>
    </>
  )
}

export default WhatNewCard
