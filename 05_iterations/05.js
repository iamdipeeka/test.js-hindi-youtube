const coding =['js','c++','ruby','py','java']   

// coding.forEach(function(item){

//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.foreach(printme)

const myCoding = [
    {
        languageName:"javascript",
        Filename:'js'

    },

    {
        languageName:"java",
        Filename:'java'
    },
    {
        languageName:"c++",
        Filename:"cpp"
    }
]
myCoding.forEach((item )=>{
    console.log(item.languageName);
})