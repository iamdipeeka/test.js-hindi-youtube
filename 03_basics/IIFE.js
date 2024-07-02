//immediately invoked function expressions (IIFE)

(function chai(){  //named iife
    console.log(("DB connected"));
})();

//chai()

(() =>{
    console.log("DB connected two");
})();

(function aurcode(name){
    console.log(`DB connected two  ${name}`);
})("hitesh");

