// Leetcode-367 : Valid Perfect Square

var isPerfectSquare = function(num) {
    // return num ** 0.5 == parseInt(num ** 0.5)
    let s=0;
    let e=num/2;
    while(s<=e){
        let mid=Math.floor((s+e)/2);
        let midSquare = mid * mid;
        if(midSquare == num){
            return true
        }
        if(midSquare < num){
            s = mid + 1;
        }else{
            e = mid - 1;
        }
    }
    return false;
};
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(256))