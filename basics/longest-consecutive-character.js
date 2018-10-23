// Given a sequence of characters in a string. Write a function takes the string as an input and finds the longest subsequence within the string that consists of a single character. Return an object with the character as the key and the number as the value.

function longestSequence(str) {
    let max_count = 0;
    let max_char;
    let prev_char;
    let current_char;
    let current_count = 1;
    for (let i = 2; i < str.length; i++) {
        let current_char = str.charAt(i);
        let prev_char = str.charAt(i-1);
        if (current_char === prev_char) {
            max_count++;
            max_char = current_char;
        } else { 
            current_count = 1;
        }
        if (current_count > max_count) {
            max_count = current_count;
            max_char = current_char;
        }
        prev_char = current_char;
    };
    console.log(max_char);
    console.log(max_count);
}

const str = "eeeeiiwwwhhhhggggglliqqaappp"
longestSequence(str);

