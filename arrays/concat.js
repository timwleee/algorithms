// Replicate JavaScript's concat() method. Create a stadalone function that accepts two arrays. Return a new array containing the first aray's elements, followed by the second array's elements

function concat(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr2[i]);
    }
    console.log(newArr);
};

concat(["hi", "my"], ["name", "is"]);