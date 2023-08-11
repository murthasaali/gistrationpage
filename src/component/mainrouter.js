import React from 'react'
import Login from './login'
// import home from './home'

import Home from './home'
import Reg from './reg'
import { Routes,Route } from 'react-router-dom'
function Mainrouter() {
  return (
    <div>
    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/reg' element={<Reg/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>

    </div>
  )
}

export default Mainrouter