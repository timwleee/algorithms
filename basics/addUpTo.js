// Write a function that calculates the sum of all numbers from 1 up to and including n
function addUpTo(n) {
    let sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum)
}

addUpTo(10);