import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './img/logo.svg';
import './App.css'

const Home = () => (
  <div>
    <h2>Home</h2>
    <img src={require('./img/hero-min2.jpg')} />
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    Website by andrew.
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
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Guides</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample