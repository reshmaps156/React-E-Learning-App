import React, { useState } from 'react'
import './Login.css'
import { Link,  useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/allApi'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login({setUsername,setUserRole,setEmail}) {
  // const [email,setEmail] = useState("")
  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")
 
  const navigate = useNavigate()
 
  const handleLogin = async()=>{
    if(!password || !user){
      toast('Please fill the form completely')
    }else{
      const response = await loginUser()
     
      // console.log(response.data);
      setUsername(user)
      
      const fullUsername = response.data.map((data)=>data.username)
      const fullPassword = response.data.map((data)=>data.password)
      
     
    const currentUser = response.data.find((data)=>data.username ==user && response.data.find((data)=>data.password==password))
    console.log(currentUser);
     if( fullUsername.find((data)=>data==user ) && fullPassword.find((pwrd)=>pwrd==password ) ){
      
      toast.success('Login successful')
      setUserRole(currentUser.role)
      setEmail(currentUser.email)
      // console.log(currentUser.role);
      navigate('/profile')
     
      
     }
     else{
      toast.error('check your username or password')
     }

    }
  }
  return (
    <div className='login '>
        <div className="login-container w-50"  style={{color:'white'}}>
            <h1>Sign In</h1>
            <div className="login-fields w-100">
                <input type="Email" placeholder='Username' className='text-white' onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder='Password' className='text-white' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='button' className='w-100' onClick={handleLogin}>login</button>
            <p className='login-login'>Are you a new User? <Link to={'/register'} style={{textDecoration:'none'}}><span>Register</span></Link></p>
        </div>
        <ToastContainer position="top-center" transition={Slide} theme='dark'/>
    </div>
  )
  
}

export default Login