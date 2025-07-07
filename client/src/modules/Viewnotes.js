import { useParams } from 'react-router-dom'
import Nav from './shares/nav'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Viewnotes() {

  const {id} = useParams()
  const [oneNote, setoneNote] = useState({})
  const getOneNote = async ()=>{
await axios.get(`http://localhost:7000/singlenote/${id}`)
.then((d)=>{setoneNote(d.data.mydata)})
  }

  useEffect(()=>{
    getOneNote()
  },[])

  return (
    <div>
    <Nav/>
   
   <div className='row container mx-auto text-center mt-5'>
    <div className='col-md-12'>
      <h1>{oneNote.title}</h1>
    </div>  
    <div className='col-md-12'>
    <h3 className='text-secondary'>
        {oneNote.content}    
    </h3>
    <p className='float-end'>{oneNote.updatedAt?.slice(0, 10)}  </p>
    </div>
   </div>

     
    </div>
  )
}
