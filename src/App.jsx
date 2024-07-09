import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/main pages/Home'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'



function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
