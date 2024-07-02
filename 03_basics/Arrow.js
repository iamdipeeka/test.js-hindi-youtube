const user = {   //user is object
       username : 'hitesh',
       price : 999,


       welcomeMessage : function(){
           console.log(`${this.username}, hello welcome ji`);
           console.log(this);   
       }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);


// function chai(){
//     console.log(this);
// }
// chai()    //function m this kam ni krta

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai ()   //undefined hi dega

const chai =  ()=>{
    let username = "hitesh"
    console.log(this.username);
}
//chai ()

// const addtwo = (num1 ,num2) => {
//         return num1+num2
// }   explicit return

//const addtwo = (num1,num2) => (num1+num2) //implicit return

const addtwo = (num1,num2) => ({username:"hitesh"})
console.log(addtwo(3,4));  






