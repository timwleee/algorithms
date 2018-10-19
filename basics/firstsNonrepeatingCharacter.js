// Write a function that returns the first non-repeating character in a string

function firstNonRepeatingCharacter(str) {
    let current;
    let characters = {};
    for (let i = 0; i < str.length; i++) {
        current = str[i];
        if (characters[current]) {
            characters[current]++
        }
        else {
            characters[current] = 1;
        }
        for (j in characters) {
            if (characters[j] == 1) {
                return j;
            }
        }
    }
}

console.log(firstNonRepeatingCharacter("ttmoop"))