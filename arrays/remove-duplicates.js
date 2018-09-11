// Given a sorted array, remove duplicate values. Do this without using any built-in array methods.

function removeDuplicates() {
    var arr = [8,46,5,64,9,5,27];
    var temp;
    for (var i = 0; i < arr.length; i++) {
        temp == arr[i];
        console.log(temp);
        for (var j = 1; j < arr.length; j++) {
            if (temp === j) {
                arr.splice(i,1);
                arr.splice(j,1);
            }
        }
    }
    console.log(arr);
};

removeDuplicates();