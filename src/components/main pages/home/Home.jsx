import {  faAnglesDown, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './home.css'

function Home() {
  return (
    <div style={{backgroundColor:'rgb(219, 219, 218)'}}>
      <Row className='mb-5' >
        <Col sm={12} md={6} style={{marginTop:'120px'}}>
        <div className='p-5 justify-content-center align-items-center '>
        <h1 style={{fontWeight:'bold', fontSize:'60px'}}>Best Online Platform For <span style={{color:'#802BB1'}}>Learning</span></h1>
        <p className='text-dark mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam assumenda maxime excepturi laboriosam commodi fugit eveniet mollitia magni quia tempora ab similique dolore voluptatibus! Animi reiciendis saepe totam cupiditate?</p>
        <div className='mt-5'style={{marginLeft:'100px'}} >
        <button className='btn btn-danger mt-3 rounded me-5 px-4 py-3'>Join for Free</button>
        <button className='btn btn-danger mt-3 rounded px-4 py-3'><FontAwesomeIcon icon={faPlay}  className='me-2'/> Learn how</button>
        </div>
        </div>
        </Col>
        <Col sm={12} md={6} style={{marginTop:'120px'}}>
        <div className='d-flex justify-content-center'>
          <img className='w-75 shadow mt-5' style={{borderRadius:'20%'}} src="https://elearningindustry.com/wp-content/uploads/2020/10/advantages-and-disadvantages-of-online-learning.jpg" alt="no image" />
        </div>
        </Col>

        <div className='d-flex justify-content-center mt-3'>
        <FontAwesomeIcon icon={faAnglesDown} style={{fontSize:'50px'}} />        
        </div>

      </Row>

      <div>
        <h2 className='p-5 ms-5 ' style={{fontWeight:'bold'}}>Most Popular Courses</h2>
      </div>
      <Row className=' ms-4 mb-5'>
        <Col sm={12} md={4} className='mb-3'>
          <div className='card p-4 shadow' style={{maxWidth:'480px'}}>
            <div className="row ">
              <div className="col-md-6">
                <img src="https://www.gkftii.com/blog/img/multimedia-courses-scope-and-career.webp" style={{height:'160px' ,width:'200px'}} alt="" />
              </div>
              <div className="col-md-6">
                <h3>Course name</h3>
                <p className='text-dark'>asnhbsciu ncianc jncnai csjbc</p>
                <p>Last updated 5 days ago</p>

              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} className='mb-3'>
          <div className='card p-4 shadow' style={{maxWidth:'480px'}}>
            <div className="row">
              <div className="col-md-6 ">
                <img src="https://www.gkftii.com/blog/img/multimedia-courses-scope-and-career.webp" style={{height:'160px' ,width:'200px'}} alt="" />
              </div>
              <div className="col-md-6 ">
                <h3>Course name</h3>
                <p className='text-dark'>asnhbsciu ncianc jncnai csjbc</p>
                <p>Last updated 5 days ago</p>

              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} className=''>
          <div className='card p-4 shadow' style={{maxWidth:'480px'}}>
            <div className="row ">
              <div className="col-md-6 ">
                <img src="https://www.gkftii.com/blog/img/multimedia-courses-scope-and-career.webp" style={{height:'160px' ,width:'200px'}} alt="" />
              </div>
              <div className="col-md-6  ">
                <h3>Course name</h3>
                <p className='text-dark'>asnhbsciu ncianc jncnai csjbc</p>
                <p>Last updated 5 days ago</p>

              </div>
            </div>
          </div>
        </Col>
      </Row>


    {/* 3rd part companies */}
    <div className='mb-5 w-100' style={{backgroundColor:'azure', paddingLeft:'100px', paddingRight:'100px', paddingTop:'60px', paddingBottom:'60px', marginTop:'50px'}}>
      <h4 className='text-center'>Trusted by over 15,000 companies and millions of learners around the world</h4>
      <div className='mt-5 row d-flex justify-content-evenly align-items-center partnerIcons' >
        <div className='col-2 mt-4'><img src="https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals" alt="logo" /></div>
        <div className='col-2 mt-4'><img src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals" alt="logo" /></div>
       <div className='col-2 mt-4'> <img src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals" alt="logo" /></div>
        <div className='col-2 mt-4'><img src="https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals" alt="logo" /></div>
        <div className='col-2 mt-4'><img src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals" alt="logo" /></div>
        <div className='col-2 mt-4'><img src="https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals" alt="logo" /></div>

      </div>
    </div>


    </div>
  )
}

export default Home