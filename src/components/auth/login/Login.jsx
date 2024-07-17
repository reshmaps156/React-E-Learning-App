import React, { useState } from 'react'
import './Login.css'
import { Link,  useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/allApi'


function Login({setUsername}) {
  // const [email,setEmail] = useState("")
  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")
 
  const navigate = useNavigate()
 
  const handleLogin = async()=>{
    if(!password || !user){
      alert('Please fill the form completely')
    }else{
      const response = await loginUser()
     
      console.log(response.data);
      setUsername(user)
      
      // const fullEmail = response.data.map((data)=>data.email)
      const fullUsername = response.data.map((data)=>data.username)
      const fullPassword = response.data.map((data)=>data.password)
    
     if( fullUsername.find((data)=>data==user ) && fullPassword.find((pwrd)=>pwrd==password) ){
      
      alert('Login successful')
      navigate('/profile')
     
      
     }else{
      alert('check your username or password')
     }

    }
  }
  return (
    <div className='login w-100'>
        <div className="login-container w-50">
            <h1>Sign In</h1>
            <div className="login-fields w-100">
                <input type="Email" placeholder='Username' className='text-white' onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder='Password' className='text-white' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='button' className='w-100' onClick={handleLogin}>login</button>
            <p className='login-login'>Are you a new User? <Link to={'/register'} style={{textDecoration:'none'}}><span>Register</span></Link></p>
        </div>
    </div>
  )
  
}

export default Login