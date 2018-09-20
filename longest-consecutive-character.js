// Given a sequence of characters in a string. Write a function takes the string as an input and finds the longest subsequence within the string that consists of a single character. Return an object with the character as the key and the number as the value.

function longestSequence(str) {
    let max_count = 0;
    let max_char;
    let prev_char;
    let current;
    let count = 0;
    for (let i = 1; i < str.length; i++) {
        let current = i;
        let prev_char = str(i-1);
        if (prev_char = current) {
            max_count++;
            count = max_count;
        } else {
            count = 0;
        }

    }
    console.log(max_char);
}

const str = "eeeeiiiwwwhhhhggggglliqqaappp"
longestSequence(str);

