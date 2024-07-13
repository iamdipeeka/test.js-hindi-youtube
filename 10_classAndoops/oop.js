//object literals
const user = {
    username :'hitesh',
    logincount : 44,
    signedIn : true,

 getuserdetails() {
        //console.log("got user details from database");
       // console.log(`Username : ${this.username}`);
       // console.log(this);
    }

}
//console.log(this);
// console.log(user.username);
// console.log(user.getuserdetails());

//const promiseone = new promise ()
//here new is a constructor function from new keyword we can have multiple instance by one object
//new context

function User (username,logincount,isloggedin){
    this.username = username
    //this.username is for var And username for value i am passing
    this.logincount = logincount
    this.isloggedin = isloggedin

    return this

}

const userOne = new User("hitesh",12,true)
const usertwo = new User("chaicode",34,false)

console.log(userOne.constructor);
console.log(usertwo);

//when u add new keyword , firstly a empty object is created is called new instance
//steps 
//1.new object will be created
//2.constructor function is called
//3.all argument comes under this keyword
//constructor give reference of its own property

//instanceof se instance check kr skte h 





