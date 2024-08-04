// Leetcode-1480 : Running Sum of 1d Array

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