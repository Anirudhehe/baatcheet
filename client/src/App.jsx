import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import bgImage from './assets/bgImage.jpg';


const App = () => {
  return (
    <div className='w-full h-screen bg-custom-hero bg-cover bg-center'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </div>
  )
}

export default App