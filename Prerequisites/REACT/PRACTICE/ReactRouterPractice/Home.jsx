import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'


const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        
        <h1>Hello and Goodbye</h1>
        {/* <button onClick={()=>navigate(`/user/aboutuser`)}>About and users</button> */}
        <Link
        to= '/about'
        >
        <FaArrowLeft/>About us
        </Link>

    </div>
  )
}

export default Home