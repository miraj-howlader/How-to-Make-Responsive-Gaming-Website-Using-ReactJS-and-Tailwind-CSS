
import CharacterPng2 from '../assets/characters/character2.png'
import Game1 from '../assets/game/game1.jpg'
import Game2 from '../assets/game/game2.jpg'
import Game3 from '../assets/game/game3.jpg'

const GameCoverimg1 = {
        backgroundImage:`url(${Game1})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:'100%',
        height:'350px'
}
const GameCoverimg2 = {
        backgroundImage:`url(${Game2})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:'100%',
        height:'100%'
}
const GameCoverimg3 = {
        backgroundImage:`url(${Game3})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:'100%',
        height:'100%'
}

const RecommendedArticle = () => {
  return (
    <>
       <section className=' py-10 bg-primary text-white'>
     <div className="container relative">
        {/* header section  */}
        <div className=' flex justify-between'>
            <h1 className=' text-3xl font-bold'>Recommended Articles</h1>
            <button className=' bg-gray-400/50 text-white
             rounded-xl px-4 py-2'>View All</button>
        </div>

        {/* Recommendeds section card  */}
        <div className=' relative z-10'>
            <div className=' grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2
             gap-4 mt-8'>
                <div style={GameCoverimg1} className='sm:row-span-2 sm:col-span-2 
                 h-[300px] rounded-xl'>
                    <div className='absolute bottom-0 left-0 w-full
                    '>
                        <div className=' bg-gradient-to-r from-primary
                         to-transparent flex justify-start items-center
                         gap-4'>
                            <div>
                                <img src={Game2} alt="" 
                                className=' h-[140px] min-w-[110px] object-cover
                                 rounded-xl'
                                />
                            </div>
                            <div>
                                <h1 className=' font-semibold
                                 text-xl max-w-[540px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, a vero laborum error quasi incidunt!</h1>
                            <p className=' text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Spant to  */}
                <div style={GameCoverimg2} className=' relative sm:row-span-1 bg-orange-400 rounded-xl'>
                <div className='absolute bottom-0 left-0 w-full
                    '>
                        <div className=' bg-gradient-to-r from-primary
                         to-transparent flex justify-start items-center
                         gap-4'>
                            <div>
                                <img src={Game2} alt="" 
                                className=' h-[80px] min-w-[60px] object-cover
                                 rounded-xl'
                                />
                            </div>
                            <div>
                                <h1 className=' font-semibold
                                 text-xl max-w-[540px]'>  Inventore, a vero laborum error quasi incidunt!</h1>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={GameCoverimg3} className=' relative sm:row-span-1 bg-blue-500 rounded-xl'>
                <div className='absolute bottom-0 left-0 w-full
                    '>
                        <div className=' bg-gradient-to-r from-primary
                         to-transparent flex justify-start items-center
                         gap-4'>
                            <div>
                                <img src={Game2} alt="" 
                                className=' h-[80px] min-w-[60px] object-cover
                                 rounded-xl'
                                />
                            </div>
                            <div>
                                <h1 className=' font-semibold
                                 text-xl max-w-[540px]'>  Inventore, a vero laborum error quasi incidunt!</h1>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
        <img src={CharacterPng2} alt="" 
         className=' absolute h-[340px] right-[-160px] top-[50px] z-[11]'
        />
        </div>
        </section>
    </>
  )
}

export default RecommendedArticle
