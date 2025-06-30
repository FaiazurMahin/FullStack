// //Settimeout
// function greet(){
//     console.log("Hello");
// }
// setTimeout(greet,10000);  //min 6 sec por run korbe

// //cancel settimeout
// function greetagain(name){
//     console.log("Hello "+name);
// }
// setTimeout(greetagain,10000,'Ave'); //eita ageh run hoi karon timoeut ageh diya
// //thus its async now

// function contgreet(){
//     console.log("hola");
// }
// const A = setTimeout(contgreet,10000);  
// clearTimeout(A);    //doesnt print as I cancelled it right away


// function greetgreet(name){
//     console.log("Hello"+name)
// }
// const B = setInterval(greetgreet,3000,"Sekai");    //1st interval e 100 lagle, next interval e 90
// clearInterval(B);

//recursion                                 //ekhane shob intervalk e same lagbe
// function Z(){
//     console.log("Recursion");  //works same as timeinterval
//     setTimeout(Z,2000);
// }
// Z();   //2 sec por pori recursion print hobe

//thats why all prefers recursion

// setTimeout(function Y(){
//     console.log("Hey");
//     setTimeout(Y,2000);
// } , 2000);

///callback function
// function Y(name){
// console.log(name+" , holaaa");
// }

// function X(name, Y){
//     Y(name);
// }

// X("Ave",Y)

// function resolve(){
//     console.log("Taco Van is here")
// }

// function reject(){
//     console.log("No tacosss, sorehhhh")
// }
//even tho eigula callback function..eigula lada state kora lagbena
//coz inbuilt functions of js

// const W = new Promise((resolve,reject)=>{
//     let cangettacoss = true;
//     if(cangettacoss){
//         resolve("Getting Tacos boii");
//     }
//     else{
//         reject("No tacos sorehh");
//     }
// })
// W
// .then((message)=>{
//     console.log("Sets up the table, les goooo", message)
// })
// .catch((error)=>{
//     console.log("Geez, pasta time boii", error);
// });


//async function---always returns promise even when we dont manually return promise inside the async function

// function A(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{resolve("Hello")},3000);
//     });
// };

// async function B(){
//     console.log("Greeting");
//     const C = await A();
//     console.log(C);
//     console.log("How're you?");

// }

// B();