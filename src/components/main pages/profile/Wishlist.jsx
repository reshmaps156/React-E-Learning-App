import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCartShopping} from '@fortawesome/free-solid-svg-icons'
function Wishlist() {
  return (
    <>
    <Row>
        <h4 className='text-danger fs-2 fw-bolder ms-3'> Whishlist</h4>
    <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3 w-50'>
      <Card style={{ width: '100%' }} className='border shadow rounded'>
      <Card.Img variant="top" src="https://html.com/wp-content/uploads/html-hpg-featured-new.png"  className='w-100' style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title>Learn HTML </Card.Title>
        
        <div className='d-flex justify-content-between'>
        <Button variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
        <Button variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
      </Card.Body>
    </Card>
      </Col>
      <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3 w-50'>
      <Card style={{ width: '100%' }} className='border shadow rounded'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwBk0B7ky6f_7p2DeMiftZZn02ad4b-qk2Q&s"  className='w-100' style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title>Data Science for Begginners</Card.Title>
        
        <div className='d-flex justify-content-between'>
        <Button variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
        <Button variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
      </Card.Body>
    </Card>
      </Col>
    </Row>

   {/* <div style={{width:'100%',height:'50vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
  <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="this is empty" />
<button className='btn btn-primary  mt-4'><FontAwesomeIcon icon={faArrowLeft} className='me-2'/>Back to Home</button>
</div>*/}
    </>
  )
}

export default Wishlist