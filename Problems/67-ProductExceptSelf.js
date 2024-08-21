// Leetcode-238 : Product of Array Except Self

var productExceptSelf = function(nums) {
    let leftArray = new Array(nums.length).fill(1)
    let rightArray = new Array(nums.length).fill(1)
    
    for(let i = 1; i < nums.length; i++) {
        leftArray[i] = leftArray[i-1] * nums[i-1]
    }

    for(let i = nums.length-2; i >= 0 ; i--) {
        rightArray[i] = rightArray[i+1] * nums[i+1]
    }
    
    let result = new Array(nums.length)
    for(let i = 0; i < result.length; i++) {
        result[i] = leftArray[i] * rightArray[i] 
    }
    return result
};
productExceptSelf([3,4,6,1,2])