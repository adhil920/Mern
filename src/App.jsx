import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify'
import './App.css';
function App() {

  const [datastoring,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...datastoring,[event.target.name]:event.target.value})
    console.log(datastoring);

  }
  let callingsubmit=async (event)=>{
    event.preventDefault()
    console.log(datastoring,'afterSubmit');
    let response=await axios.post('http://localhost:4000/insert',datastoring)
    console.log(response);
    toast(response.data)
    
  }

  return (
    <div>
      <ToastContainer/>
      <div className="ad">
      <form onSubmit={callingsubmit}>
      <input type="text" onChange={handlechange} name='username' placeholder='username'/>
      <input type="text" onChange={handlechange} name='password' placeholder='password'/>
      <input type="submit" />
      <Link to={'/'}> Login</Link>
      </form>
      </div>
    
    </div>
  )
}

export default App