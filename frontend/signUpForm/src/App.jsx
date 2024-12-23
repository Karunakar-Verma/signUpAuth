import { useState } from 'react'
import './App.css'
import  Home  from './components/signUp'
import  Login  from './components/login'
import MainContent from './components/MainContent';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/MainContent" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
