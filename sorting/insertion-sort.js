// // function insertionSort(arr) {
// //     for (var i = 0; i < arr.length; i++) {
// //         for (var j = 1; j < arr.length; j++) {
// //             if (arr[j] < arr[i]) {
// //                 var temp = arr[j];
// //                 arr[j] = arr[i];
// //                 arr[i] = temp;
// //             }
// //         }
// //     }
// //     return arr;
// // };

// console.log(insertionSort([5,23,6,13,3,1,7,12]));


function insertionSort (arr) {
    for (var i = 0; i < arr.length; i++) {
        let current = arr[i]
        // store the current item value so it can be placed right
        for (var j = i - 1; j > -1 && arr[j] > current; j--) {
            // loop through the arr in the sorted array (the arr from the current to the beginning)
            // copy each item to the next one
            arr[j + 1] = arr[j]
        }
        // the last item we've reached should now hold the value of the currently sorted item
        arr[j + 1] = current
    }
    
    return list
}

const list = [6,45,84,51,64,8,465,4,89,3]
console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]

