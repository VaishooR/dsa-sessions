// Leetcode-27 : Remove Element


// APPROACH-1
function RemoveElement(nums,val){
    let k=0
    for(let i=0;i<nums.length;i++){
       if(nums[i]!==val){
         nums[k]=nums[i]
         k++
       }  
    }
    console.log(k)
 }
 RemoveElement([3,2,2,3],3)
 
 
 
 
 //! WRONG APPROACH (using splice)
 var removeElement = function (nums, val) {
    for(let i=0;i<nums.length;i++){
      if(nums[i]==val){
         nums.splice(i,1);
      }  
    }
    return nums
 };
 console.log(removeElement([3,2,2,3],3))
 console.log(removeElement([0,1,2,2,3,0,4,2],2)) 