// Write a function that counts the number of zeroes from 1 to n

function numberOfZeroes(n) {
    let count = 0;
    while(n > 0){
        count += Math.floor(n/10);
        n = n/10;
    }
    return count;
    }
      
console.log(numberOfZeroes(1000));