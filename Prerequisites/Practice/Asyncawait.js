
//serial
// function fetchuserdata(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("User data loaded")
//         },2000);
//     }); 
// };

// function fetchanotheruserdata(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Another User data loaded")
//         },4000);
//     }); 
// };

// async function displayuserdata(){
//     console.log("Displaying...")

//     const A = await fetchuserdata();
//     const B = await fetchanotheruserdata();
//     console.log(A);
//     console.log(B);
//     console.log("fetching done");
// };

// displayuserdata();


//concurrent

// function A(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("First Promise")
//         },6000);
//     });
// }
// function B(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("2nd Promise")
//         }, 10000);
//     })
// };

// async function C(){
//     try{
//     const D = A();
//     const E = B();

//     const F = await D;
//     console.log(F);
//     const G = await E;
//     console.log(G);
//     }
//     catch(error){
//         console.log("Error occured", error);
//     }
// }

// C();

//parallel

function first(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("1st Done")
        },6000);
    });
}

function second(){
    return new Promise((resolve,reject)=>{
        let X =Math.random()>0.5;
        if(X){
            setTimeout(()=>{
                resolve("2nd Done")
            },2000);
        }
        else{
            setTimeout(()=>{
                reject("2nd not done")
            },4000);
        }
    });
}

function parallel(){
    Promise.all([(console.log(async ()=>{await first()})),
        (console.log(async ()=>{await second()}))]);
}
parallel();