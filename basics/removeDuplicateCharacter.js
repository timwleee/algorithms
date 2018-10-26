// Write a function that removes duplicate characters from a string

function removeDuplicateCharacters(str) {
    let char;
    let charCount = {};
    let newStr = [];    
    for(i =0; i<str.length; i++){
        char = str[i];
        if(charCount[char]){
          charCount[char]++;
        }
        else
          charCount[char] = 1;
      }
      for (var j in charCount){
        if (charCount[j]==1)
           newStr.push(j);
      }
      return newStr.join('');
}

console.log(removeDuplicateCharacters('Learn more javascript dude'));