import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import './profile.css'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons/faBuildingColumns'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Reviews from './Reviews'
import { Link } from 'react-router-dom'
import Book from './Book'
import Wishlist from './Wishlist'
import Myprofile from './Myprofile'
import Enrolledcourses from './Enrolledcourses'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate'
import Dashboard from './Dashboard'
import Dropdown from 'react-bootstrap/Dropdown';





function Profile() {

    const [shows, setShows] = useState(true);
    const [display, setDisplay] = useState(false)
    const [display1, setDisplay1] = useState(false)
    const [display2, setDisplay2] = useState(false)
    const [display3, setDisplay3] = useState(false)
    const [display4, setDisplay4] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBook = () => {
        setDisplay(true)
    }
    const handle1 = ()=>{
        setDisplay1(true)
    }
    const handle2 = ()=>{
        setDisplay2(true)
    }
    const handle3 = ()=>{
        setDisplay3(true)
    }
    const handle4 = ()=>{
        setDisplay4(true)
}

    const handleBookClose = () => {
        setDisplay(false)
        setDisplay1(false)
        setDisplay2(false)
        setDisplay3(false)
        setDisplay4(false)
    }
    








    return (
        <>
            {/*components part */}

            <div className='d-flex row profileAlignment'>
                <div className='shadow px-3 col-md-3' >
                    <div className='py-4 ms-4 me-3 mt-3 d-flex'>
                       {/* <img src="./src/assets/image2.png" alt="no image" width={'300px'} height={'200px'} style={{marginTop:'-50px'}}/>*/}
                        <FontAwesomeIcon icon={faBuildingColumns} size='4x' className='text-danger ms-5 px-5'/>
                        {/*<h4 className='text-success px-4 mt-3 fw-bolder' style={{ width: '250px' }}></h4>*/}
                        </div>

                    <div className='py-1 ms-3'>
                    <div className='ms-2 py-2 '> <button onClick={handleBookClose} className='btn btn-light w-100'><FontAwesomeIcon icon={faArrowsRotate} className='px-4' size='2x' />Refresh</button></div>
                        <div className='ms-2 py-2 '><button className='btn btn-info w-100' onClick={handle4}><FontAwesomeIcon icon={faLayerGroup} className='px-4' size='2x' />Dashboard</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-info w-100' onClick={handle2}><FontAwesomeIcon icon={faUser} className='px-4' size='2x' />My Profile</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-info w-100' onClick={handle3}><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Enrolled Courses</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-info w-100'><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Other Courses</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-info w-100' onClick={handleBook}><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Books</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-info w-100' onClick={handle1}><FontAwesomeIcon icon={faHeart} className='px-4' size='2x' />Wishlist</button></div>

                        <div className='ms-2 py-2' >

                            <button type='button' className='btn btn-info w-100' onClick={() => setShows(!shows)}><FontAwesomeIcon icon={faStar} className='px-4' size='2x' />Reviews</button>
                        </div>

                    </div>


                    {/*carosal part/ ads */}
                    <div className='p-3'>
                        <Carousel>
                            <Carousel.Item>
                                {/*<ExampleCarouselImage text="First slide" />*/}
                                <img src="https://dynamic.brandcrowd.com/template/preview/design/c395dca5-73fa-4306-91e8-eb2b745bae00/f2e8fd7e-ef15-4fcc-942c-d7159b817603?v=4&designTemplateVersion=1&logoTemplateVersion=8&size=design-preview-standalone-1x" alt="no image" width={'100%'} />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOrpGRTmLbnLvxpPCvS6CODbM1Hh5qTxgMw&s" alt="no image" width={'100%'} />
                                {/*<ExampleCarouselImage text="Second slide" />*/}

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://www.aeologic.com/blog/wp-content/uploads/2022/08/Impact-of-AI-on-E-learning-and-Education.jpg" alt="no image" width={'100%'} />
                                {/*<ExampleCarouselImage text="Third slide" />*/}

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://media.licdn.com/dms/image/D5612AQEbmU1pRson8w/article-cover_image-shrink_720_1280/0/1713493304587?e=2147483647&v=beta&t=uH2bmt0YqNinLfQ_sZaMU48EDRKDl8CRZFXQfmkPZbY" alt="no image" width={'100%'} />
                                {/*<ExampleCarouselImage text="Third slide" />*/}

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://colorwhistle.com/wp-content/uploads/2024/03/Metaverse-in-Education.jpeg" alt="no image" width={'100%'} />
                                {/*<ExampleCarouselImage text="Third slide" />*/}

                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>


                {/*profile navbars field */}
                <div className='col-md-9 '>
                    <div className="row w-100 d-flex justify-content-between bg-danger">
                        <div className="col-md-7">
                            <div className='d-flex'>
                                <label htmlFor="profileimg">
                                    <input id='profileimg' type="file" style={{ display: 'none' }} />
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="no image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} className='mt-3 ms-5 mb-3' />
                                </label>
                                <div className='mt-5 ms-4'>
                                    <h3 className='text-light'>User</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='d-flex '>
                                <button className='btn btn-info h-25 mt-5' onClick={handleShow}><FontAwesomeIcon icon={faPlus} />Add New Courses</button>
                                <div>
                                     <FontAwesomeIcon icon={faBars} className='text-light px-5 mt-5' size='2x' />     
                                 </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Course</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Please fill the following details</p>
                            <form className='border p-3 rounded border-secondary'>
                                <input type="text" placeholder='Course Title' className='form-control' />
                                <input type="text" placeholder='Course Image' className='form-control mt-3' />
                                <input type="text" placeholder='Course Url' className='form-control mt-3' />
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                upload
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="row ">
                    <div>
                        {display4 &&
                            <div className='shadow mt-3 p-4 me-3 '>
                                <Dashboard/>  
                            </div>}
                        
                            {display && <Book />}
                            {/*answers field */}
                            {!shows &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Reviews />
                                </div>}

                             {display1 &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Wishlist />
                                </div>}
                             {display2 &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Myprofile />
                                </div>}
                            {display3 &&
                                <div className='shadow mt-3 p-4 me-3'  >
                                    <Enrolledcourses />
                                </div>} 
                        </div>
                    </div>
                </div>



                <div />
            </div>
        </>
    )
}

export default Profile