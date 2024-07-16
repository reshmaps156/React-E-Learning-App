import React from 'react'
import { Col, Row } from 'react-bootstrap'
function Myprofile() {
  return (
<>
    <h1 className="text-danger mt-3 ms-3">Profile Details</h1>
    <Row>
    <Col sm={12} md={4} lg={3} className='mt-3  px-5 w-100 '>

    <label htmlFor="" className='w-25 py-3'>Registration Date  </label><label htmlFor="">Thu 25 Nov 2023,02:23  </label><br />
    <label htmlFor="" className='w-25 py-3'>Name  </label><label htmlFor="">James Cameron  </label><br />
    <label htmlFor="" className='w-25 py-3'>Username  </label><label htmlFor="">James  </label><br />
    <label htmlFor="" className='w-25 py-3'>Email </label><label htmlFor="">james@gmail.com </label><br />
    <label htmlFor="" className='w-25 py-3'>Phone Number  </label><label htmlFor="">+91 8587855368  </label><br />
    </Col>
    
    

    </Row>
    </>
  )
}

export default Myprofile