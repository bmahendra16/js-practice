//Dates

const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);//output = 'object'

// let mycreatedDate = new Date(2023, 0, 20)
// let mycreatedDate = new Date(2023, 0, 20, 5, 4, 3)
// let mycreatedDate = new Date("2023-01-23")
let mycreatedDate = new Date("02-20-2021")
// console.log(mycreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and time is`

newDate.toLocaleString('default', {
    weekday: "long"

})
console.log(newDate.toLocaleString());