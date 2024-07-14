import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Landingpage from './components/main pages/landing page/Landingpage'
import Home from './components/main pages/home/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Profile from './components/main pages/profile/Profile'
import Login from './components/auth/login/Login'








function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
