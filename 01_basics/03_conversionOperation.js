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