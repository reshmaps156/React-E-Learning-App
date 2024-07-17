import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen'
function Dashboard() {
    return (
        <>
            <div>
                <Row>
                    <Col sm={12} md={4} lg={3} className='mt-3  px-5 w-100 '>
                        <div className='d-flex justify-content-center align-items-center row'>
                            <div className='col-md-4'>
                                <Card style={{ width: '100%' }} className='m-2 shadow'>
                                    <Card.Body className='bg-light border border-success rounded'>
                                        <Card.Title className='text-info fw-bolder text-center'>Enrolled Courses</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted fs-2 fw-bolder text-center">19</Card.Subtitle>
                                        <Card.Text className='text-center'>
                                            <FontAwesomeIcon icon={faBookOpen} size='2xl' className='text-warning' />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-4'>
                                <Card style={{ width: '100%' }} className='m-2 shadow text-center'>
                                    <Card.Body className='bg-light border border-danger rounded'>
                                        <Card.Title className='text-danger fw-bolder '>Active courses </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted fs-2 fw-bolder">0</Card.Subtitle>
                                        <Card.Text>
                                            <FontAwesomeIcon icon={faLaptop} size='2xl' className='text-warning' />
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-4'>
                                <Card style={{ width: '100%' }} className='m-2 shadow text-center'>
                                    <Card.Body className='bg-light border border-danger rounded'>
                                        <Card.Title className='text-success fw-bolder '>Completed courses</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted fs-2 fw-bolder">27</Card.Subtitle>
                                        <Card.Text>
                                            <FontAwesomeIcon icon={faCircleCheck} size='2xl' className='text-warning' />
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Dashboard