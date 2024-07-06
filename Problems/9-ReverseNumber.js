// Write a program that prompts the user to input an integer
// and then outputs the number with the digits reversed. For example, if the
// input is 12345, the output should be 54321



// APPROACH-1 (using in-built methods)
function reverseNumber(num){
    if(num<0){
       console.log("Invalid number")
       return
    }
    console.log(num.toString().split('').reverse().join(''))
 }
 reverseNumber(-12345)



// APPROACH-2 (using loops)
function reverseNumber(num){
    if(num<0){
       console.log("Invalid number");
       return;
    }
    let reverse=0;
    while(num>0){
       let lastDigit = num%10;
       reverse=reverse*10+lastDigit;
       num = Math.floor(num/10)
    }
    console.log(reverse)
 }
 reverseNumber(12345)