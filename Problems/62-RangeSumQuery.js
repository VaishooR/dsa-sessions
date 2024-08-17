// Leetcode-303 : Range Sum Query - Immutable

function NumArray(nums){
    this.sums = [];
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        this.sums.push(sum)
    }
}

NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right] - (left > 0 ? this.sums[left - 1] : 0);
  };
