// Find Minimum of three numbers


// APPROACH-1 (using in-built methods)
function MinimumOfThree(num1,num2,num3){
    return Math.min(num1,num2,num3)
}
console.log(MinimumOfThree(5,0,-2))



// APPROACH-2 (without in-built methods)
function MinimumOfThree(num1,num2,num3){
    let min=num1;
    if(num2<min){
        min=num2;
    }
    if(num3<min){
        min=num3;
    }
    return min
}
console.log(MinimumOfThree(10,20,30))




// APPROACH-3
function minimumOf3Numbers1(a,b,c){
    return (a < b) ? (a < c ? a : c) : (b < c ? b : c) 
}
console.log(minimumOf3Numbers1(41,22,32))




// APPROACH-4
function findMin(num1,num2,num3){
    if(num1<num2 && num1<num3){
      console.log("Minimum Num is :",num1)
      return;
    }else if(num2<num1 && num2<num3){
      console.log("Minimum Num is :",num2)
      return;
    }else if(num3<num1 && num3<num2){
      console.log("Minimum Num is :",num3)
      return;
    }
}
findMin(122,52,23)