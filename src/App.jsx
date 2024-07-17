import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/footer/Footer'
import Landingpage from './components/main pages/landing page/Landingpage'
import Home from './components/main pages/home/Home'
import Profile from './components/main pages/profile/Profile'
import Login from './components/auth/login/Login'
import Register from './components/auth/Register'
import About from './components/main pages/about/About'
import { useState } from 'react'



function App() {
  
  const [username,setUsername] = useState("")
  return (
    <>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile username={username}/>}/>
        <Route path='/login' element={<Login setUsername={setUsername}/>}/>
        <Route path='/register' element={<Register/>}/>
       <Route path='/about' element={<About/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
