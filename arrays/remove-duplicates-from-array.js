//Write a function that removes duplicates from an array

let a = [1,2,3,4,1,5,6,7];
let obj = {};

for (let i in a) {
    obj[i] = true;
}

let b = Object.keys(obj);

console.log(b);