//copy the elements of one array to another array
arr=[1,2,3,3];
let arr2=[];
    let m=(()=>{
    let i=0;
for(a of arr){
    
  arr2[i]=a+5;
  i++
}
console.log(arr2);
}
)
console.log(m());
===================================================================================================
let arr = [1, 2, 3, 3];

let m = arr.map((element) => {
    return element + 5;
});

console.log(m);
=====================================================================================
let arr = [1, 2, 3, 3];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i] + 5;
}

console.log(arr2);
========================================================================================
let arr = [1, 2, 3, 3];
let arr2 = [];

let i = 0;
for (let element of arr) {
    arr2[i] = element + 5;
    i++;
}

console.log(arr2);
