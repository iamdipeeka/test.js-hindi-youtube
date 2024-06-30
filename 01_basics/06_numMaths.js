const score = 400;
console.log(score);

const balance = new Number (200.99);
console.log(balance);

console.log(balance.toFixed(3));
console.log(balance.toPrecision(1));
console.log(balance.toString());

const anotherbalance = 100000
console.log(anotherbalance.toLocaleString('en-IN'));


//*************maths************ 


console.log(Math)
console.log(Math.abs(-76));
console.log(Math.round(4.8));
console.log(Math.floor(4.8));
console.log(Math.ceil(3.1));
console.log(Math.min(4,6,9,10));

console.log(Math.random());
console.log(Math.floor(Math.random()*10 )+1); 
//for getting minimun 1 value

const min = 10
const max = 30

console.log(Math.floor(Math.random()*(max-min+1))+min)


