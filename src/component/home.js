import React from 'react'
import './hello.css';

import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate=useNavigate()
  const toreg=()=>{
    navigate('/reg')
  }
  return (
    <div className='home'>
      <h1>WELCOME TO MACK.COM</h1>
      <img
        src="./gun1.png"
        // alt="Description of the image"
        width="300"
        height="200"
      />
      <button onClick={toreg}>register</button>
    </div>
  )
}

export default Home