const myNumers = [1,2,3,4,5,6,7,8,9]

//const newNums = myNumers.map( (num)=> num +10)

const newNums = myNumers.map((num)=>num + 10).map((num)=> num - 6).filter((num)=>num >=9)

console.log(newNums);