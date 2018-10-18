// Write a function that reverses the words in a sentence

function reverseWords(str){
    let rev = [];
    let length = 0;
    for(var i = str.length-1; i>=0; i--){
      if(str[i]==' ' || i==0){
        rev.push(str.substr(i,length+1));
        length = 0;
      }
      else
        length++;
    }
    return rev.join(' ');
   }


console.log(reverseWords('Hello my name is Tim'));