import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  const wishListItems = useSelector(state=>state.wishListItems)
  const cartitems = useSelector(state=>state.cartItems)
  return (
    <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{color:'white'}}><i class="fa-solid fa-cart-shopping fa-bounce me-2 text-light"></i>EKART </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
              <Link to={'wishlist'}style={{color:"#fff", textDecoration:'none'}} >Wishlist
              <Badge className='ms-1' bg="secondary">{wishListItems.length}</Badge>
              </Link>
              
            </Nav.Link>
            <Nav.Link>
            <Link to={'Cart'} style={{color:"#fff", textDecoration:'none'}}>Cart
            <Badge className='ms-1' bg="secondary">{cartitems.length}

            </Badge>
            </Link>
            </Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header