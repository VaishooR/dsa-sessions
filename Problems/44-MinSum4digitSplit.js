// Leetcode-2160 : Minimum Sum of Four Digit Number After Splitting Digits

function SplitFourDigitMinSum(num){
    let arr = num.toString().split('').sort() 
    let num1 = Number(arr[0]*10) + Number(arr[2])
    let num2 = Number(arr[1]*10) + Number(arr[3])
    return num1+num2
}
SplitFourDigitMinSum(2932)