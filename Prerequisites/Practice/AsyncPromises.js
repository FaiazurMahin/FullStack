//A

// const A = new Promise((resolve,reject)=>{
//     let ordersuccess = true;
//     if(ordersuccess){
//         resolve("Pizza is ready!")
//     }
//     else{
//         reject("Pizza shop is closed!");
//     }
// });

// A
// .then((message)=>{
//     console.log("Yumm",message)
// })
// .catch((error)=>{
//     console.log("Sigh",error);
// });

//B

// console.log("A");

// const B = new Promise((resolve,reject)=>{
//     let ordersuccess=true;
//     if(ordersuccess){
//         setTimeout(()=>resolve("Pizza is ready!"),3000);
//     }
//     else{
//         setTimeout(()=>reject("Pizza Shop is closed!"),3000);
//     }
// });

// B.
// then((message)=>{console.log("YUM", message)})
// .catch((error)=>{console.log("SIGH", error)});


// console.log("B");


//C

// const C = new Promise((resolve,reject)=>{
//     let ordersuccess=true;
//     if(ordersuccess){
//         resolve("Pizza is ready");
//     }
//     else{
//         reject("Pizza isn't ready");
//     }
// });

// C.
// then((message)=>{console.log("YUM", message);
//     return "YUM YUM" 
// })
// .then((moremessage)=>{console.log("SO GOOD", moremessage);
//     return "its really good"
// })
// .then((finalmessage)=>{console.log("AIGHT DONE EATING", finalmessage);
//     // return "phew bloody delicious";
// })
// .catch((error)=>{console.log("MAN, ", error)});


//D

// const C = new Promise((resolve,reject)=>{
//     let ordersuccess=true;
//     if(ordersuccess){
//         resolve("Pizza is ready");
//     }
//     else{
//         reject("Pizza isn't ready");
//     }
// });

// C.
// then((message)=>{console.log("YUM", message);
//     return "YUM YUM" 
// })
// .then((moremessage)=>{console.log("SO GOOD", moremessage);
//     return "its really good"
// })
// .then(()=>{throw new Error("OH NO, it fell on the ground");
// })
// .catch((error)=>{console.log("MAN, ", error.message)});


//promise.all

// const A = new Promise((resolve)=>{
//     resolve("P1");
// });

// const B = new Promise((resolve)=>{
//     resolve("P2");
// });

// const C = new Promise((resolve,reject)=>{
//     reject("P3");
// });

// Promise.all([A,B,C])
// .then((value)=>{
//     console.log(value, "Fulfilled");
// })
// .catch((error)=>{
//     console.log(error,"Unfulfilled")
// });

//promiserace

// const D = new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject("Maybe1st")},3000)
// });

// const E = new Promise((resolve)=>{
//     setTimeout(()=>{resolve("Sikeee I'm 1st")}, 2000);
// });

// Promise.race([D,E])
// .then((message)=>{
//     console.log("hehe", message)
// })
// .catch((err)=>{
//     console.log("hehe",err)
// });

//promise.allsettled

// const F = new Promise((resolve)=>{
//     setTimeout(()=>{resolve("Done")},3000);
// });

// const G = new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject("Error")},5000);
// });

// Promise.allSettled([F,G])
// .then((value)=>{
//     console.log("congrats", value);
// });

