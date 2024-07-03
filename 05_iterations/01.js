//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==7){
       // console.log("7 is the best number");
    }


    //console.log(element);
    
}

// for(let i =0;i<=5;i++){
//     console.log(`outer loop value ${i}`);
//     for(let j =0;j<=5;j++){
//         //console.log(`outer loop value ${i} and inner loop value ${j}`);
//         console.log(i+'*'+j+ '=' +i*j);
//     }
// }

// let myarray = ['superman ','batman','flash']

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

//break and continue

for (let i = 0; i <=20; i++) {

    if(i==5){
        console.log(`detected 5`);
        break;
    }
    console.log(i);
    
}
for (let i = 0; i <=20; i++) {

    if(i==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(i);
    
}