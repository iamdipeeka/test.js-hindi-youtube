//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());

let myCreatedDate = new Date(2024,7,12);
console.log(myCreatedDate.toDateString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());