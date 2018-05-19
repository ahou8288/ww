import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import headerLogo from '../../img/logo.svg';
import './App.css'

// My components
import LevelIndex from '../levels/LevelIndex'
import GuideIndex from '../guides/GuideIndex'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul id="header">
        <li>
          <Link to="/">
            <img src={headerLogo} className="App-logo" alt="logo" />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/guides">Guides</Link></li>
        <li><Link to="/levels">Levels</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/guides" component={GuideIndex}/>
      <Route path="/levels" component={LevelIndex}/>
    </div>
  </Router>
)
export default BasicExample