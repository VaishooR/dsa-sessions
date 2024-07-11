// Leetcode-342 : Power of Four

function PowerOfFour(num){
    if(num <= 0) { return false }
    while(num > 1){
        if(num % 4 == 0){
            num = num / 4
        }else{
            return false
        }
    }
    return true    
}
console.log(PowerOfFour(16))