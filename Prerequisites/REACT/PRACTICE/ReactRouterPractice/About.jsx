import React from 'react'
import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

const About = () => {
  return (
    <div>
        <p>About us</p>
        <Link
        to='/'>
            <FaArrowLeft/>Homepage
        </Link>

    </div>
  )
}

export default About