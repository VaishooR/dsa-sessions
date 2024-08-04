// Leetcode-2000 : Reverse Prefix of Word

var reversePrefix = function(word, ch) {
    if(!word.includes(ch)){
        return word
    }
    let rev="";
    let k=0;
    for(let i=0; i<word.length; i++) {
        rev += word[i];
        k++;
        if(word[i] == ch){
            break;
        }  
    }  
    return rev.split('').reverse().join('') + word.slice(k,word.length)
};
console.log(reversePrefix("abcd",'o'))
