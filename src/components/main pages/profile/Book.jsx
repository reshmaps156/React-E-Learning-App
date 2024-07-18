import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Book() {
    return (
        <>
        <h2 className='mt-5 ms-5 text-danger'>Download Your Free E-book Now!</h2>
            <Row className='p-5'>
                <Col xs={12} md={3}>
                    <Card style={{ width: '100%' }} className='shadow'>
                        <Card.Img variant="top"  height={'170px'} src="https://onextrapixel.com/wp-content/uploads/2016/04/reactjs-thumb.jpg" />
                        <Card.Body className='fs-6 d-flex align-items-center justify-content-center flex-column'>
                            <Card.Title className='text-center mb-4'>React js for beginners</Card.Title>
                            <a className='' href='./public/react1.pdf' download="react1.pdf"><Button variant="primary" >Download</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card style={{ width: '100%' }} className='shadow'>
                        <Card.Img variant="top"  height={'170px'} src="https://futurevisioncomputers.com/wp-content/uploads/2024/02/react.js-img-1.png" />
                        <Card.Body className='fs-6 d-flex align-items-center justify-content-center flex-column'>
                            <Card.Title className='text-center mb-4'>React cheetsheet</Card.Title>
                            <a className='' href='./public/reactcheetsheet.pdf' download="reactcheetsheet.pdf"><Button variant="primary" >Download</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card style={{ width: '100%' }} className='shadow'>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uRQv0J1pdaZ3EmYtsNRl130H3zYwg_yjZ6SfnYDPYpG120meelGUsPALFAMquOMjU0E&usqp=CAU" height={'170px'}/>
                        <Card.Body className='fs-6 d-flex align-items-center justify-content-center flex-column'>
                            <Card.Title className='text-center mb-4'>React roadmap</Card.Title>
                            <a className='' href='./public/reactroadmap.pdf' download="reactroadmap.pdf"><Button variant="primary" >Download</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                
                
            </Row>
        </>
    )
}

export default Book