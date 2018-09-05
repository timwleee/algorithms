// Given an array, index, and a value, insert the value into the array at the given index without using any built-in methods.

function insertAt(arr, index, val) {
    var arr = [6,23,7,5,84,26,3,1]
    var index = 3
    var val = 10
    var newArr = [];
    
    for (var i = 0; i < index; i++) {
        newArr.push(arr[i]);
    }
    newArr.push(val);
    for (var i = index; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

insertAt();