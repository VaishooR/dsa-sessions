// Leetcode-3 : Longest Substring Without Repeating Characters


// APPROACH : (Sliding Window)

// Time : O(n)   Space : O(n)

var lengthOfLongestSubstring = function(s) {
    let set=new Set();
    let start=0;
    let maxCount=0;
    
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    
    for(let i=0; i<s.length; i++) {
        while(set.has(s[i])) {
            set.delete(s[start])
            start++
        }
        set.add(s[i])
        maxCount = Math.max(maxCount,i-start+1)
    }
    return maxCount  
};
console.log(lengthOfLongestSubstring("abcabcbb"))