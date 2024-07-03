const useremail = []

if(useremail){
    console.log("got user email");
} else {
    console.log("dont have user email");
}

//false value : false , 0  , -0 , undefined , null , bigInt 0n,NaN,""
//truthy value : "0","false"," ",[],{} , function(){}

if (useremail.length ===0){
    console.log("array is empty");
}

const emptyobj ={}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
}

//nullish coalescing operator (??) for null and undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 5
console.log(val1);
val1 = undefined??6
console.log(val1);
val1 = null??10??20
console.log(val1);


//ternary operator 
//condition ?message for true : message for false

const Iceteaprice = 100;
Iceteaprice>=40 ? console.log("expensive"):console.log("cheap");

