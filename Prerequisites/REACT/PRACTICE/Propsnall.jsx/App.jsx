import {React,useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Userlistpage from '../../../practice01/src/Pages/UserListPage'
import Userdetailpage from '../../../practice01/src/Pages/userdetailpage'

const App = () => {
   

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/users' element={<Userlistpage users={users}/>}></Route>
            <Route path='/users/:id' element={<Userdetailpage users={users} setUsers={setUsers}/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App