// Leetcode-26 : Remove Duplicates from Sorted Array


// APPROACH-1  (Swapping)    **(Own Code 😍)
var removeDuplicates = function(nums) {
    let val=nums[0]
    let k=1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i]!==val){
           nums[k] = nums[i]
           val=nums[k]
           k++
        }
    } 
    for(let j=k;j<nums.length;j++) {
        nums[j] = ""
    }
    return k
};
removeDuplicates([0,0,0,1,1,1,2,2,3,4,4,4,7,7,10])



//! Wrong Approach  
var removeDuplicates1 = function(nums) {
    let num= nums[0]
    let count=1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i]==num){
           continue
        }else{
            count++
            num = nums[i]
        }
    } 
    console.log(count);  //length is correct, array elements are wrong.
};
removeDuplicates1([0,0,1,1,1,2,2,3,3,4,5,5,9])
