import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const participants = [
    {name: 'A', age:20, id:1},
    {name:'B',age:25, id:2},
    {name:'C',age:22, id:3},
    {name:'D',age:27, id:4}
]

 

const Details = () => {
    const {id} =useParams();
    const detailedinfo = participants.find(user=> user.id === parseInt(id));
    const navigate = useNavigate();
   
    
  return (
    <div>
    {detailedinfo ? (<>
    <p>User Details</p>
    <p>User Name: {detailedinfo.name}</p>
    <p>User Age: {detailedinfo.age}</p>
    <p>User id: {detailedinfo.id}</p>
    <button onClick={()=>navigate('/users')}>Go back</button>
    
    </>):(<><p>"Error"</p></>)}
    </div>
  )
}

export default Details

// User Details Page (/users/:id)

// Displays user info (id and name) from URL params

// Button to go back to Users list