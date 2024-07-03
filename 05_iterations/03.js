//for of loop
["","",""]
[{}] //object under array

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"

for (const greet of greetings) {
    console.log("char is  " +greet);
}

//map

const map = new Map()
map.set('IN',"india")
map.set('USA', "united states of america")
map.set('FA',"france")

console.log(map);

for (const [key,value] of map) {
    console.log(key , ":-",value);
}