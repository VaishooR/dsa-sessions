// Leetcode-28 : Find the Index of the First Occurrence in a String


// APPROACH : (Without Built-in methods)

// Time : O(m*n)   Space : O(1)

var strStr = function(haystack, needle) {
    if(needle.length > haystack.length){return -1}
    let i=0,j=0,k=0;
    while(i < haystack.length){
        while(needle[j] == haystack[k]){
            j++;
            k++;
            if(j == needle.length){return i}
            if(k == haystack.length){return -1}
        }
        if(needle[j] != haystack[k]){
            i++; 
            j=0;
            k=i;
        }
    }
    return -1    
};