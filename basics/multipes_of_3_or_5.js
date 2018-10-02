// Write a function that takes an array and returns the sum of all multiples of 3 and 5

function findSum(arr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
    console.log(sum);
}

arr = [3,6,5,1,8];
findSum(arr);