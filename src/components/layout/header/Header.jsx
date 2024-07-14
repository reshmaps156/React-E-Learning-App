import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar  expand="lg" style={{backgroundColor:'#2D283E'}} className='p-3'>
      <Container className='d-flex justify-content-between '>
      <div>
        <Navbar.Brand href="#home" className='me-5'>
          <div style={{fontWeight:'bold' , color:'rgb(219, 219, 219)',fontSize:'25px'}}>
          <FontAwesomeIcon icon={faBook} className='me-2'/> 
          E-Learning
          </div>    
            </Navbar.Brand>
      </div>
       <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav "  />
          <Navbar.Collapse id="basic-navbar-nav" className=''>
            <Nav className="me-auto" style={{color:'#802BB1'}}>
              <Nav.Link href="#home" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Home</Nav.Link>
              <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>About</Nav.Link>
              <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Resources</Nav.Link>
              <Nav.Link href="#link" className='me-5' style={{color:'#802BB1',fontSize:'18px'}}>Career</Nav.Link>
              <Link to={'/register'}><button  className='btn btn-primary px-5 '>Login</button></Link>            
            </Nav>
          </Navbar.Collapse>
       </div>
      </Container>
    </Navbar>
  )
}

export default Header