import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';


function LandingSubscription() {
  return (
    <>
    <div className="row w-100 mt-5 mb-5  p-5 ">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 row mt-5">
                        <div className="col-md-5">
                            <h3 className='titleColor'>Try some of over classes</h3>
                            <p>Enter your email and we’ll send you some samples of our favorite classes.</p>
                        </div>
                        <div className="col-md-7">
                            <p className='termsFont'>Email</p>
                            <div className='d-flex'>
                                <input type="text" placeholder='Enter Email Address' className='form-control'/>
                                <button className='btn btn-outline-warning px-4 ms-2'>Submit</button>
                            </div>
                            <div className='d-flex align-items-center '>
                                <Checkbox  size='small'color="warning" defaultChecked/>
                                <p className='pt-3'>I agree to receive email updates</p>
                                </div>
                                <p className='termsFont'>By sharing your email, you agree to our <Link className='text-white'>Terms of Service</Link> and <Link className='text-light'>Privacy Policy</Link>.</p>
    
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>


    </>
  )
}

export default LandingSubscription