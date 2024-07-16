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
                      <h2 className='text-primary fw-bolder fs-3'>Your Dashboard Here</h2>
                      <div className='d-flex justify-content-center align-items-center'>

                          <Card style={{ width: '100%' }} className='m-2 shadow'>
                              <Card.Body className='bg-light border border-success rounded'>
                                  <Card.Title className='text-info fw-bolder fs-3'>Enrolled Courses</Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted fs-1 fw-bolder">19</Card.Subtitle>
                                  <Card.Text>
                                      <FontAwesomeIcon icon={faBookOpen} size='3x' className='text-warning' />
                                  </Card.Text>
                              </Card.Body>
                          </Card>

                          <Card style={{ width: '100%' }} className='m-2 shadow'>
                              <Card.Body className='bg-light border border-danger rounded'>
                                  <Card.Title className='text-danger fw-bolder fs-3'>Active courses </Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted fs-1 fw-bolder">0</Card.Subtitle>
                                  <Card.Text>
                                      <FontAwesomeIcon icon={faLaptop} size='3x' className='text-warning' />
                                  </Card.Text>

                              </Card.Body>
                          </Card>

                          <Card style={{ width: '100%' }} className='m-2 shadow'>
                              <Card.Body className='bg-light border border-danger rounded'>
                                  <Card.Title className='text-success fw-bolder fs-3'>Completed courses</Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted fs-1 fw-bolder">27</Card.Subtitle>
                                  <Card.Text>
                                      <FontAwesomeIcon icon={faCircleCheck} size='3x' className='text-warning' />
                                  </Card.Text>

                              </Card.Body>
                          </Card>
                      </div>
                  </Col>
              </Row>
          </div>

    </>
  )
}

export default Dashboard