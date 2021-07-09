import { Component } from "react";
import {Link} from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Form, Button, FormControl } from 'react-bootstrap';


class Header extends Component{
 
    render(){
      
      
      {
      
   

        var menu=
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Food</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/show/product">Products</Nav.Link>
      <NavDropdown title="Login/Signup" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/users/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/users/signup">Register</NavDropdown.Item>

        
       
      </NavDropdown>
      <Nav.Link href="/insert/contact">Conatct us</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      }
    
        return(
          <div>
             {menu}
          </div>
         
        )
    }
}

export default Header