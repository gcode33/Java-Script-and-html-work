// JavaScript Document
let arr = [2,5,9,6,1117,117,17,8,7];
let arr1 = [];
for(let i = 0; i < arr.length-1; i++){
     if (arr[i] !== arr[i+1]) {
         arr1.push(arr[i], arr[i+1]);
     }
}

document.write(`the answer is ${arr1}`);

