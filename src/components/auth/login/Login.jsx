import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login w-100'>
        <div className="login-container w-50">
            <h1>Sign Up</h1>
            <div className="login-fields w-100">
                <input type="text" placeholder='Your Name' className='text-white' />
                <input type="Email" placeholder='Email' className='text-white' />
                <input type="password" placeholder='Password' className='text-white' />
            </div>
            <button type='button' className='w-100'>Continue</button>
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