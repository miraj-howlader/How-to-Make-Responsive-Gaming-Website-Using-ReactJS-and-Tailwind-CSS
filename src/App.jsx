import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingGames from './components/TrendingGames'
import RecommendedArticle from './components/RecommendedArticle'
import WhatNew from './components/WhatNew'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TrendingGames/>
      <RecommendedArticle/>
      <WhatNew/>
    </div>
  )
}

export default App
