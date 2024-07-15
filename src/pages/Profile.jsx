import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons/faBuildingColumns'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Reviews from '../components/reviews/Reviews'

function Profile() {

    const [show, setShow] = useState(true);

  

    
  

  return (
   <>  
   {/*components part */} 
     <div className='d-flex'>
          <div className='shadow px-3' style={{ width: '400px' ,height:'100%'}}>
              <div className='py-4 ms-4 me-3 mt-3 d-flex'><FontAwesomeIcon icon={faBuildingColumns} size='3x' className='text-danger'/><h1 className='text-danger px-4 mt-3 fw-bolder' style={{width:'250px'}}>E-Learning</h1></div>

              <div className='py-4 mt-4 ms-3'>
              <div className='ms-2 py-2 '> <button className='btn btn-info w-100'><FontAwesomeIcon icon={faLayerGroup} className='px-4' size='2x' />Dashboard</button></div>
              
                  <div className='ms-2 py-2'><button className='btn btn-info w-100'><FontAwesomeIcon icon={faUser} className='px-4' size='2x' />My Profile</button></div>
              
                  <div className='ms-2 py-2'><button className='btn btn-info w-100'><FontAwesomeIcon icon={faBookOpen} className='px-4' size='2x' />Enrolled Courses</button></div>

                  <div className='ms-2 py-2'><button className='btn btn-info w-100'><FontAwesomeIcon icon={faHeart} className='px-4' size='2x' />Wishlist</button></div>

                  <div className='ms-2 py-2' >
                    
                   <button type='button' className='btn btn-info w-100' onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faStar} className='px-4' size='2x' />Reviews</button>
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
              <div className='w-100 bg-danger shadow d-flex justify-content-between align-items-center' style={{ height: '190px' }}>
                  <div className='d-flex'>
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
                        <button className='btn btn-info'><FontAwesomeIcon icon={faPlus}  className='px-2'/>Add New Courses</button>
                         <div><FontAwesomeIcon icon={faBars} className='text-light px-5' size='2x' /></div>
                  </div>
                <div>

            </div>
          </div>
    </div>

    {/*answers field */}
    {!show &&
    <div className='shadow p-3' style={{marginTop:'-500px',marginLeft:'400px',height:'100%',width:'145vh'}} >
    <Reviews/>
     </div>}
   </>
  )
}

export default Profile