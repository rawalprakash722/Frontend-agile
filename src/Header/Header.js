import { Component } from "react";
import {Link} from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Form, Button, FormControl } from 'react-bootstrap';


class Header extends Component{
 
    render(){
      


        import { Component } from "react";
import {Link} from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import {useDispatch,useSelector } from 'react-redux'

import { FaWeightHanging,FaShoppingCart,FaBuysellads,FaBiking,FaStudiovinari, FaCartPlus,FaRss,FaSignInAlt,FaBlog,FaRegLightbulb,FaRegQuestionCircle,FaUserSecret,FaSuitcaseRolling,FaInfo,FaRegMoon,FaUserGraduate,FaTty, FaRibbon,FaPlus,FaShareSquare,  FaPlusCircle, FaWindowRestore, FaUsers, FaMedapps, FaTelegramPlane,FaUserCog } from 'react-icons/fa'
import {FcContacts,FcManager,FcPlus,FcButtingIn,FcTwoSmartphones,FcSmartphoneTablet,FcCurrencyExchange,FcViewDetails,FcOnlineSupport,FcAddDatabase,FcDonate,FcBullish,FcCallback,FcAbout,FcComboChart } from 'react-icons/fc'


// import { Nav, NavDropdown, Navbar, Form, Button, FormControl } from 'react-bootstrap';
// import { FaWeightHanging, FaCartPlus,FaRss,FaSignInAlt,FaBlog,FaRegLightbulb,FaRegQuestionCircle,FaUserSecret,FaSuitcaseRolling,FaInfo,FaRegMoon,FaUserGraduate,FaTty, FaRibbon,FaPlus,FaShareSquare,  FaPlusCircle, FaWindowRestore, FaUsers, FaMedapps, FaTelegramPlane,FaUserCog } from 'react-icons/fa'






class Header extends Component{


  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
 
    localStorage.removeItem('firstname')
    window.location.href = '/'
  }


 
    render(){
      if(localStorage.getItem('token') && localStorage.getItem('user_role')=="Admin"){



        var menu=


        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         
        </Nav>
        <Form inline>
            <Nav.Link href="/products/all"><FaPlus/> Products</Nav.Link>
            <Nav.Link href="/insert/product"><FcAddDatabase/>Add Products</Nav.Link>
            {/* <Nav.Link href="/addblog"><FaPlus/> Add Blog</Nav.Link> */}
            <Nav.Link href="/show/users"><FcManager/>Users</Nav.Link>
            <Nav.Link href="/show/contact"><FaWindowRestore/> Contacted users</Nav.Link>
            {/* <Nav.Link href="/viewblog"><FaWindowRestore/> View blog</Nav.Link> */}
       
            <Nav.Link eventKey={2} href="/user/single/:id">{localStorage.getItem('firstname')}<FaUserSecret/>
            </Nav.Link>
            {/* <Nav.Link href="/logout"><FaShareSquare/>Logout</Nav.Link> */}
            <Button Link to="/logout" className="btn btn-danger" onClick={this.logout}><FaShareSquare/> Log out</Button>
        
  
      </Form>
      </Navbar.Collapse>
       
      }
      else if(localStorage.getItem('token') && localStorage.getItem('user_role')=="User"){
        
        
        var menu=
  
        <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto">

        </Nav>
        <Form inline>


            <Nav.Link href="/show/product"><FaCartPlus/>Products</Nav.Link>
            <Nav.Link href="/show/product"><FaCartPlus/>Cart</Nav.Link>
            <Nav.Link href="/insert/contact"><FaTty/> Contact us</Nav.Link>
        
            
   
            {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
            <Nav.Link eventKey={2} href="/user/single/:id">{localStorage.getItem('firstname')}<FaUserSecret/>
            </Nav.Link>
            <Button Link to="/logout" className="btn btn-danger" onClick={this.logout}><FaShareSquare/> Log out</Button>
           
  

         
            </Form>
       </Navbar.Collapse>
      }
      else{
      
   

        var menu=
      
<Navbar.Collapse id="responsive-navbar-nav">
   
   <Nav className="mr-auto">

{/* 
      <Nav.Link href="/services">Our Services <FcSmartphoneTablet/></Nav.Link> */}
 <Nav.Link href="/blog"><FaBlog/> Blog</Nav.Link>
    
</Nav>
<NavDropdown title="More" id="basic-nav-dropdown" > 
         <NavDropdown.Item href="/services"><FaRegLightbulb/>Our Offers</NavDropdown.Item>
         <NavDropdown.Item href="/background"><FaRss /> Our Background</NavDropdown.Item>


       </NavDropdown>
    
    <Form inline>
  
    <Button href="/user/login" className="btn btn-success"><FaSignInAlt/> Sign in</Button>
    {/* <Button href="/user/login"><FaSignInAlt/> Sign in</Button> */}
  
  </Form>


  </Navbar.Collapse>

      }
    
        return(
      
          <Navbar collapseOnSelect expand="lg" bg="white" className="shadow">
        
 
          <Navbar.Brand href="/dashboard">
          <img src="/cam.png" className="d-inline-block align-top" alt="logo" style={{height:'50px', width:'50px'}} />
   
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         
    
   
            {menu}
           
           
         
        </Navbar>
         


        )
    }
}

export default Header
      
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
        else if(localStorage.getItem('token') && localStorage.getItem('role')=="customer"){
          var menu=
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/products/all">Restaurants</Nav.Link>
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
      
   
        else{
        var menu=
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Food</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/restaurant/register">RestaurantReg</Nav.Link>
      <NavDropdown title="Login/Signup" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/users/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/users/signup">Register</NavDropdown.Item>

        
       
      </NavDropdown>
      <Nav.Link href="/insert/contact">Conatct us</Nav.Link>
    </Nav>
    
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