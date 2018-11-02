// Given a number and an array, find a pair of numbers in an unsorted array that equals the given sum

function findSum(arr, sum) {
    for(i = 0; i < arr.length-1; i++){  
        for(j = i + 1; j < arr.length; j++){
           if (arr[i] + arr[j] == sum)
               console.log(arr[i], arr[j]);
        }
     }
     return false;
}

findSum([6,2,8,9,2,1,7,3], 17)
