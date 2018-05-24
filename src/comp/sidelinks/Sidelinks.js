import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Menu, Icon, Item } from 'semantic-ui-react'

const Sidelinks = () => (
  <div>
    <Menu.Item name='home'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item name='gamepad'>
      <Icon name='gamepad' />
      Levels
    </Menu.Item>
    <Menu.Item name='camera'>
      <Icon name='camera' />
      Guides
    </Menu.Item>
  </div>
)

export default Sidelinks