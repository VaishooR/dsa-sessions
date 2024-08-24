// Leetcode-217 : Contains Duplicate


// APPROACH-1 : (Set)
var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length
};



// APPROACH-2 : (Brute Force)
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};