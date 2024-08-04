// Leetcode-53 : Maximum Subarray


// APPROACH-1 //!(Wrong - Time Limit Exceeded)
var maxSubArray = function(nums) {
    let maxSum=0;
    for (let i=0; i<nums.length; i++){
        let currentSum = 0;
        for(let j=i; j<nums.length; j++){
            currentSum += nums[j];

            if(currentSum > maxSum){
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([5,4,-1,7,8]))





// APPROACH-2
var maxSubArray = function(nums) {
    if(nums == null || nums.length == 0){
        return 0
    }
    if(nums.length == 1){
        return nums[0]
    }
    let maxSum = -Infinity;
    let sum = 0;
    for (let i=0; i<nums.length; i++){
        sum += nums[i]
        if(nums[i] > sum){
            sum = nums[i]
        }
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([5,4,-1,7,8]))