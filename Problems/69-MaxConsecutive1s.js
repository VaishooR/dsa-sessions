// Leetcode-485 : Maximum Consecutive 1's

var findMaxConsecutiveOnes = function(nums) {
    let count=0;
    let maxCount=0;
    for (let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            count++;
            maxCount = Math.max(maxCount, count);
        }else{
            count = 0
        }
    }
    console.log(maxCount)
}
findMaxConsecutiveOnes([0,1,1,0,0,1,1,1,1,0,1])
findMaxConsecutiveOnes([-6,9,1,1,4,-3,1,1,1,0,9,1,1])