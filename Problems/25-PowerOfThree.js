// Leetcode-326 : Power of Three

function PowerOfThree(num){
    if(num<=0){return false}
    if(num==1){return true}
    while(num > 1){
      if(num % 3 == 0){
        num = num / 3
      }else{
        return false
      }
    }
    return true 
  }
  console.log(PowerOfThree(81))