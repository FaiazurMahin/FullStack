import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Mainlayout