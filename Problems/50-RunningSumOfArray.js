// Leetcode-1480 : Running Sum of 1d Array

// APPROACH-1
var runningSum = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++){
        let sum = 0;
        for (let j = 0; j <= i; j++){
            sum += nums[j];
        }
        res.push(sum);
    }
    return res;
};
runningSum([1,2,3,4])
runningSum([1,1,1,1,1])
runningSum([3,1,2,10,1])



// APPROACH-2
var runningSum1 = function(nums) {
    let prefixSumArray = [];
    prefixSumArray[0]=nums[0];
    for(let i=1; i<nums.length; i++) {
        prefixSumArray[i] = nums[i] + prefixSumArray[i-1];
    }
    console.log(prefixSumArray)
    return prefixSumArray
};
runningSum1([1,2,3,4])
runningSum1([1,1,1,1,1])
runningSum1([3,1,2,10,1])



// APPROACH-3
var runningSum2 = function (nums) {
    let total = 0;
    let ans = nums.map((num) => total+=num );
    return ans
};
runningSum2([1,2,3,4])



// APPROACH-4
var runningSum3 = function (nums) {
    let result = []
    let current = 0;
    for(let i = 0; i < nums.length; i++){
        current += nums[i]
        nums[i] = current
    }
    return nums
};
runningSum3([1,2,3,4])