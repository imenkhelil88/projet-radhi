import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios  from 'axios'
import { post_prodact } from '../redux/action/action'


const Postearticl = () => {
    const [name,setName]=useState('')
    const [image,setImage]=useState([])
    const [subject,setSubject]=useState('')
    const [value,setValue]= useState('')
    const dispatch=useDispatch()
    const handlesubmit =async()=>{
        const formData= new FormData()
        formData.append('file',image)
        formData.append('upload_preset','ml_default')
        await axios.post('http://api.cloudinary.com/v1_1/dvut377jf/upload',formData)
        .then((res)=>{
            dispatch (post_prodact({subject:subject,image:res.data.url,name:name}))
        })


        
    }

  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <input type="text" onChange={(e)=>setSubject(e.target.value)}/>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
       { console.log(image)}
        <button onClick={()=>handlesubmit()}>submit</button>
    </div>
  )
}

export default Postearticl