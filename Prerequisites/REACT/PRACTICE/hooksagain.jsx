// Practice Challenge: Dynamic User Profile with Age Controls
// Requirements:

// Use useParams to extract userId from the URL (like /user/123).

// Use useEffect to fetch user data asynchronously based on that userId.

// Use useState to store user info: { name, age }.

// Show a loading indicator while fetching.

// Show an error message if fetching fails.

// Display the user’s name and age.

// Provide buttons to increase and decrease the user’s age.

// Bonus: Add a button to reset the age to zero.

import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../ReactCrashCourse/src/Components/Spinner';

const hooksagain = () => {

    const {id} = useParams();
    const [data, setDataa] = useState({name:'', age:0});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const gonnafetch = async ()=>{
            try{
                const response = await fetch (`/user/${id}`);
                const receiveddata = await response.json();
                setDataa(receiveddata);
            }
            catch(err){
                console.log('Fetching error', err);
            }
            finally{
                setLoading(false);
            }
        }
        gonnafetch();
    },[id]);
  
  return (
    <>
    {loading? <Spinner/> : (
        <>
    <h3>User's name and age: {data.name} and {data.age}</h3>
    <button onClick={()=>setDataa(prev=>({...prev, age: prev.age+1}))}>Click to increase user's age</button>
    <button onClick={()=>setDataa(prev=>({...prev, age: prev.age-1}))}>Click to increase user's age</button>
    <button onClick={()=>setDataa(prev=>({...prev, age: 0}))}>Reset Age to zero</button>
    </>
    )}
    </>
  )
}

export default hooksagain