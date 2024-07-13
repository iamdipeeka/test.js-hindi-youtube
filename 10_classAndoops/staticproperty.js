class User{
    constructor(username){
       this.username=username
    }

    logme(){
        console.log(`username is ${this.username}`);
    }

   static createid(){
        return  ( Math.round(Math.random()*10))
    }
}

// const hitesh = new User ('hitesh')
// console.log(hitesh.createid())

//static word sbko access ni krne deta function ko

class teacher extends User{  //extends inherit krne k liye use hua
    constructor(username,email){
        super(username)
        this.email=email
    }

}

const iphone = new teacher("iphone",'i@phone.com')
iphone.logme()