function Myname() {
    console.log('h');
    console.log('i');
    console.log('t');
    console.log('e');
    console.log('s');
    console.log('h');

}
//Myname()   

function addtwonumbers(number1,number2) {
//     console.log('hitesh');
//   let  result = number1+number2
//     return result 
       return number1+number2;
}

const result = addtwonumbers(3,5)

//console.log("Result:",result)

function userloginmessage(username) {
    return `${username} just logged in` //string interpollation

}
userloginmessage("hitesh")

//console.log(userloginmessage("hitesh"));

function calculatecartprice(val1,val2,...num1){
   return num1

}
console.log(calculatecartprice(200,400,500,700));


const user ={
    username :'hitesh',
    price : 99
}

function handleObject(Anyobject){
       console.log(`username is ${Anyobject.username} and price is ${Anyobject.price}`);
}

//handleObject(user)

handleObject({
    username :'hiteshh',
    price : 990

}) //function m object pass kr diye

const Mynewarray =[70,67,90,55]

function return2ndvalue(getarray){
    return getarray[2]
}

console.log(return2ndvalue(Mynewarray));





 
