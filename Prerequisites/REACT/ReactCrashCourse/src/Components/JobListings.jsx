import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'
import Spinner from './Spinner'

import { useState, useEffect } from 'react'

const JobListings = ({showalljobs=false}) => {

  
// const recentJobs = jobs.slice(0,3);   // 3ta kore jate dekhai
const [jobs,setjob] = useState([]); //empty array karon karon we wanna record the response of the api,
// when we use useeffect
const [loading, setloading] =useState(true);  //reload korle jate loading je hoche sheta dekhai
//ekhane true dibo karon..fetch er time e jate loading dekhai..shesh hole false

//useeffect ekta function arekta dependance array nei,aray te oita dibo jeta change hobe
//everytime that thing changes in that array, the useEffect will run

useEffect(()=>{
  const fetchjobs = async ()=>{

    const apiurl = !showalljobs ? 'api/jobs/?_limit=3' : 'api/jobs/' 

    try{
      const response = await fetch(apiurl);
    const data = await response.json(); 
    setjob(data);
    }
    catch (error){
      console.log('Error Fetching', error)
    }
    finally{
      setloading(false);
    }
  }
  fetchjobs();
},[])

// const showornot =  !showalljobs ? recentJobs : jobs;
  return (
    <>
    {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {!showalljobs? 'Browse jobs':'All jobs'} 
        </h2>
        
      
          {/* <!-- Job Listing 1 --> */}

          {loading ? <Spinner/> : 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs .map((job)=>(
            <JobListing key={job.id} job={job}/>
        ))}
        </div>
          }
      </div>
    </section>
    </>
  )
}

export default JobListings