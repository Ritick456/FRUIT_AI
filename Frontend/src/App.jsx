import { useState } from 'react'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Chatbot from './Components/Chatbot/Chatbot'
import About from './Components/About/About'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Translator from './Components/Translator/Translator'
import Faq from './Components/Faq/Faq'
function App() {


  return (
    <div>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Translator" element={<Translator/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/chat" element={<Chatbot />} />
      <Route path="/faq" element={<Faq/>} />

    </Routes>
    </div>
  )
}

export default App
