import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
    const [data,setdata]=useState('')
    let handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
        console.log(data);

    }
    let callingsubmit=async (event)=>{
        event.preventDefault()
        let response=await axios.post('http://localhost:4000/login',data)
        console.log(response.data);
        
        if(response.data){
          // console.log('login success');
          navigate('/home')


        }
        else{
         console.log('invalid'); 
          
        }

 }
    
  return (
    <div>
        <form onSubmit={callingsubmit}>
        <input type="text" onChange={handlechange} name='username' placeholder='username' />
        <input type="text" onChange={handlechange} name='password' placeholder='password'/>
        <input type="submit" />

        <Link to={'/signup'}>signUp</Link>
        </form>
    </div>
  )
}

export default Login