import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='login'>
        <div className="login-container">
            <h1>Sign In</h1>
            <div className="login-fields">
                <input type="Email" placeholder='Email' id='regUser' />
                <input type="password" placeholder='Password' id='regpswd' />
            </div>
            <button type='btn'>login</button>
            <p className='login-login'>Are you a new User? <Link to={'/login'} style={{textDecoration:'none'}}><span>Register</span></Link></p>
        </div>
    </div>
  )
}
<script src='./logic.js'></script>

export default Register