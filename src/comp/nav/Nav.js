import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import './nav.css';
import { Menu, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import headerLogo from '../../img/logo.svg';

// My components
import LevelIndex from '../levels/LevelIndex'
import GuideIndex from '../guides/GuideIndex'
import OverviewMap from '../map/OverviewMap'

const Nav = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={LevelIndex}/>
        <Route path="/levels" component={LevelIndex}/>
        <Route path="/guides" component={GuideIndex}/>
        <Route path="/map" component={OverviewMap}/>
    
        <Menu id="bottomnav" inverted>
          <Menu.Item>
            <img src={headerLogo} className="App-logo" alt="logo" />
          </Menu.Item>

          <Link to="/levels">
            <Menu.Item>
            <Icon name='chart bar' size="large"/>
              Levels
            </Menu.Item>
          </Link>

          <Link to="/map">
            <Menu.Item>
              <Icon name='info circle' size="large"/>
              Guides
            </Menu.Item>
          </Link>
          <Link to="/guides">
            <Menu.Item>
              <Icon name='map marker alternate' size="large"/>
              Map
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    </Router>
  </div>
)

export default Nav