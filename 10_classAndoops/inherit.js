class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
addcourse(){
    console.log(`a new course was added by ${this.username}`);
}

}

const chai = new teacher("chai",'teacher.com',"12335")
chai.addcourse()

