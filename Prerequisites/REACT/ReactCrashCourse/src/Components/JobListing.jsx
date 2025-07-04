import React from 'react'
import { useState } from 'react'
import {FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobListing = ({job}) => {
const [showcurrentstate,wannaSeeMore] = useState(false);

let description = job.description;

if(!showcurrentstate){
  description= description.substring(0,90)+"...";
}

  return (
    <>
    <div className="bg-gray-100 rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>

              <div className="mb-5">
               {description}
              </div>
              <button onClick={()=>wannaSeeMore((prev)=>!prev)} className='text-blue-800 font-bold hover:text-red-600'>{!showcurrentstate ? "More": "less"}</button>

              <h3 className="text-indigo-500 mb-2">{job.salary}/Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3 font-bold">
                  <FaMapMarker className='text-lg m-2 inline'/>
                  {job.location}
                </div>
                <Link
                  to={`/jobs/${job.id}`}  //this is same as "job"+job.id
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
    
    </>
  )
}

export default JobListing