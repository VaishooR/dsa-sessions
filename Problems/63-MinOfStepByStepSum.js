// Leetcode-1413 : Minimum Value to Get Positive Step by Step Sum

var minStartValue = function(nums) {
    let prefixArr = [];
    let minSum=1;
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        prefixArr.push(sum)
        if(sum < minSum){
            minSum = sum;
        }
    }
    return minSum < 0 ? Math.abs(minSum) + 1 : minSum;
};
console.log(minStartValue([-3,2,-3,4,2]))
console.log(minStartValue([1,2]))