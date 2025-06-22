const orderfromA = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(" Done in 5 secs")
    },5000);
});

const orderfromB = new Promise((resolve,reject)=>{
    let ordersuccess=Math.random()>0.5;
    if(ordersuccess){
        setTimeout(()=>resolve("Done in 8 secs"),8000);
    }
    else{
        setTimeout(()=>reject("Will take more time"),8000);
    };
});

Promise.all([orderfromA,orderfromB])
.then((message)=>{
    console.log("Both order's received", message);
})
.catch((error)=>{
    console.log("Sorry", error);
});

Promise.race([orderfromA,orderfromB])
.then((message)=>{
    console.log("yay", message);
})
.catch((err)=>{
    console.log("still yay",err);
});

Promise.allSettled([orderfromA,orderfromB])
.then((message)=>{
    console.log("Done",message);
})
.catch((err)=>{
    console.log("Rejected", err);
});

