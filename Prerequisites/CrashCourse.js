console.log("Hello");

const a = 80;
console.log(a); 
// a = 90;      //Can't reassign using const
console.log(a);

let b = 100;
console.log(b);
b = 110;            // Can reassign using const
console.log(110);
// let b = 90;
// console.log(b);    //can't redeclare any variable

//Datatypes
//primitive
const string = "Mahin";
const numbear = 90;
const boolean = true;
const c = undefined;
const d = null ;
//non-primitive
//object literals
const object = {
    name: "Mahin",
    age: 25,
    hobby: "Gaming"
};
console.log(object);
console.log(object.name)

//array
const arr=[1,2,3,4,5];
console.log(arr[1]);


//operators
//assignment
let e = "abc";
console.log(e);


//arithmetic
let f = 10;
let g = 25;
console.log(g-f);

//comparison
console.log(f<15 && 15<25);
console.log(f>15 || 15>g);
//logical
console.log(f!=11); //! means not

let age = 20;
let status = age<18 ? "kid":"adult";
console.log(status);

//type conversions
//implicit e js nije convert kore
//ar explicit e ami niye convert korbo


//implicit
console.log(2+"3");
console.log(2-"3");
console.log("Faiazur"+"Rahman");
console.log("Faiazur"-"Rahman");
console.log("2"*"3");  //string but the type gets auto converted

//false is 0, true is 1;

console.log(true+true);
console.log(true+false);
console.log(true+null);  //null is also 0
console.log(true+undefined); //undefined will give NaN

//explicit
console.log(Number("1000"));
console.log(parseInt("123",10));
console.log(parseInt("abc123"));
console.log(parseInt("1010", 10));
console.log(parseInt("10.99"));  //it just reads upto 10 and stops, thus gives 10 as answer

//full decimal print er jonno parsefloat
console.log(parseFloat("10.99"));

//parseint has 2 args - string and radix
console.log(String(500));  //prints 500 as string...check output
//alternate to print string
console.log((100).toString());


console.log(Boolean(10));
console.log(Boolean(null));  //null, undefined,0, '',Nan are all 0