// Leetcode-1662 : Check If Two String Arrays are Equivalent


// APPROACH-1 (Using In-Built methods)
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') == word2.join('')
};
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))
console.log(arrayStringsAreEqual(["a","cb"],["ab","c"]))
console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]))


// APPROACH-2 
var arrayStringsAreEqual1 = function(word1, word2) {
    let w1 = word1.join('') 
    let w2 = word2.join('')
    if(w1.length != w2.length){
        return false
    }
    for(let i=0;i<w1.length;i++){
        if(w1[i] != w2[i]){
            return false
        }
    }
    return true
};