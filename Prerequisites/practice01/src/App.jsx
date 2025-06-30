import {React,useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserListPage from './Pages/UserListPage';
import UserDetailPage from './Pages/UserDetailPage';



const App = () => {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/users' element={<UserListPage />}></Route>
            <Route path='/users/:id' element={<UserDetailPage  />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App