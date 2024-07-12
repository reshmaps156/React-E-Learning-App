import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <div className="login-container">
            <h1>Sign Up</h1>
            <div className="login-fields">
                <input type="text" placeholder='Your Name' />
                <input type="Email" placeholder='Email' />
                <input type="password" placeholder='Password' />
            </div>
            <button type='btn'>Continue</button>
            <p className='login-login'>Already have an account? <Link to={'/register'} style={{textDecoration:'none'}}><span>Login Here</span></Link></p>
            <div className="login-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        </div>

    </div>
  )
}
<script src='./logic.js'></script>

export default Login