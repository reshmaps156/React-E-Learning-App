import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

function Header() {
  return (
    <Navbar  expand="lg" style={{backgroundColor:'#2D283E'}} className='p-3'>
      <Container>
      <Navbar.Brand href="#home" className='me-5'>
        <div style={{fontWeight:'bold' , color:'rgb(219, 219, 219)',fontSize:'25px'}}>
        <FontAwesomeIcon icon={faBook} className='me-2'/> 
        E-Learning
        </div>    
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav "  />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="me-auto" style={{color:'#802BB1'}}>
            <Nav.Link href="#home" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Home</Nav.Link>
            <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>About</Nav.Link>
            <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Resources</Nav.Link>
            <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Career</Nav.Link>
            <button  className='btn btn-primary px-5 '>Login</button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header