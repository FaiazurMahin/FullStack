import React from 'react'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider, BrowserRouter, Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Mainlayout from './Layouts/Mainlayout'
import Jobspage from './Pages/Jobspage'
import Notfoundpage from './Pages/Notfoundpage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route index element={<Homepage />} />
          <Route path='/jobs' element={<Jobspage/>}/>
          <Route path='*' element={<Notfoundpage/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>

 
  )
}

export default App