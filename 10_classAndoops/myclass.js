// //ES6

// class user{
//     constructor(username,email,password){
//         this.username= username
//         this.email=email
//         this.password=password
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai","chai@gmail.com","12378vbnn")

// console.log(chai.encryptpassword());
// console.log(chai.changeusername());

//behind the scene
function user(username,email,password){
        this.username= username
        this.email=email
        this.password=password
     }

     user.prototype.encryptPassword = function(){
        return `${this.password}abc`
     }
     const tea = new user("tea","tea@gmail.com","123")

     console.log(tea.encryptPassword());
     console.log(tea.username);
