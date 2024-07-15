import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Landingpage from './components/main pages/landing page/Landingpage'
import Home from './components/main pages/home/Home'
import Profile from './components/main pages/profile/Profile'
import Login from './components/auth/login/Login'
import Register from './components/auth/Register'
import Book from './components/main pages/profile/Book'
import About from './components/main pages/about/About'








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
        <Route path='/book' element={<Book/>}/>
       <Route path='/about' element={<About/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
