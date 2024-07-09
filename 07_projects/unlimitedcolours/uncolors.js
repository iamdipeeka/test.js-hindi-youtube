//generate a random color

const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 8; i++) {
        color+=hex(Math.floor(Math.random()*16) )
        
    }
    return color
};

//console.log(Math.floor(Math.random()*16) )
let intervalid;
const startchangingcolor = function(){
    function changebgcolor(){
    document.body.style.backgroundColor = randomcolor}  

    if(!intervalid){
   intervalid= setInterval(changebgcolor,3000 );  
};}

const stopchangingcolor = function(){
 clearInterval(intervalid);
 intervalid=null;
};

document.querySelector('#start').addEventListener
('click',startchangingcolor)
document.querySelector('#stop').addEventListener
('click',stopchangingcolor)