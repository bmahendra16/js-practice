let score = true

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);
// if we convert string or NaN into number then it is converted but value of this converted string or NaN is still NaN
// if we convert null into number then it is converted but value of this converted null is 0
// if we convert undefined into number then it is converted but value of this converted undefined is still NaN
// if we convert boolean(ture or false) into number then it is converted but value of this converted boolean is 1 if it boolean is true or 0 of boolean is false
// "33" => 33
// "33abc" => NaN
// true => 1 or false => 0


let IsLoggedIn = "0"

let booleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log( booleanIsLoggedIn);

// 1 => ture; 0 => false
//"" => false; "ahibaf" =>true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ---------------------Operations--------------------------------------

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Mahendra"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2) ;
// console.log(1 + 2 + "2") ;


// console.log(2 * 3 + 4 % 5);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100 
++gameCounter;          // read about prefix and post fix js form mdn with search prefix and postfix js mdn 
console.log(gameCounter);


let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// link to study (https://tc39.es/ecma262/#sec-type-conversion)