// Leetcode-2544 : Alternating Digit Sum

var alternateDigitSum = function(n) {
    let sum=0;
    let arr=n.toString().split('')
    for(let i=0; i<arr.length; i++){
       if(i%2 == 0){
        sum += Number(arr[i])
       }else{
        sum-= Number(arr[i])
       }
    }
    return sum
};
alternateDigitSum(521)
alternateDigitSum(111)
alternateDigitSum(886996)