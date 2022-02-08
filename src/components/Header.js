import React, { Component } from 'react'

import { Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <div>
        <Navbar
          color="danger"
          dark
          expand="md"
          light
          >
        <NavbarBrand href="/">
          Cat Tinder
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
        <NavItem>
        <NavLink to="/catindex" style={{ color: '#FFF' }}>
            All Cats
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink to="/catnew" style={{ color: '#FFF' }}>
            Add a Cat
        </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
      </NavbarText>
    </Collapse>
  </Navbar>
</div>

  )
}
}
export default Header;
