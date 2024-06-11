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
    console.log("hello world");
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