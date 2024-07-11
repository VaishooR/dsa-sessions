function PowerOfTwo(num){
    if(num<=0){
       console.log("Enter Valid Number");
       return;
    }
    if(num==1){
       console.log("Power of Two")
       return;
    }
    let r=0, d=0;
    while(r!=1 && d!=1){
      r=num%2
      d=Math.floor(num/2)
      num=d
    }
    if(r==1){
      console.log("Not Power of Two")
      return;
    }
     if(d==1){
     console.log("Power of Two")
     return;
    } 
 }
 PowerOfTwo(64)
 
 function CheckPower(n){
   if(n<=0){return false}
   if(n==1){return true}
   while(n>1){    // 28:                       //16:
     if(n%2==0){  //0  //0 //1-->else block    //0 //0 //0 //0
       n=n/2      //14 //7                     //8 //4 //2 //1-->exit loop
     }else{
       return false
     }
   }
   return true
 }
 console.log(CheckPower(16))