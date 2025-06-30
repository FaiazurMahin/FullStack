import React from 'react'
import {Route, Routes, Browserrouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Details from './Details'


const Apps = () => {
  return (
    <Browserrouter>
    <Routes>
        <Route path='/' element={(<Home/>)}></Route>
        <Route path='/about' element={(<About/>)}></Route>
        <Route path='/details/:id' element={(<Details/>)}></Route>
    </Routes>
    </Browserrouter>
    
  )
}

export default Apps