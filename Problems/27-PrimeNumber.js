// Check if it is prime number.

function CheckPrimeNumber(num){
    if(num <= 0) { return false}
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i == 0){ return false}
    }
    return true
}
console.log(CheckPrimeNumber(19))
