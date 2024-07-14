import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Landingpage from './components/main pages/landing page/Landingpage'
import Home from './components/main pages/home/Home'
<<<<<<< HEAD
import Login from './pages/Login'
import Register from './pages/Register'
=======
import Profile from './pages/Profile'
>>>>>>> 261df3014090f463357c01918646d3db0ccf137c






function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>}/>
<<<<<<< HEAD
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
=======
        <Route path='/profile' element={<Profile/>}/>
>>>>>>> 261df3014090f463357c01918646d3db0ccf137c
      </Routes>
      <Footer/>
    </>
  )
}

export default App
