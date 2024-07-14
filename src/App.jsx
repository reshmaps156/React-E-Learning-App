import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Landingpage from './components/main pages/landing page/Landingpage'
import Home from './components/main pages/home/Home'
import Profile from './components/main pages/profile/Profile'
import Login from './components/auth/login/Login'
import Register from './components/auth/Register'








function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       

      </Routes>
      <Footer/>
    </>
  )
}

export default App
