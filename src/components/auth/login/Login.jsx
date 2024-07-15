import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {

  const handleLogin = ()=>{
    
  }
  return (
    <div className='login w-100'>
        <div className="login-container w-50">
            <h1>Sign In</h1>
            <div className="login-fields w-100">
                <input type="Email" placeholder='Email' className='text-white' />
                <input type="password" placeholder='Password' className='text-white' />
            </div>
            <button type='button' className='w-100' onClick={handleLogin}>login</button>
            <p className='login-login'>Are you a new User? <Link to={'/register'} style={{textDecoration:'none'}}><span>Register</span></Link></p>
        </div>
    </div>
  )
  
}
<script src='./logic.js'></script>

export default Login