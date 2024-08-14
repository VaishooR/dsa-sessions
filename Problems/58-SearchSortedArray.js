// Leetcode-33 : Search in Rotated Sorted Array


// APPROACH  (Modified Binary Search)
var search = function(nums, target) {
    let s=0;
    let e=nums.length-1;

    while(s<=e) {
        let mid = Math.floor((s+e)/2);
        if(nums[mid]==target){
            return mid;
        }
        if(nums[s] <= nums[mid]){
            if(nums[s] <= target && target <= nums[mid]){
                e = mid - 1;
            }else{
                s = mid + 1;
            }
            
        }else{
            if(nums[mid] <= target && target <= nums[e]){
                s = mid + 1;
            }else{
                e = mid - 1;
            }
        }
    }
    return -1;
};
console.log(search([4,5,6,7,0,1,2],0))
console.log(search([4,5,6,7,0,1,2],3))