// Leetcode-69 : Sqrt(x)

// In-built method
var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x))
}




// Linear Search
function SqrtUsingLinearSearch(squareNum){
    let ans=0;
    for(let i=0;i<=squareNum/2;i++){
       if(i*i <= squareNum){
        ans = i
       }else{
        return ans;
       }
    }
    return ans;
}
console.log(SqrtUsingLinearSearch(198))




// Binary Search
var mySqrt = function (x) {
    let left = 0;
    let right = x;
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if(mid*mid <= x && (mid+1) * (mid+1) > x) {
            return mid;
        }
        else if(mid*mid < x) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
}