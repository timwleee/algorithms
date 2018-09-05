// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop()

function popFront(arr) {
    var arr = [3,61,7,29,3,72,11];
    var reversedArray = [];
    for (var i = arr.length-1; i >= 0; i--){
        reversedArray.push(arr[i]);
    }
    console.log(reversedArray.pop())
}

popFront();