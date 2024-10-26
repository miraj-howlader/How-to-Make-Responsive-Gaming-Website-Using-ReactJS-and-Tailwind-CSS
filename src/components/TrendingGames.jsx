import React from 'react'
import { FaFire } from 'react-icons/fa6'
import CharacterPng1 from '../assets/characters/character1.png'
import CharacterPng2 from '../assets/characters/character2.png'
import Game1 from '../assets/game/game1.jpg'
import Game2 from '../assets/game/game2.jpg'
import Game3 from '../assets/game/game3.jpg'
import CoverImg from '../assets/hero/hero_cover.jpg'
import HeroPng from '../assets/hero/hero_png.png'
const GamingData = [
    {
        id:1,
        title:'Title1',
        image:Game1,
        followers:30,
    },
    {
        id:2,
        title:'Title2',
        image:Game2,
        followers:60,
    },
    {
        id:3,
        title:'Title3',
        image:Game3,
        followers:70,
    },
    {
        id:4,
        title:'Title4',
        image:CharacterPng2,
        followers:80,
    },
    {
        id:5,
        title:'Title5',
        image:CoverImg,
        followers:90,
    },
    {
        id:6,
        title:'Title6',
        image:HeroPng,
        followers:100,
    }
]
const TrendingGames = () => {
  return (
    <>
    <section className=' py-10 bg-primary text-white'>
     <div className="container relative">
        <div className=' flex justify-between'>
            <h1 className=' text-3xl font-bold'>Currently Trending Games</h1>
            <button className=' bg-gray-400/50 text-white
             rounded-xl px-4 py-2'>View All</button>
        </div>
        {/* Trending section card section   */}
        <div className=' relative z-10'>
            <div className=' grid grid-cols-1 sm:grid-cols-6
             gap-4 mt-8'>
            {
                GamingData.map((item)=> {
                    return <div key={item.id}>
                        <img src={item.image} alt="" 
                        className=' w-full h-[240px] object-cover
                         rounded-xl'
                        />
                       <div className=' text-center'>
                       <p>{item.title}</p>
                        <p className=' flex justify-center items-center gap-2'>
                            <FaFire/>
                            <span className=' flex gap-2'>{item.followers}
                                <p>followers</p>
                            </span>
                        </p>
                       </div>
                    </div>
                } )
            }
            </div>
        </div>
        {/* Character Png  */}
        <img src={CharacterPng1} alt="" 
        className=' absolute h-[340px] left-[-100px] top-0 z-[1]'/>
     </div>
    </section>
      
    </>
  )
}

export default TrendingGames
