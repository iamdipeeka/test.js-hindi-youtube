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
console.log(regularuser.fullname);

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'a',2:'b'}

//const obj3 = {obj1,obj2} will not merge but object under object
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);