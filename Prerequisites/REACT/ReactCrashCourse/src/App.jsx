import React from 'react'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider, BrowserRouter, Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Mainlayout from './Layouts/Mainlayout'
import Jobspage from './Pages/Jobspage'
import Notfoundpage from './Pages/Notfoundpage'
import Jobpage, {jobLoader} from './Pages/Jobpage'
import Addjobpage from './Pages/Addjobpage'
import EditJobPage from './Pages/EditJobPage'


const App = ()=>{
  //addnewjob
const addjob= async (newJob)=>{
  const response = await fetch('/api/jobs',{
    method: "post",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob),
  
  });
  return;
};

//deletejob

const deleteJob = async (id)=>{
  const response = await fetch(`/api/jobs/${id}`,{
    method: "DELETE",
  
  });
  return;

};

//update job

const updateJob = async (job)=>{
  const response = await fetch(`/api/jobs/$(job.id)`,{
    method: "PUT",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job),
  
  });
  return;
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout/>}>
          <Route index element={<Homepage />} />
          <Route path='/jobs' element={<Jobspage />}/>
          {/* <Route path='/jobs/:id' element={<Jobpage/>}/> */}
          <Route path='/jobs/:id' element={<Jobpage deleteJob={deleteJob}/>} loader={jobLoader}/>

          <Route path='/add-job' element={<Addjobpage addJobSubmit={addjob}/>}/>
          {/* whenevr I fire this function, that function above will fire off too */}

          <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>
          
          <Route path='*' element={<Notfoundpage/>}/>
          
        
        </Route>
   )
)



  return <RouterProvider router={router}/>
}

export default App