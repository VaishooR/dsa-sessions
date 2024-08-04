// Leetcode-258 : Add Digits

var addDigits = function (num) {
    while(num>=10){
        num = addDigitsOnce(num)
    }
    return num    
} 
addDigits(38);

function addDigitsOnce(num){
    let sum =0;
    while (num > 0) {
      sum += (num % 10); 
      num = Math.floor(num / 10); 
    }
    return sum
}