import React from 'react'
import './login.css'

function Login() {
  const ale=()=>{
    alert("succussfully logined")
  }
  return (
    <div className='log'>
      <h1>please.. login</h1>
        <div><input className='don' type='text' name='username' placeholder='username'></input></div>
        <div><input className='don' type='password' name='password' placeholder='password'></input></div>
        <div><button onClick={ale} className='login'>login</button></div>
    </div>
  )
}

export default Login