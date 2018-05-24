import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Sidebar, Segment, Button, Menu } from 'semantic-ui-react'

// My components
import App from '../app/App'

class Nav extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div class="nav">
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            Content
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <App />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
export default Nav