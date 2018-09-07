// Give an array and an index into array, remove and return the array value at that index. Do this without using any built-in array methods except pop().

function removeAt(arr,index) {
    var arr = [98,234,1,2,6,546,51,12,6]
    var index = 3
    var newArr = [];
    for (var i = 0; i < index; i++) {
        newArr.push(arr[i]);
    }
    for (var i = index+1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
    console.log(arr[index]);
}

removeAt();