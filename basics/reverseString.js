str = 'javascript';

function reverseString(str) {
    let newArray = []
    let splitString = str.split('');
    for (var i = splitString.length-1; i >= 0; i--) {
        newArray.push(splitString[i]);
    }
    let newString = newArray.join('');
    console.log(newString);
};

reverseString(str);