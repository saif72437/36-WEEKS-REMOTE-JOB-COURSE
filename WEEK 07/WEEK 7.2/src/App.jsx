import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const HomePage  = React.lazy(()=> import("./pages/HomePage"))
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={ <HomePage/> } />
                <Route path='/about' element={ <AboutPage/> } />
                <Route path='/services' element={ <ServicesPage/> } />
                <Route path='/login' element={ <LoginPage/> } />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
