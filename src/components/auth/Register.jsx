import React, { useState } from 'react'
import './login/Login.css'
import { Link } from 'react-router-dom'
import { addUser } from '../services/allApi'
import {  toast, ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function Register() {
  const [userDetails,setUserDetails] =useState({
    username :" ",
    email:" ",
    password:" ",
    roll:"user"
  })
  // console.log(userDetails);
  const handleRegister = async(e)=>{
    e.preventDefault()
    const {username,email,password,roll} = userDetails
    if(!username || !email || !password || !roll){
      toast.info('Please fill the form completely')
    }
    else{
      const result = await addUser(userDetails)
      if(result.status>=200 && result.status<300){
        toast.success('User registered successfully')
        setUserDetails({
          username :" ",
          email:" ",
          password:" ",
          roll:"user"
        })
       
        
      }else{
        toast.error('Something went wrong')
      }
    }

  }
  return (
    <div className='login w-100'>
        <div className="login-container w-50">
            <h1>Sign Up</h1>
            <div className="login-fields w-100">
                <input type="text" placeholder='Your Name'  className='text-white' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}/>
                <input type="Email" placeholder='Email' className='text-white'  onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
                <input type="password" placeholder='Password' className='text-white'  onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/>
            </div>
            <button type='button' className='w-100' onClick={handleRegister}>Continue</button>
            <p className='login-login'>Already have an account? <Link to={'/login'} style={{textDecoration:'none'}}><span>Login Here</span></Link></p>
            <div className="login-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        </div>
        <ToastContainer position="top-center" transition={Zoom} theme='dark' autoClose={2000}/>

    </div>
    
  )
}

export default Register