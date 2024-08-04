// Leetcode-66 : Plus One

// APPROACH-1 (Using BigInt to handle large numbers)
var plusOne = function(digits) {
    let num = digits.join('')
    return (BigInt(num)+BigInt(1)).toString().split('')
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))


//! Wrong Approach (Cannot handle big integers)
var plusOne = function(digits) {
    return ((Number(digits.join('')))+1).toString().split('')
};
