import React, { useState } from 'react'
import './login/Login.css'
import { Link } from 'react-router-dom'
import { addUser } from '../services/allApi'


function Register() {
  const [userDetails,setUserDetails] =useState({
    username :" ",
    email:" ",
    password:" ",
    roll:'user'
  })
  console.log(userDetails);
  const handleRegister = async(event)=>{
    event.preventDefault()
    const {username,email,password} = userDetails
    if(!username || !email || !password){
      alert('Plese fill the form completely')
    }else{
      const result = await addUser(userDetails)
      if(result.status>=200 && result.status<300){
        alert('User registered successfully')
        setUserDetails({
          username :" ",
          email:" ",
          password:" ",
          roll:'user'
        })
       
        
      }else{
        alert('Something went wrong')
      }
    }

  }
  return (
    <div className='login w-100'>
        <div className="login-container w-50">
            <h1>Sign Up</h1>
            <div className="login-fields w-100">
                <input type="text" placeholder='Your Name'  className='text-white' onChange={(event)=>{setUserDetails({...userDetails,username:event.target.value})}}/>
                <input type="Email" placeholder='Email' className='text-white'  onChange={(event)=>{setUserDetails({...userDetails,email:event.target.value})}}/>
                <input type="password" placeholder='Password' className='text-white'  onChange={(event)=>{setUserDetails({...userDetails,password:event.target.value})}}/>
            </div>
            <button type='button' className='w-100' onClick={handleRegister}>Continue</button>
            <p className='login-login'>Already have an account? <Link to={'/login'} style={{textDecoration:'none'}}><span>Login Here</span></Link></p>
            <div className="login-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        </div>

    </div>
    
  )
}
<script src='./logic.js'></script>

export default Register