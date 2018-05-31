import React from 'react'
import { Col, Panel } from 'react-bootstrap'
import './home.css'

const Home = () => (
  <div id="homepage">
    <h1 id="homepageheader">
      Whitewater Stream
      <br/>
      <small>Get info about rivers</small>
    </h1>
    <hr/>
    <Col xs={8} xsOffset={2}>
      <Panel>
        <Panel.Heading>LEVELS</Panel.Heading>
        <Panel.Body>live river heights</Panel.Body>
      </Panel>
      <Panel>
        <Panel.Heading>GUIDES</Panel.Heading>
        <Panel.Body>section descriptions</Panel.Body>
      </Panel>
      <Panel>
        <Panel.Heading>MAP</Panel.Heading>
        <Panel.Body>map of guides & levels</Panel.Body>
      </Panel>
    </Col>
  </div>
)
export default Home