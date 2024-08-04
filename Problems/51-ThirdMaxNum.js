// Leetcode-414 : Third maximum number

var thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a,b)=>b-a)
    return nums.length <= 2 ? nums[0] : nums[2] 
};
console.log(thirdMax([5,2,6,2,5,9]))
console.log(thirdMax([5,2]))
console.log(thirdMax([3,3]))