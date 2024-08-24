// Leetcode-1493 : Longest Subarray of 1's After Deleting One Element


// APPROACH : (Sliding Window)

// Time : O(n)   Space : O(1)

var longestSubarray = function(nums) {
    let s = 0, e = 0;
    let n = nums.length;
    let k = 1; 

    while(e < n){
        if(nums[e] == 0){ k-- }
        if(k < 0){
            if(nums[s] == 0){ k++ }
            s++;
        }
        e++;
    }

    return e - s - 1;
};
console.log(longestSubarray([1,1,0,1]))
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))
console.log(longestSubarray([1,1,1]))
