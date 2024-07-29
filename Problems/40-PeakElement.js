// Leetcode-162 : Find Peak Element

// APPROACH-1 (Brute Force)
var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    if (nums.length === 1 || nums[start] > nums[start+1]) {
        return 0;
    }
    if (nums[end] > nums[end - 1]) {
        return end;
    }
    for (let i = 1; i < end; i++) { 
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }

    return -1;
};
console.log(findPeakElement([1,2,3,1]))
console.log(findPeakElement([5,2,3,1]))
console.log(findPeakElement([1,2,3,11]))