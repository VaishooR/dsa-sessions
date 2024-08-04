// Leetcode-1470 : Shuffle the Array

var shuffle = function(nums, n) {
    let result=[]
    let k=n;
    for(let i=0; i<n; i++) {
        result.push(nums[i])
        result.push(nums[k])
        k++
    }
    console.log(result)
    return result
};
shuffle([2,5,1,3,4,7],3)
shuffle([1,2,3,4,4,3,2,1],4)