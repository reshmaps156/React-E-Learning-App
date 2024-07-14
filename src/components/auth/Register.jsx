import React from 'react'
import './login/Login.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='login w-100'>
        <div className="login-container w-50">
            <h1>Sign In</h1>
            <div className="login-fields w-100">
                <input type="Email" placeholder='Email' className='text-white' />
                <input type="password" placeholder='Password' className='text-white' />
            </div>
            <button type='button' className='w-100'>login</button>
            <p className='login-login'>Are you a new User? <Link to={'/login'} style={{textDecoration:'none'}}><span>Register</span></Link></p>
        </div>
    </div>
  )
}
<script src='./logic.js'></script>

export default Register