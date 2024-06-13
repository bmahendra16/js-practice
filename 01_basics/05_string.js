const name = "Mahendra"
const repoCount = 50
// console.log(name + repoCount + " value");

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Mahendra-mb-mine")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf('a','a'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 5)
// console.log(anotherString);

const newStringOne = "    mahendra    "
// console.log(newStringOne);
// console.log(newStringOne.trim());// trimStart and trimEnd

const url = "https://mahendra%20mahendrawebsite"
// console.log(url.replace('%20', '-'));
// console.log(url.includes('mahendra'));
// console.log(url.includes('nisha'));


console.log(gameName.split('-'));