import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import './profile.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons/faBuildingColumns'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import Reviews from './Reviews'
import { Link } from 'react-router-dom'
import Book from './Book'
import Wishlist from './Wishlist'
import Myprofile from './Myprofile'
import Enrolledcourses from './Enrolledcourses'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate'
//import ExampleCarouselImage from 'components/ExampleCarouselImage';


function Profile() {

    const [show, setShow] = useState(true);
   
   const [display1,setDisplay1]=useState(false)
   const [display,setDisplay]=useState(false)
   const [display2,setDisplay2]=useState(false)
   const [display3,setDisplay3]=useState(false)


   const handle1 = ()=>{
    setDisplay1(true)
    }
    const handle2 = ()=>{
        setDisplay2(true)
        }
    const handleBook = ()=>{
        setDisplay(true)
        
    }

    const handle3 = ()=>{
        setDisplay3(true)
        
    }
    const handleBookClose = ()=>{
        setDisplay(false)
        setDisplay1(false)
        setDisplay2(false)
        setDisplay3(false)
    }

    return (
        <>
            {/*components part */}
            <div className='d-flex row profileAlignment'>
                <div className='shadow px-4 col-md-4' >
                    <div className='py-4 ms-4 me-3 mt-3 '>
                        {/*carosal part/ ads */}
                    <div className='py-3' style={{marginTop:'-50px'}}>
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
                       {/* <FontAwesomeIcon icon={faBuildingColumns} size='4x' className='text-danger' /><h1 className='text-danger px-4 mt-3 fw-bolder' style={{ width: '250px' }}>Edu Mall</h1>*/}
                        
                        <div className='w-100 ms-1' style={{margin:'-25px'}}> <button onClick={handleBookClose} className='btn btn-secondary w-100 mt-3'><FontAwesomeIcon icon={faArrowsRotate}  className='px-4' size='2x' />Refresh</button></div>
                        </div>

                    <div className='ms-3 '>
                        

                        <div className='ms-2 py-2'><button className='btn btn-info w-100' onClick={handle2}><FontAwesomeIcon icon={faUser} className='px-4' size='2x' />My Profile</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-info w-100' onClick={handle3}><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Enrolled Courses</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-info w-100' onClick={handleBook}><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Books</button></div>

                        <div className='ms-2 py-2'><button className='btn btn-info w-100' onClick={handle1}><FontAwesomeIcon icon={faHeart} className='px-4' size='2x' />Wishlist</button></div>

                        <div className='ms-2 py-2' >

                            <button type='button' className='btn btn-info w-100' onClick={() => setShow(!show)}><FontAwesomeIcon icon={faStar} className='px-4' size='2x' />Reviews</button>
                        </div>

                    </div>


                    <img src="./src/assets/image2.png" alt="no image" width="400px" height={"300px"} style={{marginTop:'-30px'}}/> 

                </div>


                {/*profile navbars field */}
                <div className='col-md-8'>
                    <div className=' bg-danger shadow  d-flex justify-content-between align-items-center' style={{ height: '190px' }}>
                        <div className='d-flex '>
                            <div>
                                <label htmlFor="profileimg">
                                    <input id='profileimg' type="file" style={{ display: 'none' }} />
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="no image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} className='mt-3 ms-5' />
                                </label>
                            </div>
                            <div className='mt-5 ms-4'>
                                <h3 className='text-light'>James cameron</h3>
    
                            </div>
                        </div>
                        <div className='px-3 d-flex ms-5'>
                            <button className='btn btn-info'><FontAwesomeIcon icon={faPlus} className='px-2' />Add New Courses</button>
                            <div><FontAwesomeIcon icon={faBars} className='text-light px-5' size='2x' /></div>
                        </div>
                      
                        
                    </div>
                    {display && <Book/>}
                </div>
                
            </div>

            {/*answers field */}
            {!show &&
                <div className='shadow p-3' style={{ marginTop: '-650px', marginLeft: '500px', height: '95vh', width: '130vh' }} >
                    <Reviews />
                </div>}
        
            {display1 &&
            <div className='shadow p-3' style={{ marginTop: '-650px', marginLeft: '500px', height: '95vh', width: '130vh' }} >
            <Wishlist />
             </div>

            }

             {display2 &&
            <div className='shadow p-3' style={{ marginTop: '-650px', marginLeft: '500px', height: '95vh', width: '130vh' }} >
            
            <Myprofile />
             </div>

            }
            {display3 &&
            <div className='shadow p-3' style={{ marginTop: '-650px', marginLeft: '500px', height: '95vh', width: '130vh' }} >
            
            <Enrolledcourses />
             </div>

            }
            



        </>
    )
}

export default Profile