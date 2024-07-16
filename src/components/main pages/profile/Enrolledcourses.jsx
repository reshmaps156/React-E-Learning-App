import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Enrolledcourses() {
    const [selectedStarCount,setselectedStarCount] = useState(0)
  const [selectedHovercount, setselectedHovercount] = useState(0)

  const [selectedStarCount1,setselectedStarCount1] = useState(0)
  const [selectedHovercount1, setselectedHovercount1] = useState(0)

  const [selectedStarCount2,setselectedStarCount2] = useState(0)
  const [selectedHovercount2, setselectedHovercount2] = useState(0)

  return (

    <>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <Nav.Item className='p-3 text-warning fs-4 fw-bolder'> Enrolled courses  </Nav.Item>
        {/*<Nav.Link href="/home">Enrolled courses</Nav.Link>*/}
        <Nav.Item>
                  <div className='ms-3 d-flex'>
                      {/*<img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt=" no image"  width={'300px'}/>*/}
                      
                      <iframe width="300" height="200" src="https://www.youtube.com/embed/cHwgvngA5FA" title=" HTML CSS Full Course 2023 | Learn HTML &amp; CSS in 10 Hours | HTML CSS Tutorial | Simplilearn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <div className='ms-3 p-3'>
                          <div className='star fs-2 '>
                              {[...Array(5)].map((_, index) => {
                                  return <span key={index}
                                      className={`${index + 1 <= selectedStarCount ? 'selected' : ''} ${index + 1 <= selectedHovercount ? 'selected' : ''}`}
                                      onMouseOver={() => {
                                          setselectedHovercount(index + 1)
                                      }}
                                      onMouseOut={() => {
                                          setselectedHovercount(0)
                                      }}
                                      onClick={() => {
                                          setselectedStarCount(index + 1)
                                      }}

                                  >&#9733;</span>
                              })}

                          </div>
                          Ratings : {selectedStarCount}/5<br />
                          Description : HTML Full Course details
                          <ProgressBar now={30}  variant="info" label={`30%`}/>

                      </div>
                  </div>
                  </Nav.Item>       
                  <Nav.Item>
                  <div className='ms-3 d-flex m-3'>
                      {/*<img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt=" no image"  width={'300px'}/>*/}
                      <iframe width="300" height="200" src="https://www.youtube.com/embed/y9F4p8saOvA" title="🔥 Data Science Full Course for Beginners | Learn it 🔴LIVE | Data Science in 12 Hours | Simplilearn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     
                      <div className='ms-3 p-3'>
                          <div className='star fs-2 '>
                              {[...Array(5)].map((_, index) => {
                                  return <span key={index}
                                      className={`${index + 1 <= selectedStarCount1 ? 'selected' : ''} ${index + 1 <= selectedHovercount1 ? 'selected' : ''}`}
                                      onMouseOver={() => {
                                          setselectedHovercount1(index + 1)
                                      }}
                                      onMouseOut={() => {
                                          setselectedHovercount1(0)
                                      }}
                                      onClick={() => {
                                          setselectedStarCount1(index + 1)
                                      }}

                                  >&#9733;</span>
                              })}

                          </div>
                          Ratings : {selectedStarCount1}/5 <br />
                          Description : DataScience Full Course details.
                          <ProgressBar now={50} variant="info" label={`50%`}/>
                      </div>
                  </div>
                  </Nav.Item>       
                  <Nav.Item>
                  <div className='ms-3 d-flex m-3'>
                      {/*<img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt=" no image"  width={'300px'}/>*/}
                      <iframe width="300" height="200" src="https://www.youtube.com/embed/EGRAI4arcFU?list=PLEiEAq2VkUUInYVjsnQvhzvPkQg4GQ1QF" title="Lesson 1 |  Introduction to CSS | Simplilearn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      
                     
                      <div className='ms-3 p-3'>
                          <div className='star fs-2 '>
                              {[...Array(5)].map((_, index) => {
                                  return <span key={index}
                                      className={`${index + 1 <= selectedStarCount2 ? 'selected' : ''} ${index + 1 <= selectedHovercount2 ? 'selected' : ''}`}
                                      onMouseOver={() => {
                                          setselectedHovercount2(index + 1)
                                      }}
                                      onMouseOut={() => {
                                          setselectedHovercount2(0)
                                      }}
                                      onClick={() => {
                                          setselectedStarCount2(index + 1)
                                      }}

                                  >&#9733;</span>
                              })}

                          </div>
                          Ratings : {selectedStarCount2}/5 <br />
                          Description : CSS Full Course details.
                          <ProgressBar now={80} variant="info" label={`80%`}/>
                      </div>
                  </div>
                  </Nav.Item>       
      </Nav.Item>
    </Nav>
    </>
  )
}

export default Enrolledcourses