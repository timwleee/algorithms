// Given an array and an additional value, insert this value at the beginning of the array without using any built-in array methods.


function pushToFront(arr, val) {
    var arr = [4,6,2,56,7,34,2];
    var val = 9;
    var newArr = [];

    newArr.push(val);
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

pushToFront();