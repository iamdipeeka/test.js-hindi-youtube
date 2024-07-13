function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log('called');
}
function createuser(username,email,password){
    SetUsername.call(this.username)
    this.email=email
    this.password=password
}
const chai = new createuser("chai","chai@fb.com","1234")
console.log(chai);