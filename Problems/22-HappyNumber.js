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




//  APPROACH-3
function HappyNumber(num){
    let inputNum=num;
    while(num !== 1 && num !== 4){
       let sum=0;
       while(num > 0){    // <-- This loop runs for every single digit of the given number, When it reaches last digit it automatically becomes 0 and the loop ends
           let digit=num%10;           //19%10=9     //1%10=1  
           sum = sum + digit * digit;  //sum=0+81=81 //sum=81+1=82
           num = Math.floor(num / 10)  //19/10=1     //1/10=0
       }
       console.log(sum)
       num = sum;
    }

    if(num == 1){
       console.log(inputNum + " = Happy Number");
       return;
    }
    if(num == 4){
       console.log(inputNum + " = Not Happy Number");
       return;
    }
}
HappyNumber(19)