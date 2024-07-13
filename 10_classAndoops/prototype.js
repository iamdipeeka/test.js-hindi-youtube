// let myname ="hitesh    "

// console.log(myname.truelength);


let myHero = ["spiderman","thor"]


let heropower = {
    thor:"hammer",
    spiderman : "sling",
    getspiderpower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function(){
    console.log('hitesh is present everywhere');
}

Array.prototype.heyhitesh = function(){
    console.log(`hitesh bole hello`);
}

heropower.hitesh() //prototype m property add kr skte h

myHero.hitesh()

myHero.heyhitesh()
// heropower.heyhitesh()  array m agr naya property dalenge to object usko access ni kr paega


//inheritance
const User = {
    name:"chai",
    email :"chai.com"
}
const teacher ={
    makevdo : true
}

const teachingsupport ={
    isavailable :false
}

const tasupport ={
    makeassingment :"js",
    fulltime:true
}
//modern syntax
Object.setPrototypeOf(teachingsupport,teacher)


let anotheuusername ="chaicode"
String.prototype.truelength =function(){
   // console.log(`${this.name}`);
   // console.log(this);
    console.log(`true length is: ${this.trim().length}`);
}

anotheuusername.truelength()
'icetea'.truelength()