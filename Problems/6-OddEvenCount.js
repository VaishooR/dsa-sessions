// Question : In a given range, find the number of odd numbers and even numbers.
// Also print all the numbers in the given range as odd or even.
// 1 --> odd
// 2 --> even
// 3 --> odd
// 4 --> even

function oddEven(n){
    if(n<1){
       console.log("Invalid Input");
       return;
    }
    let evenCount=0,oddCount=0;
     for(let i=1;i<=n;i++){
       if(i%2 == 0){ 
          evenCount++;
          console.log(i,"--> even")
       }else{
          oddCount++
          console.log(i,"--> odd")
       }
     }
     console.log("even count is ",evenCount)
     console.log("odd count is ",oddCount)
 }
 oddEven(0)