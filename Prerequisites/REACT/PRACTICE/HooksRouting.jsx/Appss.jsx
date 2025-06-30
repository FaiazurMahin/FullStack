import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './Users'


const Appss = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/profile/:id' element={<Test/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Appss