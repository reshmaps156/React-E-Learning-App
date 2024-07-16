import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Other() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <h2 className='mt-5 ms-5 text-danger'>Newly added course</h2>
            <Row className='w-100 p-5 ms-4 ms-md-0'>
                <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
                    <Card style={{ width: '100%' }} className='mt-4'>
                        <Card.Img onClick={handleShow} variant="top" src="https://codeop.tech/wp-content/uploads/2021/11/artturi-jalli-g5_rxRjvKmg-unsplash-scaled.jpg" width={'100%'} height={'200px'} />
                        <Card.Body className='d-flex'>
                            <Card.Text>
                                Course title
                            </Card.Text>
                            <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} style={{ color: "#ff0000" }} /></button>
                        </Card.Body>
                        <Card.Body className='d-flex'>
                            <Card.Text>
                                Course title
                            </Card.Text>
                            <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} style={{ color: "#ff0000" }} /></button>
                        </Card.Body>
                        <Card.Body className='d-flex'>
                            <Card.Text>
                                Course title
                            </Card.Text>
                            <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} style={{ color: "#ff0000" }} /></button>
                        </Card.Body>
                        <Card.Body className='d-flex'>
                            <Card.Text>
                                Course title
                            </Card.Text>
                            <button className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} style={{ color: "#ff0000" }} /></button>
                        </Card.Body>
                    </Card>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Course Title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe width="100%" height="480" src="https://www.youtube.com/embed/XKHEtdqhLK8?autoplay=1" title="Python Full Course for free 🐍" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </>
    )
}

export default Other