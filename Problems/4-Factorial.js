// Program to calculate factorial of a number

// APPROACH-1
function factorial(n) {
   let result = 1;
   for (let i = n; i >= 2; i--) {
      result *= i 
   }
   return result
 }
 console.log(factorial(5))




//  APPROACH-2
 function fact(n){
   if(n==0){return 1}

   let factorial=1;
   for(let i=n;i>=2;i--){
    factorial *=i
   }
   return factorial;
}
console.log(fact(0));

  