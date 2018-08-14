import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './CustomNavbar.css';
import * as action  from '../../../store/actions/index';
import {connect} from 'react-redux';


class CustomNavbar extends Component {
  render() {
    let navBar = (<Navbar inverse collapseOnSelect >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">{this.props.navbarBand}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Route Details
        </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            About Us
          </NavItem>
          <NavItem eventKey={2} href="/login">
            Login
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);

    if (this.props.login) {
      navBar = (
        <Navbar inverse collapseOnSelect >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">{this.props.navbarBand}</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Route Details
        </NavItem>

              <NavItem eventKey={2} href="#">
                Manger Menu
        </NavItem>
              <NavDropdown eventKey={3} title="Admin Menu" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                About Us
  </NavItem>
              <NavItem eventKey={2} href="/logout">
                LogOut
  </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }

    return (
      <div>
      { navBar }
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    login: state.auth.login,
    token: state.auth.authToken
  }
}


export default connect(mapStateToProps)(CustomNavbar);