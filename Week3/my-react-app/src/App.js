import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/SignUp' element={<SignUp />}/>
          </Routes>
    </div>
  )
}
