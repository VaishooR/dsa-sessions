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
