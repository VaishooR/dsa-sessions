// Leetcode-523 : Continuous Subarray Sum

// APPROACH : (Prefix Sum & HashMap)
var checkSubarraySum = function(nums, k) {
    if(nums.length < 2){return false}

    const map = new Map();
    map.set(0,-1);

    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum = sum + nums[i]
        sum = sum % k
        if(map.has(sum) && i-map.get(sum)>1){
            return true;
        }else if(!map.has(sum)){
            map.set(sum,i)
        }
    }
    return false;
};
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); // Output: true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)); // Output: true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));