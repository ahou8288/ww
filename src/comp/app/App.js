import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import headerLogo from '../../img/logo.svg';
import './App.css'
import 'semantic-ui-css/semantic.min.css';

import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

// My components
import LevelIndex from '../levels/LevelIndex'
import GuideIndex from '../guides/GuideIndex'
import OverviewMap from '../map/OverviewMap'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class BasicExample extends Component{
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            Content
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>


        <Router>
          <div>
            <ul id="header">
              <li>
                <Link to="/">
                  <img src={headerLogo} className="App-logo" alt="logo" />
                </Link>
              </li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/levels">Levels</Link></li>
              <li><Link to="/guides">Guides</Link></li>
              <li><Link to="/map">Map</Link></li>
            </ul>
      
            <hr/>
      
            <Route exact path="/" component={Home}/>
            <Route path="/levels" component={LevelIndex}/>
            <Route path="/guides" component={GuideIndex}/>
            <Route path="/map" component={OverviewMap}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default BasicExample