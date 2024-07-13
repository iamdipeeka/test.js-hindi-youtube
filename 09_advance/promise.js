//create a promise

//method 1
const promiseone = new Promise(function(resolve,reject){
    //do an sync task
    //database,crypography,network
    setTimeout(function(){
              console.log('async task is complete');
              resolve()
    },1000)
})
//promise consume
promiseone.then(function(){
    console.log("promise consumed");
})
//method 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2 is complete');
        resolve()
    },1000)
}).then(function(){
    console.log('promise is consumed');
})

//methode 2

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){


        resolve({username:'chai',
                  email:"chai@eg.com"
        })
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})

//method 3
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'hitesh',pswrd:'1234'})
        } else{
            reject('ERROR:something went wrong')

        }
    },2000)
  
})
promisefour
.then(function(user){
    console.log(user);
    return user.username
})
.then((username)=>{
console.log(username);
})
.catch((error)=>{
      console.log(error);
}).finally(()=> console.log('the promise is either resolved or rejected'))


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'javascript',pswrd:'1234'})
        } else{
            reject('ERROR:js went wrong')

        }
    },2000)
});

//async await
// async function consumepromisefive(){
//    const random= await promisefive
//    console.log(random);
// }

// consumepromisefive()

async function consumepromisefive(){
    try{
        const response = await promisefive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumepromisefive()

// async function getallusers(){
//     try{
//    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
// //   const data = response.json()
// //   console.log(data);
// console.log(response);
// }catch(error){
//     console.log('E', error)
// }
// }

// getallusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
      return response.json()
}).then((data)=>{
       console.log(data);
})


.catch((error) => console.log(error));




