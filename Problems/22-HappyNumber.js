// Leetcode-202 :  Happy Number

// APPROACH-1
function HappyNumber(num){
    let strNum=num.toString();
    while(strNum != 1){
     let sum=0;
     for(let i=0; i<strNum.length; i++){
         sum+=Number(strNum[i])*Number(strNum[i])
     }
     console.log(sum)
     if(sum == 4){
         console.log(`${num} is NOT a Happy number`);
         return;
     }
     strNum=sum.toString()
    }
     console.log(`${num} is a Happy number`)
 }
 HappyNumber(19)
 
 
 
 // APPROACH-2
 function isHappyNumber(input){
     let n=input
     while(n!=1 && n!=4){
        n= EachSum(n)
     }   
     return n==1 ? `${input} is a Happy Number` :`${input} is Not a happy number`
 }
 function EachSum(num){
      let sum=0;
      while(num>0){
         let digit=num%10         //29%10=9       //2%10=2
         sum += digit * digit     //sum=0+9*9=81  //sum=81+2*2=85
         num = Math.floor(num/10) //num=29/10=2   //num=85/10=8...  
      }
      return sum
 }
 console.log(isHappyNumber(29))