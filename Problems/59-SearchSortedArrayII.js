// Leetcode-81 : Search in Rotated Sorted Array II


// APPROACH (Modified Binary Search)
var search = function(nums, target) {
    let s=0;
    let e=nums.length-1;

    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(nums[mid]==target){
            return true
        }
        if(nums[s]==nums[mid] && nums[mid]==nums[e]){
            s++;
            e--;
            continue;
        }
        if(nums[s]<=nums[mid]){
            if(nums[s] <= target && target <= nums[mid]){
                e = mid-1
            }else{
                s = mid+1
            }
        }else{
            if(nums[mid] <= target && target <= nums[e]){
                s = mid+1;
            }else{
                e = mid-1
            }
        }
    }
    return false;
};
console.log(search([2,5,6,0,0,1,2],3))
console.log(search([2,5,6,0,0,1,2],0))