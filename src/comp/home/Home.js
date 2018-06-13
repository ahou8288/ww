import React from 'react'
import { Col, Panel, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import './home.css'

const Home = () => (
  <div id="homepage">
    <h1 id="homepageheader">
      Whitewater Stream
      <br/>
      <small>Get info about rivers</small>
    </h1>
    <hr/>
    <div>
      <LinkContainer to="/levels">
        <Button bsStyle="primary" bsSize="large" block>
          LEVELS
          <p>live river heights</p>
        </Button>
      </LinkContainer>
      <LinkContainer to="/guides">
        <Button bsStyle="primary" bsSize="large" block>
          GUIDES
          <p>section descriptions</p>
        </Button>
      </LinkContainer>
      <LinkContainer to="/map">
        <Button bsStyle="primary" bsSize="large" block>
          MAP
          <p>map of guides & levels</p>
        </Button>
      </LinkContainer>
    </div>
  </div>
)
export default Home