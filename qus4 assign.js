
let d=(arr,...args)=>[ ...arr,...args.map((v)=>v*2),];//yha direct return hua he

let arr=[1,3,5];
let result=d(arr,2,33); 
console.log(result);