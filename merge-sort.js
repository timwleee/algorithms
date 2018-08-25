function mergeSort(arr){
    // Array being length of 1 is our base case: it is technically sorted
    if(arr.length === 1){
        return arr;
    }
    // Determine mid if length > 1, then slice array in half
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0,mid);
    var right = arr.slice(mid);
    // We call the merge function with both halves, but the function call has to wait until we recursively 
    // split up every single value into individual components. After they are all individual, the stack
    // starts to collapse and merges every subset
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left,right){
    // Takes two sorted arrays and returns final combined sorted array
    // l and r act as iterators for left and right array respectively
    var l = r = 0;
    // final combined array
    var arr = [];
    // run through loop until we hit end of one of the two arrays
    while(l < left.length && r < right.length){
        // compare the values in each array, only moving the respective iterator forward
        // and pushing to the final array
        if(left[l] < right[r]){
            arr.push(left[l]);
            l++;
        } else {
            arr.push(right[r]);
            r++;
        }
    }
    // at the end of the loop, one iterator is at the end, determine which in order to push
    // the rest of the other array onto the final
    if(l == left.length){
        arr = arr.concat(right.slice(r));
    }else{
        arr = arr.concat(left.slice(l));
    }
    return arr;
}
var result = mergeSort([10,1,9,2,8,3,7,4,6,5])
console.log(result);