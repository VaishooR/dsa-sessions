// Write a program to calculate the sum of the first 10 natural numbers.

function sum(n){
    if(n<1){
        console.log("Invalid number")
        return
    }
    let result=0;
    for(let i=1; i<=n; i++){
        result += i
    }
    console.log(`Sum of first ${n} natural numbers is = ${result}`);
 }
 sum(10)