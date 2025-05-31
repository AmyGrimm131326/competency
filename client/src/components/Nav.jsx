import { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

// this is my navbar component.
class NavBar extends Component {
  // this is my signOut for me being in my admin page.
  handleSignOut=()=>{
    localStorage.clear()
    window.location = "/"
  }
  render(props) {
    return (
      <>
        <Navbar bg="danger" expand="lg">
          <Navbar.Brand href="/" className="text-success fontOne text-center" id="navTitle" ><img className="img-fluid mr-3" src={logo} /><br />
            <h3>
              Pizza By the Slice
              </h3>
            <h3 className="mt-1">&amp;</h3>
            <h3>ShakeUps On ICE</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-success"/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.Link href="/" className="text-white fontTwo navHover">Home</Nav.Link>
              <Nav.Link href="/location" className="text-white fontTwo navHover">Location</Nav.Link>
              {this.props.admin?<Nav.Link href="/adminInfo" className="text-white fontTwo navHover">View Orders</Nav.Link>:null}
              {this.props.admin?<Nav.Link href="#" onClick={this.handleSignOut}className="text-white fontTwo navHover">Sign Out</Nav.Link>:null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default NavBar;