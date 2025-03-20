import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './pages/Navigation'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Fiction from './books_api/Fiction'
import NonFiction from './books_api/NonFiction'
import Footer from './pages/Footer'
import Children from './books_api/Children'
import Romance from './books_api/Romance'
import Drama from './books_api/Drama'
import Horror from './books_api/Horror'
import Thriller from './books_api/Thriller'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path='/Fiction' element={<Fiction />} />
          <Route path='/Non-Fiction' element={<NonFiction />} />
          <Route path='/Children' element={<Children />} />
          <Route path='/Romance' element={<Romance />} />
          <Route path='/Drama' element={<Drama />} />
          <Route path='/Horror' element={<Horror />} />
          <Route path='/Thriller' element={<Thriller />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App