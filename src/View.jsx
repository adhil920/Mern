import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function View() {
  const [datastoring,setdata]=useState([''])
  const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchData=async ()=>{
      let response=await axios.get('http://localhost:4000/find')
      console.log(response);
      setdata(response.data)

    }
    fetchData()
  },[refresh])

  let deletedata=(id)=>{
    let response=axios.delete(`http://localhost:4000/delete/${id}`)
     setrefresh(!refresh)

  }
  return (
    <div>

      {
        datastoring.map((item)=>(
        <>
          <h1>{item.username}</h1>
          <h1>{item.password}</h1>
          <Link to={`/update/${item._id}`}><button>update</button></Link>
          <button onClick={()=>{deletedata(item._id)}}>delete</button>
          </>
        ))
      }
    </div>
  )
}

export default View