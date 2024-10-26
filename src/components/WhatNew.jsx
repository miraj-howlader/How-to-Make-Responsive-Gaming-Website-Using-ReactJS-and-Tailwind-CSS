import React from 'react'
import { FaHeartbeat } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaTwitter, FaWindows, FaYoutube } from 'react-icons/fa6'
import Game1 from '../assets/game/game1.jpg'
import Game2 from '../assets/game/game2.jpg'
import Game3 from '../assets/game/game3.jpg'
import WhatNewCard from './WhatNewCard'

const WhatsData = [
    {
        image:Game1,
        title:'Game Title Lorem ipsum dolor sit amet consectetur adipisicing elit',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium rerum libero optio officia itaque.',
        icon:<FaWindows/>

    },
    {
        image:Game2,
        title:'Game Title Lorem ipsum dolor sit amet consectetur adipisicing elit',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium rerum libero optio officia itaque.',
        icon:<FaWindows/>

    },
    {
        image:Game3,
        title:'Game Title Lorem ipsum dolor sit amet consectetur adipisicing elit',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium rerum libero optio officia itaque.',
        icon:<FaWindows/>

    }
]

const WhatNew = () => {
  return (
    <>
    <div className=' py-10 bg-primary text-white'>
        <div className=' container'>
            {/* Header section  */}
        <div className=' flex justify-between'>
            <h1 className=' text-3xl font-bold'>What's new</h1>
           <div className=' flex gap-3'>
            <div className=' flex gap-3 items-center cursor-pointer'>
                <FaFacebook/>
                <FaInstagram/>
                <FaYoutube/>
                <FaTwitter/>
            </div>
           <button className=' bg-gray-400/50 text-white
             rounded-xl px-4 py-2'>Explore</button>
           </div>
        </div>

        {/* what's New Card Section  */}
        <div className='  grid grid-cols-2 sm:grid-cols-4  gap-6
         my-8'>
            {
                WhatsData.map((item)=>{
                    return <div key={item.title}>
                        <WhatNewCard
                        image={item.image}
                        title={item.title}
                        desc={item.desc}
                        icon={item.icon}
                        />
                    </div>
                })
            }
            {/* <div className=' sm:col-span-3'>
             <div className=' grid items-center grid-cols-1 sm:grid-cols-3 gap-4'>
                 <div>
                    <img src={Game1} alt=""
                    className=' w-full h-[200px]
                     object-cover rounded-xl'
                     />
                 </div>
                 <div className=' sm:col-span-2'>
                    <div className=' inline-flex py-1 px-2 items-center gap-2
                     bg-gray-400/20 text-white rounded-md mb-3'>
                    <FaWindows/>
                    PC
                    </div>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, autem.</h1>
                   <p className=' text-sm text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia recusandae optio odit. Ratione, neque?</p>
                 </div>
             </div>
            </div> */}

            
            
            
            {/* subscribe and newsletter  */}
            <div className=' col-span-1 col-start-4 row-start-1'>
               <div className=' space-y-2 bg-gray-400/30 rounded-xl p-4'>
                <FaHeartbeat className=' bg-orange-400/80 p-2
                 rounded-lg inline-block h-[40px] w-[40px]'/>
                <h1 className=' text-2xl font-semibold'>Subscribe Our Newsletter</h1>
                  <p className=' text-sm text-white/80 line-clamp-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, nemo praesentium!</p>
                 <input type="email"
                 name='email'
                 id='email'
                 placeholder='Enter your Email'
                 className=' bg-gray-400/20 px-4 py-2 rounded-lg
                  w-full'
                  />
                  <button className=' bg-gradient-to-r from-blue-400
                   to-blue-600 text-white rounded-xl px-4 py-2'>Subscribe</button>
               </div>
            </div>

        </div>
        </div>
    </div>
      
    </>
  )
}

export default WhatNew
