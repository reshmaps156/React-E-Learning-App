import React, { useEffect, useState } from 'react'
import Content from './Content'
import { Col, Row } from 'react-bootstrap'
import { getCourseApi } from '../../services/allApi'



function Lecture() {
    const [lectureVideo,setLectureVideo] = useState([])
    const getContent = async()=>{
        const result = await getCourseApi()
        // console.log(result.data);
        setLectureVideo(result.data)
    }
    console.log(lectureVideo);
    useEffect(()=>{
        getContent()
    },[])
  return (
    <>
     <h3 className='mt-5'>Lets start learning......</h3>
     <Row className='w-100'>
       { lectureVideo?.map((data)=>(<Col md={6} sm={12} >
        <Content course={data}/>
        </Col>))
        
        }
        
     </Row>

    </>
  )
}

export default Lecture