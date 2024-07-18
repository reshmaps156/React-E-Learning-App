import React from 'react'
import { Link } from 'react-router-dom'
import './landingpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import LandingpageFAQ from './LandingpageFAQ';
import LandingSubscription from './LandingSubscription';



function Landingpage() {

    return (
        <>
          <div className='main'>
                <div className=" w-100  p-5  d-flex align-items-center " style={{height:'100vh',margin:'auto'}} >
                    <div className='row w-100 mb-5  d-flex align-items-center'>
                        <div className="col-md-1"></div>
                        <div className="col-md-6  p-5">
                            <h1 className='titleColor fw-bolder'>Fuel Your Knowledge.</h1>
                               <h1 className='titleColor fw-bolder'> Power Your Future</h1>
                            <p className=''> Learn Together, Grow Together. Connect with a Hive of Knowledge.</p>
                           <Link to={'/home'}> <button className='btn btn-primary py-2 px-4 rounded-0 shadow'>Get started</button></Link>
                        </div>
                        <div className="col-md-5">
                            <div className=''>
                                <img width={'100%'} src="./src/assets/landingcover.png" alt="" className='landingImg'/>
                            </div>
                        </div>
                        
    
                    </div>
    
                </div>
                <div className="row w-100  mb-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 p-5 ">
                        <h2 className='titleColor fw-bolder'>Transform Your learning experience with ease </h2>
                    </div>
                    <div className="col-md-5  ">
                        <p><FontAwesomeIcon icon={faCircleCheck} size='xl' beatFade className='me-2 ms-sm-5 ms-md-1'/> Flexible learning schedule</p>
                       <p><FontAwesomeIcon icon={faCircleCheck} size='xl' beatFade className='me-2  ms-sm-5 ms-md-1'/>Access a diverse selection of subjects</p>
                       <p><FontAwesomeIcon icon={faCircleCheck} size='xl' beatFade className='me-2  ms-sm-5 ms-md-1'/>Learn from industry experts and experienced educators</p>
                       <p><FontAwesomeIcon icon={faCircleCheck} size='xl' beatFade className='me-2  ms-sm-5 ms-md-1'/>Certificates of completion to showcase your achievements</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className=' mt-2  text-center shadow rounded boxColor'>
                            <p className='fw-bold fs-1 pt-1'>25K+</p>
                            <p className='fw-bold'>Classes</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div className=' mt-2  text-center shadow rounded boxColor'>
                            <p className='fw-bold fs-1 pt-1'>600K+</p>
                            <p className='fw-bold'>Members</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div className='mt-2  text-center shadow rounded boxColor'>
                            <p className='fw-bold fs-1 pt-1'>8K+</p>
                            <p className='fw-bold'>Teachers</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div className='mt-2  text-center shadow rounded boxColor'>
                            <p className='fw-bold fs-1 pt-1 numColor'>4.8</p>
                            <p className='fw-bold'>App Rating</p>
                        </div>  
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <LandingSubscription/>
                <div className=" w-100 mt-5">
                    <h2 className='text-center  fs-1 text-light '>Frequently asked questions</h2>
                    <div className="row ">
                        <div className="col-md-2 col-1"></div>
                        <div className="col-md-8 col-10">
                           <LandingpageFAQ/>
                        </div>
                        <div className="col-md-2 col-1"></div>
                    </div>
    
    
                </div>
                
    
          </div>
        </>
    )
}

export default Landingpage