import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
  
    <Navbar expand="lg" style={{backgroundColor:'#2D283E'}} className='p-3'>
      <Container>
      <Navbar.Brand href="#home" className='me-5'>
        <div style={{fontWeight:'bold' , color:'rgba(255, 255, 255, 0.625)',fontSize:'25px'}}>
        <FontAwesomeIcon icon={faBook} className='me-2'/> 
        E-Learning
        </div>    
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'100vh',color:'#802BB1'}}>
            <Nav.Link href="#home" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Home</Nav.Link>
            <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>About</Nav.Link>
            <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Resources</Nav.Link>
            <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Career</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  )
}

export default Header