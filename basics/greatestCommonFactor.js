// Write a function that takes two integers and finds their greatest common factor

function greatestCommonFactor(a,b) {
    let current = 1;
    let gcf = 1;
    while (current <= a && current <= b) {
        if (a % current == 0 && b % current == 0) {
            gcf = current;
        }
        current++;
    }
    return gcf;
}

console.log(greatestCommonFactor(30,45));