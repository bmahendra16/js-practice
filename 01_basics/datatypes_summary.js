// primitive 

// 7 types: String, Number,null, Boolean, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemperature = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 132453645787241343564n
// console.log(typeof bigNumber);

// Reference (Non-primitive)

// Array, Objects, functions

const friends = ["Chiran", "Bipin", "Jagdish", "kamal"]

let myObj ={
    name: "mahendra",
    aga:23,
}

let myFunction = function(){
    // console.log("hello world");
}


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  => object function
//        Object  =>  object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myGitHubName = "bmahendra16"

let anotherName = myGitHubName
anotherName = "mbohara16"

console.log(anotherName);
console.log(myGitHubName);
/* Stack ma koini first declear name change garera value change 
garesi tyo naya name ma purano name ko copy value aauxa 
ani tyo naya name ko value change garda copy ko value change 
hunxa but purano name ko value same hunxa jo hamle first ma 
declear garya hunxau */


let userOne = {
    email: "mbohara991@gmail.com",
    number: 9865903774
}

let userTwo = userOne

userTwo.email="mgoogle.com"

console.log(userOne.email);
console.log(userTwo.email);