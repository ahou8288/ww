import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from '../../img/logo.svg';
import './App.css'

// My components
import LevelIndex from '../levels/LevelIndex'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Guides</h2>
    <ul>
      <li>
        <Link to={`${match.url}/copeton-dam-to-horse-stealers-creek`}>
          Copeton dam to horse stealers creek
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/thredbo-village-to-ngario`}>
          Thredbo village to ngario
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/canoe-creek-to-bob-turners-track`}>
          Canoe creek to bob turners track
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul id="header">
        <li>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Guides</Link></li>
        <li><Link to="/levels">Levels</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/levels" component={LevelIndex}/>
    </div>
  </Router>
)
export default BasicExample