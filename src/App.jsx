import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './pages/Navigation'
import Registration from './pages/Registration'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App