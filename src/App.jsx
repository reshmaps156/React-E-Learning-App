import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Landingpage from './components/main pages/landing page/Landingpage'
import Home from './components/main pages/home/Home'
import Login from './pages/Login'
import Register from './pages/Register'






function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
