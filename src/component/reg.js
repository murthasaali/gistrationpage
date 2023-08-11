import React from 'react'
import { useState } from 'react'
import './reg.css'
import { useNavigate } from 'react-router-dom';
function Reg() {
    const navigate=useNavigate()
    const data={name:"",email:"",password:""};
    const[inputdata,setinputdata]=useState(data)
    const handledata=(e)=>{
        setinputdata({...inputdata,[e.target.name]:e.target.value})
        console.log(inputdata)
    }
    const submit =()=>{
        if(inputdata.email.length>0&&inputdata.name.length>0&&inputdata.password.length>0)
        {
            alert(`hi ${inputdata.name }, succussfully registered`)
        }
        else{
            alert("plzz  fill the boxess...... ")
        }
    }
    const  tologin=()=>{
        if(inputdata.email.length>0&&inputdata.name.length>0&&inputdata.password.length>0)
        {
            // alert(`hi ${inputdata.name }, succussfully registered`)
            navigate("/login")
        }
    }
  return (
    <div  className='reg'>
       
        <h1>registration form</h1>
        <div>
            <input type='text' value={inputdata.name}  onChange={handledata} placeholder='entre your firstname' name='name'></input>
        </div>
        <div>
            <input type='email' value={inputdata.email} onChange={handledata} placeholder='entre your email' name='email'></input>
        </div>
        <div>
            <input type='password' value={inputdata.password} onChange={handledata}  placeholder='password' name='password'></input>
        </div>
        <div className='but'>
        <button type='submit' onClick={submit} >submit</button>
        <button onClick={tologin}>login</button>
        </div>
    </div>
  )
}

export default Reg