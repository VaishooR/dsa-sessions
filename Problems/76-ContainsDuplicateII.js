// Leetcode-219 : Contains Duplicate II


// APPROACH-1 : //! (Wrong Approach - Time Limit Exceeded)
var containsNearbyDuplicate = function(nums, k) {
    let ans = false
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]==nums[j]){
                console.log(nums[i],nums[j],i,j)
                if( j-i <= k ){
                    ans = true
                }
            }
        }
    }
    return ans
};
console.log(containsNearbyDuplicate([1,2,3,1],3))
console.log(containsNearbyDuplicate([1,0,1,1],1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))



// APPROACH-2 : (Sliding Window)
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(i - map.get(nums[i]) <= k){
            return true
        }
        map.set(nums[i],i)
    }
    return false
};
console.log(containsNearbyDuplicate([1,2,3,1],3))
console.log(containsNearbyDuplicate([1,0,1,1],1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))