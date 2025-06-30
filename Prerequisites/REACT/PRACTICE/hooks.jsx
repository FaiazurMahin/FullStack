//  Requirements:
// The URL will look like: /user/123

// Use useParams to extract the user ID

// Use useEffect to simulate fetching user data based on the ID

// Use useState to store and display the user's name and age

// Add a button to simulate changing the user's age

import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const hooks = () => {
    const {id} = useParams();
    const [info,setInfo] = useState({name:'',age:0});

    useEffect(()=>{
        const fetching = async ()=>{
            try{
                const response = await fetch (`/user/${id}`);
                const data = await response.json();
                setInfo(data);
            }
            catch(err){
                console.log("Fetching Error");
            }
        }
        fetching();
        
    },[id])

    return (
    <>
    <p>Fetched Data:</p>
    <h3>ID:{id}</h3>
    <h3>info:{info.name}</h3>
    <h3>info:{info.age}</h3>

    <button onClick={()=>setInfo(prev=>({...prev, age: prev.age +1}))}>Increase Age</button>
    <button onClick={()=>setInfo(prev=>({...prev, age: prev.age -1}))}>Decrease Age</button>
    </>
  )
  
}
    

export default hooks