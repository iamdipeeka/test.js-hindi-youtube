//If

//const isuserloggedin = true

// const temp = 41
 
// if(temp>30){
//     console.log("greater than 30");
// }
// else{
// console.log("lesser than 30");}

// const score = 200

// if (score >100){
//     const power = "fly"
//     console.log(`user power : $(power)`);
// }

// console.log(`user power : $(power)`);

//const balance = 1000
 //if (balance>500) console.log("test"); //implicit scope within one line understood that it has scope

//  if(balance<500){
//        console.log("less than 500");
//  } else if(balance<750){
//        console.log("less than 750");

//  } else if (balance <900){
//     console.log("less than 900");
//  }

//  else {
//     console.log("less than 1200");
//  }

const userloggedin = true
const Debitcard = true
const loggedinfromgmail = false
const loggedinfromgoogle = true

if(userloggedin && Debitcard){
    console.log("user is allowd to buy course");
}

if(loggedinfromgmail || loggedinfromgoogle){
    console.log("user is logged in");
}






