
//var c = 300

let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER",a );
}


//console.log(a);
//console.log(b);
console.log(c);
 
function one(){
        const username = "hitesh"

        function two(){
            const website = "youtube"
            console.log(username);
        }
        //console.log(website);

        //two()
}

one()
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username=website);
    }

   // console.log(website);

}
//console.log(username);

//INTERESTING

console.log((addone(5)));

function addone(num){   //expression
    return num +1;
}

//addone(5)

const addtwo = function(num){
    return num +2
}

addtwo(6)   //declaration se phle access in kr skte addone ki trh qki yha const deke function bnae the