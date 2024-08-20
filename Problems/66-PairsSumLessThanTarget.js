// Leetcode-2824 : Count Pairs Whose Sum is Less than Target

// APPROACH-1 : (Brute Force)
var countPairs = function(nums, target) {
    let n = nums.length, count = 0;
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++){
            if(nums[i]+nums[j] < target){
                count+=1;
            }
        }
    }
    return count;
};
console.log(countPairs([-1,1,2,3,1],2))



// APPROACH-2 : (Two Pointers)
var countPairs1 = function(nums, target){
    nums.sort((a,b)=>a-b)
    let s=0, e=nums.length-1,count=0;
    while(s < e){
        if(nums[s]+nums[e] < target){
           count += e-s;
           s += 1;
        }else{
           e -= 1;
        }
    }
    return count;
}
console.log(countPairs1([-1,1,2,3,1],2))
