//constructor
//const tinderuser = new object ()
const tinderuser ={};

tinderuser.id = '123drf';
tinderuser.name = 'sam'
tinderuser.isLoggedin = false;
// console.log(tinderuser);

const regularuser ={
    fullname :{
        userfullname:{
            firstname:'hitesh',
            lastname:'choudhary'
        }
    }
}
//console.log(regularuser.fullname);

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'a',2:'b'}

//const obj3 = {obj1,obj2} will not merge but object under object
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);


console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedin'));



//part 3 destructuring

const course =  {
    coursename : 'java script',
    price :45,
    courseInstructor : 'hitesh'
}

const {courseInstructor:Instructor} =course
console.log(Instructor);


