// Find the GCD of two numbers.


// Explanation:  
// -----------
// gcd(56,98) is 14
// 98 % 56 = 42
// 56 % 42 = 14
// 42 % 14 = 0


function gcd(a,b){
    let temp;
    while(b!=0){
        temp=b;
        b = a % b;
        a = temp;
        console.log('a is :',a, 'b is :',b) 
    }
    console.log(temp)  
}
gcd(98,56)


console.log(98%56)  //42
console.log(56%98)  //56  --> reason: smallNum % largeNum = smallNum

// In cases where the 1st number is less than 2nd number, the first iteration converts the 'b' as small value and 'a' as higher value
// Else the first iteration directly starts calculating the remainder