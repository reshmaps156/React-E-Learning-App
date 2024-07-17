import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import { getVideoApi } from '../../services/allApi';
import OtherCard from './OtherCard'



function Other({addStatus}) {
    const [courseDetails, setCourseDetails] = useState([])
    const [deleteVideoStatus , setDeleteVideoStatus] = useState([])

    const getcoursevideo = async () => {
        const result = await getVideoApi()
        setCourseDetails(result.data)
    }

    useEffect(() => {
        getcoursevideo()
    },[addStatus,deleteVideoStatus])

    console.log(courseDetails);
    return (
        <>
            <h2 className='mt-5 ms-5 text-danger'>Newly added course</h2>
            <Row className='w-100 p-5 ms-4 ms-md-0'>
                {courseDetails?.length > 0 ?
                    courseDetails.map((item) => (
                        <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
                            <OtherCard displayCourse = {item} setDeleteVideoStatus={setDeleteVideoStatus} />
                        </Col>
                    ))

                    :
                    <p className='text-warning fs-5 mt-4'>No video uploaded yet...</p>}
            </Row>
        </>
    )
}

export default Other