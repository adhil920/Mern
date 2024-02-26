import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import View from './View';

function Update() {
    const{id}=useParams()
    const[inputdata,setdata]=useState()
    const[view,setview]=useState('')
    

    console.log(id);

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await axios.get(`http://localhost:4000/findById/${id}`)
            console.log(response);
            setview(response.data)

        }
        fetchData();

    },[])

    let handlechange=(event)=>{
        setdata({...inputdata,[event.target.name]:event.target.value})
        console.log(inputdata);
    }
    let callingsubmit=async(event)=>{
        event.preventDefault()
        console.log(inputdata,'aftersubmit');

        let response=await axios.put(`http://localhost:4000/update/${id}`,inputdata)
        console.log('response',response);
    }

  return (
    <div>
         <div>
      <form onSubmit={callingsubmit}>
      <input type="text" onChange={handlechange} name='username' placeholder={view.username}/>
      <input type="text"  onChange={handlechange} name='password' placeholder={view.password} />
      <input type="submit" />
      
      </form>
      </div>
    </div>
  )
}

export default Update