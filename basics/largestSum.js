// Given an array of integers, find the largest sum of any two

function largestSum(arr) {
    let biggest = 0;
    let secondBiggest = 0;
    let sum;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    for (j = 0; j < arr.length; j++) {
        if (arr[j] > secondBiggest && arr[j] != biggest) {
            secondBiggest = arr[j]
        }
    }
    return biggest + secondBiggest;
}

arr = [3,25,15,6,19,33,21];
console.log(largestSum(arr));