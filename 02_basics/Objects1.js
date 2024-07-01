//Singleton
//object literals

//object = JSuser

const mysym = Symbol('key1')

const JSuser = {
    name :'hitesh',

    [mysym]:'mykey1',
    'full name': 'hitesh choudhary',
    Age : 20,
    email : 'hitesh@gmail.com',
    Isloggedin : false ,
    lastLogin : ['monday','saturday']


}

console.log(JSuser[mysym]);

// you can access by putting dot / []

console.log(JSuser.email);
console.log(JSuser['email']);
console.log(JSuser['full name']);

JSuser.email = 'hitesh@chatgpt.com'
// Object.freeze(JSuser) //iske freeze hone ke bd koi v value chng ni kr skte
// JSuser.email='dipeeka@gmail.com';
// console.log(JSuser);

JSuser.greeting = function(){
    console.log('hello js user');

}
console.log(JSuser.greeting());

JSuser.greetingtwo = function(){
    console.log(`hello js user , ${this.name}`);

}
console.log(JSuser.greetingtwo());



