import React from 'react'
import { Col, Row } from 'react-bootstrap'
function Myprofile({username,email}) {
  return (
<>
    <h1 className="text-danger mt-3 ms-3">Profile Details</h1>
    <Row>
    <Col sm={12} md={4} lg={3} className='mt-3  px-5 w-100 '>

    
    <label htmlFor="" className='w-25 py-3 '>Name  </label><label htmlFor="" style={{textTransform:'capitalize'}}>{username} </label><br />
    <label htmlFor="" className='w-25 py-3'>Username  </label><label htmlFor="">{username} </label><br />
    <label htmlFor="" className='w-25 py-3'>Email </label><label htmlFor="">{email}</label><br />
   
    </Col>
    
    

    </Row>
    </>
  )
}

export default Myprofile