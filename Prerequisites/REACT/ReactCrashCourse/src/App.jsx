import React from 'react'

export const App = () => {
const name = "Mahin"
const no1= 2;
const no2=3;
const naaam =["Deni", "Mahin", "Imam", "Ryan", "Dibosh"];
const loggedinmembers = true;

  return (                            //protita function ekta jinishi return korte parbe hence multiple
                                      //div possible na butttt, ekta dive diye enclose kore, bhitore ekgada rakha
                                      //possible
    <>
    <div style={{color: 'red', fontSize:"25px", border:"2px solid black", margin:"5px"}}>Hello</div>
    <p>holaaaa</p>
    <p>Halo {name}</p>
    <p>The sum of {no1} and {no2} is {no1+no2}</p>
    <ul>
      {naaam.map((X,index)=>(<li key={index}>{X}</li>))}
    </ul>
    {loggedinmembers ? "Hello Member":"Hello Guest"}
    </>
  )
}

export const App1 = () => {
  return (
    <div className="flex justify-center bg-amber-200 border-amber-950 border-4 my-4">
           HELLO EVERYONE
    </div>

  )
}





