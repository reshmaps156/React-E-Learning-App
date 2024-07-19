import React, { useState } from 'react'
import './login/Login.css'
import { Link } from 'react-router-dom'
import { addUser, loginUser } from '../services/allApi'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function Register() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user'
  })
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }
  const isEmail = (email)=>{
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && email.toLowerCase().endsWith("@gmail.com")
  }
  const handleRegister = async (e) => {
    e.preventDefault()

    const { username, email, password } = userDetails

    if (!username || !email || !password) {
      toast.info('Please fill the form completely')
    }else if(!isEmail(email)){
      toast.error('enter a valid email')
    }
    else {
      try {
        const response = await loginUser()
        const fullEmail = response.data.map((data)=>data.email)
        if(fullEmail.find((mail)=>mail==email)){
          toast.info('Account already exist')
        }else{
          const result = await addUser(userDetails)

          if (result.status >= 200 && result.status < 300) {
            toast.success('User registered successfully')
            setUserDetails({
              username: '',
              email: '',
              password: ''
            })
          }
          else {
            toast.error('Something went wrong')
          }
  
  
        }
       


      } catch (error) {
        console.log(error);
        toast.error('Failed to register user')
      }
    }

  }
  return (
    <div className='login w-100' style={{color:'white'}}>
      <div className="login-container w-50">
        <h1>Sign Up</h1>
        <div className=" w-100">
          <form className='login-fields'>
            <input type="text" name='username' value={userDetails.username} placeholder='Your Name' className='text-white' onChange={handleChange} />

            <input type="email" name='email' value={userDetails.email} placeholder='Email' className='text-white' onChange={handleChange} />

            <input type="password" name='password' value={userDetails.password} placeholder='Password' className='text-white' onChange={handleChange} />

            <button type='submit' className='w-100' onClick={handleRegister}>Continue</button>
          </form>

        </div>

        <p className='login-login'>Already have an account? <Link to={'/login'} style={{ textDecoration: 'none' }}><span>Login Here</span></Link></p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      <ToastContainer position="top-center" transition={Zoom} theme='dark' autoClose={2000} />

    </div>

  )
}

export default Register