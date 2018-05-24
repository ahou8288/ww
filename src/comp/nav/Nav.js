import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import './nav.css';
import { Sidebar, Segment, Button, Menu, Icon, Item } from 'semantic-ui-react'

// My components
import App from '../app/App'
import Sidelinks from '../sidelinks/Sidelinks'

const Nav = () => (
  <div class="nav">
    <App/>
    <Menu attached='bottom' tabular>
      <Menu.Item>
      <Icon name='camera' />
        Levels
      </Menu.Item>

      <Menu.Item>
      <Icon name='camera' />
        Guides
      </Menu.Item>

      <Menu.Item>
      <Icon name='camera' />
        Map
      </Menu.Item>
    </Menu>
  </div>
)

export default Nav