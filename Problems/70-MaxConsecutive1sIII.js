// Leetcode-1004 : Max Consecutive Ones III


var longestOnes = function(nums, k) {
    let s = 0, e = 0;
    let n = nums.length;
    while(e < n){
        if(nums[e] == 0){ k-- }
        if(k < 0){
            if(nums[s] == 0){ k++ }
            s++
        }
        e++
    }
    return e-s;
};
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))