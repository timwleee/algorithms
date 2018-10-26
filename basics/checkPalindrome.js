// Write a function that accepts a string and returns a boolean to check if it is a palindrome

function palindrome(str) {
    for (i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length-1-i]) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(palindrome('mommom'));