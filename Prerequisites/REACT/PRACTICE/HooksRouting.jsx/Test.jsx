import React from 'react'
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Spinner from '../../ReactCrashCourse/src/Components/Spinner';
import Users from './Users';


const Test = () => {
    const {id} = useParams();
    const [idtracker, setIdTracker] = useState({name:'', age:0,id:0});
    const[loading, setLoading]=useState(true);
    const navigate = useNavigate();
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchinfo = async ()=>{
            try{
            const response = await fetch (`https://api.example.com/users/${id}`);
            if(!response.ok){
                throw new Error('Couldnt fetch')
            } 
            const  data = await response.json();
            (setIdTracker(data))
            
            
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
            
        }
        fetchinfo();
    },[id]);

    if(loading){
       return <Spinner/>
    }
    if(error){
       return <p>Errorrr:{error}</p>
    }

    return (
    <div>
        <p>User's name:{idtracker.name}</p>
        <p>User's age:{idtracker.age}</p>
        <p>User's id:{idtracker.id}</p>
        <button onClick={()=>navigate('/users')}>Go back</button>
    </div>
    )
};

export default Test