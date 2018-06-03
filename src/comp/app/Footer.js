import React from 'react'
import headerLogo from '../../img/logo.svg';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => (
  <Navbar inverse collapseOnSelect fixedBottom fluid id="navfooter">
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <img src={headerLogo} className="App-logo" alt="logo" />
        </LinkContainer>
      </Navbar.Brand>
      <Nav bsStyle="pills" center>
        <LinkContainer to="/levels">
          <NavItem>
            Levels
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/guides">
        <NavItem>
          Guides
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/map">
        <NavItem>
          Map
        </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Header>
  </Navbar>
)

export default Footer;