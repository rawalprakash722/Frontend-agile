import { Component } from "react";
import {Link} from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Form, Button, FormControl } from 'react-bootstrap';


class Header extends Component{
 
    render(){
      
      
      {
        if(localStorage.getItem('token') && localStorage.getItem('role')=="admin"){
          var menu=
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/products/all">Restaurants</Nav.Link>
              <Nav.Link href="/insert/product">Review Rsetaurants</Nav.Link>
              <Nav.Link href="/show/users">Users</Nav.Link>
              <Nav.Link href="/show/contact">Conatct us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/users/logout">Logout</Nav.Link>
              <Nav.Link eventKey={2} href="/user/single/:id">{localStorage.getItem('fullname')}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
         
        }
        
  </Navbar.Collapse>
</Navbar>
      }
      }
    
        return(
          <div>
             {menu}
          </div>
         
        )
    }
}

export default Header