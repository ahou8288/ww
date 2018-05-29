import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// My components
import LevelIndex from '../levels/LevelIndex'
import GuideIndex from '../guides/GuideIndex'
import OverviewMap from '../map/OverviewMap'
import Home from '../home/Home'
import Footer from './Footer'

const BasicExample = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/levels" component={LevelIndex}/>
      <Route path="/guides" component={GuideIndex}/>
      <Route path="/map" component={OverviewMap}/>
      <Footer/>
    </div>
  </BrowserRouter>
)
export default BasicExample